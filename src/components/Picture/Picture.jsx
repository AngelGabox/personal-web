import React, { useEffect, useRef, useState } from 'react'
import photo_1 from "../../assets/original_photo.png"
// import photo_2 from "../../assets/original_photo"
import photo_3 from "../../assets/photo_Draw.jpg"
import photo_4 from "../../assets/pretty_photo.png"
import photo_5 from "../../assets/simpson_photo.png"
import photo_6 from "../../assets/photo001.png"
// import PlayPicture from "../Bottom/PlayPicture"
import "../Bottom/Button.css"
import "./Picture.css"

export default function Picture(){ 

  const photos = [photo_1, photo_5, photo_3, photo_4, photo_6]
  const [index, setIndex] = useState(0)// Indice para el array de imagenes
  const [intervalId, setIntervalId] = useState(null);
  const [intervalActivo, setIntervalActivo] = useState(false);
  const containerRef = useRef(null)
  const loadingRef = useRef(null)

  function iniciarIntervalo() {
    // containerRef.current.s
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
    if(index >= photos.length){
      setIndex(0)
    }
    return ()=>{
      clearInterval(interval)
    }
  }, [intervalActivo, index])

  return (
    <section className='section-picture'>
        <h2 className='name'>Hello World, I'm Angel</h2>
        <div className='container' ref={containerRef}>
          <div className={intervalActivo? "box animated" : "box" }  
          // onClick={intervalActivo?detenerIntervalo:iniciarIntervalo}
          >
              <img className="picture" src={photos[index]} alt="photo_1" />
          </div>
            <h3 ref={loadingRef} className='loading' 
            >Loading</h3>
        </div>
        <div className='play' >
          <label >
            <input type="checkbox" name="check" />
            <span ></span>
              {intervalActivo?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  height="4rem">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  height="3rem">
                    <path d="M3 22v-20l18 10-18 10z" />
                </svg>
              }
          </label>
          <div className='funcion' onClick={intervalActivo?detenerIntervalo:iniciarIntervalo}></div>
        </div>
    </section>
  )
}
