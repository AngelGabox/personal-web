import About from './components/About/About'
import Carousel from './components/Carousel/Carousel'
import Picture from './components/Picture/Picture'
import Main from './components/Main/Main'
import "./index.css"
import Technologies from './components/Technologies/Technologies'
import TechnologiesCards from "./components/Technologies/TechnologiesCards"
import Footer from './components/Footer/Footer'
import { useRef } from 'react'

function App() {
const appRef = useRef(null)
  return (
    <div ref={appRef} className='app'>
      <Main appRef={appRef}>
        <Picture></Picture>
        <About></About>
        <Technologies></Technologies>
        {/* <TechnologiesCards></TechnologiesCards> */}
        {/* <Carousel></Carousel> */}
      </Main>
      <Footer></Footer>
    </div>
  )
}

export default App
