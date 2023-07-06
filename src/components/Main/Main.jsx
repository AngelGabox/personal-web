import React, { useRef } from 'react'
import Button from '../Bottom/Button'
import "./Main.css"

function Main({children}) {
    const mainRef= useRef(null) 
    // mainRef.current.classList.remove("container")
    // mainRef.current.classList.add("containerAnimated")
  return (
    <main ref={mainRef} className='main'>
        <Button></Button>
        {children}
    </main>
  )
}

export default Main