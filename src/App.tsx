import { ThemeProvider } from 'styled-components'


import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'
import { Header } from './components/Header/index.tsx'
import { Home } from './pages/Home/index.tsx'
import { Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart/index.tsx'
import { Confirmed } from './pages/Confirmed/index.tsx'


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmed" element={<Confirmed />} />
      </Routes>
      <GlobalStyle />
    </ThemeProvider>

  )
}

export default App