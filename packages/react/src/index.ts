import { useEffect, useLayoutEffect, useState } from 'react'
import { useStore } from '@tanstack/react-store'
import {
  getSkeletonObserver,
  percentageStore,
  setOptions,
  windowSizeEffect,
} from '@sync-skeleton/core'
import type { SkeletonOptions } from '@sync-skeleton/core'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function useSkeletonSetup(options?: SkeletonOptions) {
  useIsomorphicLayoutEffect(() => {
    if (!options) return
    setOptions(options)
  }, [options])

  useIsomorphicLayoutEffect(() => {
    return windowSizeEffect.mount()
  }, [])
}

export const useSkeleton = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null)

  const percentageVal = useStore(percentageStore)

  useIsomorphicLayoutEffect(() => {
    if (!ref) return
    ref.style.setProperty('--skeleton-percentage', `${percentageVal}`)
  }, [ref, percentageVal])

  useIsomorphicLayoutEffect(() => {
    return getSkeletonObserver(ref)
  }, [ref])

  return setRef
}
