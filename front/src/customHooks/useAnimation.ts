import { useState } from 'react'

const mountedStyle = {
  animation: 'inAnimation 300ms ease-in',
}
const unmountedStyle = {
  animation: 'outAnimation 300ms ease-out',
  animationFillMode: 'forwards',
}

function useAnimation() {
  const [isComponentOpen, setIsComponentOpen] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const animation = isMounted ? unmountedStyle : mountedStyle

  const toggleComponent = () => {
    if (isComponentOpen) {
      setIsMounted((prev) => !prev)
    } else {
      setIsComponentOpen((prev) => !prev)
    }
  }

  const toggleAnimation = () => {
    if (!isComponentOpen) {
      setIsComponentOpen(false)
    }
  }
  return { isComponentOpen, animation, toggleComponent, toggleAnimation }
}

export default useAnimation
