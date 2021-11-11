import autoBind from 'auto-bind'
import endpoints from 'constants/endpoints'
import { IProduct } from 'models/IProduct'

class APIClient {
  server: string
  endpoints = endpoints
  mode: any

  constructor(props: { SERVER: 'PROD' | 'DEV' | 'STAGING' }) {
    this.server = getServerUrl(props.SERVER)
    this.mode = props.SERVER
    autoBind(this)
  }

  async fetch<T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
    data: FormData | any = undefined
  ): Promise<T> {
    const body = JSON.stringify(data)
    const headers = { 'Content-Type': 'application/json' }

    return await fetch(`${this.server}${url}`, { method, body, headers }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw { name: 'Fetch error', response: res }
    })
  }

  getProducts(): Promise<IProduct[]> {
    return this.fetch(this.endpoints.products, 'GET')
  }
  getProduct(_id: string): Promise<IProduct> {
    return this.fetch(this.endpoints.product(_id), 'GET')
  }
}

function getServerUrl(mode: 'PROD' | 'DEV' | 'STAGING') {
  switch (mode) {
    case 'DEV':
      return 'http://localhost:5000/' //Posteriormente se guarda esta variable en su respectivo archivo .env.development
    case 'PROD':
      return process.env.REACT_APP_BACKEND_SERVER_URL!
    default:
      return 'http://localhost:5000/'
  }
}

const prod_or_dev_server = process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV'
const apiClient = new APIClient({ SERVER: prod_or_dev_server })

export { apiClient }
export default APIClient
