import { useState } from "react"

export interface Stack<T> {
  pop: () => void
  push: (v: T) => void
  reset: () => void
  length: () => number
}

export const useStack = <T>(init?: T[]): [T, Stack<T>] => {
  const initStack: T[] = init ?? []
  const [stack, setStack] = useState<T[]>(initStack)

  const pop = (): void => {
    if (stack.length === 0) {
      return
    }

    const newStack = [...stack.slice(0, stack.length - 1)]
    setStack(newStack)
  }

  const push = (v: T): void => {
    const newStack = [...stack, v]
    setStack(newStack)
  }

  const reset = (): void => {
    setStack(initStack)
  }

  const length = (): number => stack.length

  return [stack[stack.length - 1], { pop, push, reset, length }]
}
