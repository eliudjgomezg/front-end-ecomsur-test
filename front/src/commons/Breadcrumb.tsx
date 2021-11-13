import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type TBreadcrumb = {
  className?: string
}

const Breadcrumb: React.FC<TBreadcrumb> = (props) => {
  const { pathname } = useLocation()
  const [params, setParams] = useState<any[]>([])

  useEffect(() => {
    setParams(`Inicio${pathname}`.split('/'))
  }, [pathname])

  return (
    <nav className={props.className}>
      {pathname !== '/' && (
        <ul>
          {params.map((param: string, i: number) => {
            return (
              <span key={i}>
                {i === params.length - 1 ? (
                  <li className='inline'>
                    <span className={`p--md ${i + 1 === params.length ? 'text-primary' : 'text-gray'}`}>
                      {param} <span className={`mx-05 ${i + 1 === params.length ? 'hidden' : 'inline'}`}>{'>'}</span>
                    </span>
                  </li>
                ) : (
                  <li className='inline'>
                    <Link to={param === 'Inicio' ? '/' : param}>
                      <span className={`p--md ${i + 1 === params.length ? 'text-primary' : 'text-gray'}`}>
                        {param} <span className={`mx-05 ${i + 1 === params.length ? 'hidden' : 'inline'}`}>{'>'}</span>
                      </span>
                    </Link>
                  </li>
                )}
              </span>
            )
          })}
        </ul>
      )}
    </nav>
  )
}

export default Breadcrumb
