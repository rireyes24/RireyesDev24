import { useState } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Header } from '../components/Portfolio_Header'
import { Body } from '../components/Portfolio_Body'
import { NavigatorPortfolio } from '../components/NavigatorBar'
import './App.css'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Portfolio_Footer'

function App() {  

  const [hiddenMenu, setHiddenMenu] = useState(true);

  return (
    <>
      <Header />
      <Body></Body>
      <Footer></Footer>
    </>
  )
}

export default App
