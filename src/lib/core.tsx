import { Effect, Store } from "@tanstack/store";

export const percentageStore = new Store(0);
const renderedComponents = new Store(0);
const animationDurationStore = new Store(2000); // in milliseconds


export interface SkeletonOptions {
    animationSpeed?: number; // pixels per second (default: 400)
    highlightSize?: number; // in pixels (default: 40)
    highlightColor?: string; // CSS color value
    baseColor?: string; // CSS color value
}

const defaultOptions: SkeletonOptions = {
    animationSpeed: 400,
    highlightSize: 40,
    highlightColor: "#f5f5f5",
    baseColor: "#ebebeb",
}

const optionsStore = new Store(defaultOptions as Required<SkeletonOptions>);

export function addComponent() {
    renderedComponents.setState((count) => count + 1);
}

export function removeComponent() {
    renderedComponents.setState((count) => Math.max(0, count - 1));
}

function setAnimationDuration(duration: number) {
    animationDurationStore.setState(duration);
}

export function setOptions(options: SkeletonOptions) {
    optionsStore.setState(() => {
        const fullOptions = Object.entries(options).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key as keyof SkeletonOptions] = value;
            }
            return acc;
        }, {} as Partial<SkeletonOptions>);
        if (fullOptions.highlightSize) { document.body.style.setProperty("--skeleton-highlight-size", `${fullOptions.highlightSize}px`); }
        if (fullOptions.highlightColor) { document.body.style.setProperty("--skeleton-highlight-color", fullOptions.highlightColor); }
        if (fullOptions.baseColor) { document.body.style.setProperty("--skeleton-base-color", fullOptions.baseColor); }
        const newOptions = { ...defaultOptions, ...fullOptions } as Required<SkeletonOptions>;
        return newOptions;
    });
}

let frameId: number;
export const timingEffect = new Effect({
    deps: [renderedComponents, animationDurationStore],
    fn: () => {
        if (frameId !== undefined) {
            cancelAnimationFrame(frameId)
        }
        const componentCount = renderedComponents.state;
        const animationDuration = animationDurationStore.state;

        if (componentCount === 0) {
            return
        }

        // Count to 100 in `animationDuration` milliseconds, updating the percentage store
        // Loop every `animationDuration` milliseconds so that the percentage goes from 0 to 100 repeatedly
        let start: number | null = null

        const step = (timestamp: number) => {
            if (!start) start = timestamp
            const elapsed = timestamp - start
            const progress = (elapsed % animationDuration) / animationDuration
            percentageStore.setState(() => progress * 100)
            frameId = requestAnimationFrame(step)
        }

        frameId = requestAnimationFrame(step)
    },
    eager: true
})

const setWindowSize = () => {
    const windowWidth = window.innerWidth
    document.body.style.setProperty("--skeleton-window-width", `${windowWidth}px`)
    // Calculate duration based on window width and speed: distance / speed * 1000 (to convert to ms)
    // We add highlight size to the distance to account for the full travel
    const distance = windowWidth + optionsStore.state.highlightSize
    const calculatedDuration = (distance / optionsStore.state.animationSpeed) * 1000
    setAnimationDuration(calculatedDuration)
}

export const windowSizeEffect = new Effect({
    deps: [optionsStore],
    fn: () => {
        window.removeEventListener("resize", setWindowSize)
        setWindowSize();
        window.addEventListener("resize", setWindowSize)
    },
    eager: true
})

export function getSkeletonObserver(ref: HTMLElement | null) {
    if (!ref) return
    const observer = new ResizeObserver((entries) => {
        const rect = ref.getBoundingClientRect()
        ref.style.setProperty("--skeleton-left", `${rect.left}px`)
        for (let entry of entries) {
            const width = entry.contentRect.width
            ref.style.setProperty("--skeleton-width", `${width}px`)
        }
    })
    observer.observe(ref)
    return () => {
        observer.disconnect()
    }
}