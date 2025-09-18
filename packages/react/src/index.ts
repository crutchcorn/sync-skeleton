import { useLayoutEffect, useState } from 'react'
import { useStore } from '@tanstack/react-store'
import {
  addComponent,
  getSkeletonObserver,
  percentageStore,
  removeComponent,
  setOptions,
  timingEffect,
  windowSizeEffect,
} from '@sync-skeleton/core'
import type { SkeletonOptions } from '@sync-skeleton/core'

export function useSkeletonSetup(options?: SkeletonOptions) {
  useLayoutEffect(() => {
    if (!options) return
    setOptions(options)
  }, [options])

  useLayoutEffect(() => {
    return windowSizeEffect.mount()
  }, [])

  useLayoutEffect(() => {
    return timingEffect.mount()
  }, [])
}

export const useSkeleton = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null)

  const percentageVal = useStore(percentageStore)

  useLayoutEffect(() => {
    if (!ref) return
    ref.style.setProperty('--skeleton-percentage', `${percentageVal}`)
  }, [ref, percentageVal])

  useLayoutEffect(() => {
    if (!ref) return
    addComponent()
    return () => {
      removeComponent()
    }
  }, [ref])

  useLayoutEffect(() => {
    return getSkeletonObserver(ref)
  }, [ref])

  return setRef
}
