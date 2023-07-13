import React, { useRef } from 'react'
import Button from '../Bottom/Button'
import { useSpring, animated } from '@react-spring/web'
import "./Main.css"

const divGenerator = (styles)=>{
  const bubbles = []
  const numberDivs = Math.floor(Math.random() * 10)
  for (let i = 0; i < numberDivs; i++) {
    const x = Math.floor(Math.random() * 100)
    const y = Math.floor(Math.random() * 100)
    const styles = {
      top: `${y}%`,
      left: `${x}`
    }
    bubbles.push(<animated.div key={i} className={i<(numberDivs/2)?"bubble-one infinite":"bubble-two infinite"} style={styles}></animated.div>)
  }
  return bubbles;
}



function Main({appRef, children}) {
    const mainRef= useRef(null) 
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 1, color: '#ff0080', transform: 'scale(1)' },
        { opacity: 0.5, color: '#00ff80', transform: 'scale(1.5)' },
        { opacity: 1, color: '#0080ff', transform: 'scale(1)' },
      ],
      from: { opacity: 0, color: '#0080ff', transform: 'scale(1.5)', zIndex: -10 },
    });
    // mainRef.current.classList.remove("container")
    // mainRef.current.classList.add("containerAnimated")

  return (
    <main ref={mainRef} className='main'>
      {/* <div className="background">
        <animated.div className="lamp" style={styles}/>
      </div> */}
      <div className="lamp">
        {divGenerator()}
      </div>
        <Button appRef={appRef}></Button>
        {children}
    </main>
  )
}

export default Main