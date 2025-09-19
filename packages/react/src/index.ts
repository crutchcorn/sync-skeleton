import { useEffect, useState } from 'react'
import { getSkeletonObserver } from '@sync-skeleton/core'

export const useSkeleton = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    return getSkeletonObserver(ref)
  }, [ref])

  return setRef
}
