import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/styles/index.scss'
import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
