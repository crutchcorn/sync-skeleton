import { onMounted, onUnmounted, ref, watch, watchEffect } from 'vue'
import { useStore } from '@tanstack/vue-store'
import {
  getSkeletonObserver,
  percentageStore,
  setOptions,
  windowSizeEffect,
} from '@sync-skeleton/core'
import type { SkeletonOptions } from '@sync-skeleton/core'

export function useSkeletonSetup(optionsFn = () => ({}) as SkeletonOptions) {
  watch(
    optionsFn,
    (options) => {
      setOptions(options)
    },
    {
      immediate: true,
    },
  )

  let windowEffectCleanup: () => void
  onMounted(() => {
    windowEffectCleanup = windowSizeEffect.mount()
  })

  onUnmounted(() => {
    windowEffectCleanup()
  })
}

export const useSkeleton = () => {
  const elRef = ref<HTMLElement | null>(null)

  const percentageVal = useStore(percentageStore)

  watchEffect(() => {
    if (!elRef.value) return
    elRef.value.style.setProperty(
      '--skeleton-percentage',
      `${percentageVal.value}`,
    )
  })

  watch(elRef, (_value, _oldValue, onCleanup) => {
    const cleanup = getSkeletonObserver(elRef.value)
    onCleanup(() => {
      cleanup?.()
    })
  })

  return elRef
}
