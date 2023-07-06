import About from './components/About/About'
import Carousel from './components/Carousel/Carousel'
import Picture from './components/Picture/Picture'
import Main from './components/Main/Main'
import "./index.css"
import Technologies from './components/Technologies/Technologies'

function App() {

  return (
    <div className='app'>
      <Main>
        <Picture></Picture>
        <About></About>
        {/* <Carousel></Carousel> */}
        <Technologies></Technologies>
      </Main>
    </div>
  )
}

export default App
