import { useEffect, useRef, type DependencyList, type EffectCallback } from 'react'

export const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isFirst = useRef(false)

  useEffect(() => {
    if (!isFirst.current) {
      isFirst.current = true
      return
    }
    return effect()
  }, deps)
}
