import React, { useEffect, useRef, useState } from 'react'
import Button from "../Bottom/Button.jsx"
import photo_1 from "../../assets/original_photo.png"
import photo_2 from "../../assets/photo002.png"
import photo_3 from "../../assets/photo_Draw.jpg"
import photo_4 from "../../assets/prety_photo.jpg"
import photo_5 from "../../assets/simpson_photo.png"
import photo_6 from "../../assets/photo001.png"
import "./Picture.css"

export default function Picture(){ 

  const photos = [photo_1, photo_5, photo_3, photo_4, photo_2, photo_6]
  const [index, setIndex] = useState(0)// Indice para el array de imagenes
  const [intervalId, setIntervalId] = useState(null);
  const [intervalActivo, setIntervalActivo] = useState(false);
  const myPhotoRef= useRef(null)
  const containerRef = useRef(null)
  const loadingRef = useRef(null)

  function iniciarIntervalo() {
    containerRef.current.s
    if (!intervalActivo) {
      loadingRef.current.style.display = "block"
      setTimeout(() => {
        loadingRef.current.style.display ="none"
      }, 3000);
      containerRef.current.classList.remove("container")
      containerRef.current.classList.add("containerAnimated")
      const id = setInterval(() => {
          setIndex(index => index  + 1)
       }, 5000);
      setIntervalId(id);
      setIntervalActivo(true);
    }
  }
  function detenerIntervalo() {
    if (intervalActivo) {
      loadingRef.current.style.display ="none"
      containerRef.current.classList.remove("containerAnimated")
      containerRef.current.classList.add("container")
      clearInterval(intervalId);
      setIntervalId(null);
      setIntervalActivo(false);
    }
  }
  
  useEffect(()=>{
    let interval = null;
    if(index >= 6){
      setIndex(0)
    }
    return ()=>{
      clearInterval(interval)
    }
  }, [intervalActivo, index])

  return (
    <>
        <Button></Button>
        <div className='container' ref={containerRef}>
          <div className={intervalActivo? "box animated" : "box" } onClick={intervalActivo?detenerIntervalo: iniciarIntervalo}>
              <img className="picture" src={photos[index]} alt="photo_1" ref={myPhotoRef} />
          </div>
            <h3 ref={loadingRef} className='loading' 
            >Loading</h3>
        </div>
    </>
  )
}
