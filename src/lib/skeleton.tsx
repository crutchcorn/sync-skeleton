import { createContext, useContext, useLayoutEffect, useState, type PropsWithChildren } from "react"
import { Store } from "@tanstack/store";
import { useStore } from "@tanstack/react-store";

const SkeletonContext = createContext({
  componentCount: 0,
  addComponent: () => { },
  removeComponent: () => { }
})

const percentage = new Store(0);

interface SkeletonProviderProps {
  animationDuration?: number; // in milliseconds
}

export function SkeletonProvider({ children, animationDuration: propsDuration }: PropsWithChildren<SkeletonProviderProps>) {
  const [componentCount, setComponentCount] = useState(0)

  const animationDuration = propsDuration ?? 2000

  const addComponent = () => setComponentCount(count => count + 1)
  const removeComponent = () => setComponentCount(count => Math.max(0, count - 1))

  useLayoutEffect(() => {
    if (componentCount === 0) {
      return
    }

    // Count to 100 in `animationDuration` milliseconds, updating the percentage store
    // Loop every `animationDuration` milliseconds so that the percentage goes from 0 to 100 repeatedly
    let start: number | null = null
    let frameId: number

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = (elapsed % animationDuration) / animationDuration
      percentage.setState(() => progress * 100)
      frameId = requestAnimationFrame(step)
    }

    frameId = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [componentCount, animationDuration])

  useLayoutEffect(() => {
    const setWindowSize = () => {
      document.body.style.setProperty("--skeleton-window-width", `${window.innerWidth}px`)
    }
    setWindowSize()
    window.addEventListener("resize", setWindowSize)
    return () => {
      window.removeEventListener("resize", setWindowSize)
    }
  }, [])

  return (
    <SkeletonContext.Provider value={{ componentCount, addComponent, removeComponent }}>
      {children}
    </SkeletonContext.Provider>
  )
}

export const useSkeleton = () => {
  const context = useContext(SkeletonContext)

  const [ref, setRef] = useState<HTMLElement | null>(null)

  const percentageVal = useStore(percentage)

  useLayoutEffect(() => {
    if (!ref) return
    ref.style.setProperty("--skeleton-percentage", `${percentageVal}%`)
  }, [ref, percentageVal])

  useLayoutEffect(() => {
    if (!ref) return
    context.addComponent()
    return () => {
      context.removeComponent()
    }
  }, [ref, context])

  // Get the element's `left` position on the page and set it as a CSS variable; change it using a ResizeObserver
  useLayoutEffect(() => {
    if (!ref) return
    const observer = new ResizeObserver((entries) => {
      const rect = ref.getBoundingClientRect()
      ref.style.setProperty("--skeleton-left", `${rect.left}px`)
      ref.style.setProperty("--skeleton-top", `${rect.top}px`)
      for (let entry of entries) {
        const width = entry.contentRect.width
        ref.style.setProperty("--skeleton-width", `${width}px`)
      }
    })
    observer.observe(ref)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return setRef
}
