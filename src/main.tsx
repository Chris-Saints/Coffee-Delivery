import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App  from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CarrinhoProvider } from './contexts/CarrinhoProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarrinhoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CarrinhoProvider>
  </StrictMode>,
)
