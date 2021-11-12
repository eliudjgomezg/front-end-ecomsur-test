import React, { useEffect, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC = (props: PropsWithChildren<any>) => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') window.scrollTo(0, 0)
  }, [pathname])

  return props.children
}

export default ScrollToTop
