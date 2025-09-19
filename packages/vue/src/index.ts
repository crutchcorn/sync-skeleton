import { ref, watch } from 'vue'
import { getSkeletonObserver } from '@sync-skeleton/core'

export const useSkeleton = () => {
  const elRef = ref<HTMLElement | null>(null)

  watch(elRef, (_value, _oldValue, onCleanup) => {
    const cleanup = getSkeletonObserver(elRef.value)
    onCleanup(() => {
      cleanup?.()
    })
  })

  return elRef
}
