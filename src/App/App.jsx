import { useState } from 'react'
import { Header } from '../components/Portfolio_Header'
import { Body } from '../components/Portfolio_Body'
import { NavigatorPortfolio } from '../components/NavigatorBar'
import './App.css'
import { Menu } from '../components/Menu'

function App() {  

  const [hiddenMenu, setHiddenMenu] = useState(true);

  return (
    <>
      <NavigatorPortfolio setHiddenMenu={setHiddenMenu} hiddenMenu={hiddenMenu}></NavigatorPortfolio>
      {!hiddenMenu ? <Menu></Menu> : <></>}
      <Header />
      <Body></Body>
    </>
  )
}

export default App
