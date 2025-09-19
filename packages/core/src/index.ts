export function getSkeletonObserver(ref: HTMLElement | null) {
  if (!ref) return
  const observer = new ResizeObserver((entries) => {
    const rect = ref.getBoundingClientRect()
    ref.style.setProperty('--skeleton-left', `${rect.left}px`)
    for (const entry of entries) {
      const width = entry.contentRect.width
      ref.style.setProperty('--skeleton-width', `${width}px`)
    }
  })
  observer.observe(ref)
  return () => {
    observer.disconnect()
  }
}
