import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'
import { Home } from './pages/Home/index.tsx'
import { Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart/index.tsx'
import { Confirmed } from './pages/Confirmed/index.tsx'
import { Header } from './components/Header/index.tsx'
import { ContainerAPP } from './app.styles.ts'


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerAPP>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmed" element={<Confirmed />} />
        </Routes>
        
      </ContainerAPP>
      <GlobalStyle />
    </ThemeProvider>

  )
}

export default App