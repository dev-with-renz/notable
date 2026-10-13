import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import './main.css'
import reportWebVitals from './reportWebVitals'

const queryClient = new QueryClient()

if (import.meta.env.DEV) {
  reportWebVitals((metric) => {
    console.info('[Web Vitals]', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
    })
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
) 
