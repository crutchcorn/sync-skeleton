import { createContext, useContext, useLayoutEffect, useState } from "react"

const SkeletonContext = createContext({
  componentCount: 0,
  addComponent: () => { },
  removeComponent: () => { }
})

export function SkeletonProvider({ children }: { children: React.ReactNode }) {
  const [componentCount, setComponentCount] = useState(0)

  const addComponent = () => setComponentCount(count => count + 1)
  const removeComponent = () => setComponentCount(count => Math.max(0, count - 1))

  // Start a timer when the first component is added
  // Stop the timer when the last component is removed
  // Do not expose the timer to the context, instead make it a global singleton

  return (
    <SkeletonContext.Provider value={{ componentCount, addComponent, removeComponent }}>
      {children}
    </SkeletonContext.Provider>
  )
}

export const useSkeleton = () => {
  const context = useContext(SkeletonContext)

  const [ref, setRef] = useState<HTMLElement | null>(null)

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
