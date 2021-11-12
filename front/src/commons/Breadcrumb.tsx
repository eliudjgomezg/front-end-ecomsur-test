import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

type props = {
  className?: string
}

function Breadcrumb({ className }: props) {
  const { pathname } = useLocation()
  console.log(pathname)
  console.log(history.location.pathname)
  const [params, setParams] = useState<any[]>([])

  useEffect(() => {
    setParams(`Inicio${pathname}`.split('/'))
  }, [pathname])

  return (
    <nav className={className}>
      {pathname !== '/' && (
        <ul>
          {params.map((param: string, i: number) => {
            return (
              <li key={i} className='inline'>
                <Link to={param === 'Inicio' ? '/' : param}>
                  <span className={`p--md ${i + 1 === params.length ? 'text-primary' : 'text-gray'}`}>
                    {param} <span className={`mx-05 ${i + 1 === params.length ? 'hidden' : 'inline'}`}>{'>'}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  )
}

export default Breadcrumb
