import React from 'react'

import { YMaps } from '@pbe/react-yandex-maps'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <YMaps>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </YMaps>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
