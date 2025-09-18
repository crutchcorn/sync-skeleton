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

  if (!context) {
    throw new Error("useSkeleton must be used within a SkeletonProvider")
  }

  useLayoutEffect(() => {
    context.addComponent()
    return () => {
      context.removeComponent()
    }
  })

  return context
}
