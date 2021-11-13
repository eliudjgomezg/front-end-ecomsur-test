import { Link } from 'react-router-dom'
import error404 from 'assets/images/error-404.png'
import routes from 'constants/routes'

const Error404: React.FC = () => {
  return (
    <Link to={routes.products}>
      <img src={error404} alt='error404' style={{ width: '100%' }} />
    </Link>
  )
}

export default Error404
