import React, { useRef, useState } from 'react'
import image_1 from "../../assets/image_4.jpeg"
import image_2 from "../../assets/image_2.jpeg"
import image_3 from "../../assets/image_3.jpeg"
import image_4 from "../../assets/image_1.webp"
import "./Carousel.css"

function Carousel() {

    const carruselItemsRef = useRef([])
    const [currentIndex, setCurrentIndex] = useState(0)  

    function mostrarSiguienteItem() {
        if(carruselItemsRef.current[currentIndex]){
            carruselItemsRef.current[currentIndex].classList.remove('active');
            let i = (currentIndex + 1) % 4
            setCurrentIndex(i) 
            carruselItemsRef.current[i].classList.add('active');
        } 
        console.log(carruselItemsRef.current)
        console.log(currentIndex);
    }

    // setInterval(mostrarSiguienteItem, 3000); 
  return (
    <div className='carrusel' onClick={mostrarSiguienteItem}>
        <img ref={(elemento) => carruselItemsRef.current.push(elemento)} className="carrusel__item active" src={image_1} alt="Imagen 1"/>
        <img ref={(elemento) => carruselItemsRef.current.push(elemento)} className="carrusel__item" src={image_2} alt="Imagen 2"/>
        <img ref={(elemento) => carruselItemsRef.current.push(elemento)} className="carrusel__item" src={image_3} alt="Imagen 3"/>
        <img ref={(elemento) => carruselItemsRef.current.push(elemento)} className="carrusel__item" src={image_4} alt="Imagen 3"/>
    </div>
  )
}

export default Carousel