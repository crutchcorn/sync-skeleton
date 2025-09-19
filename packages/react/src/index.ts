import { useEffect, useLayoutEffect, useState } from 'react'
import { getSkeletonObserver } from '@sync-skeleton/core'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const useSkeleton = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    return getSkeletonObserver(ref)
  }, [ref])

  return setRef
}
