import React, { useState,useEffect } from 'react'
import adidas from "../assets/adidas.png"
import aws from "../assets/aws.png"
import netflix from "../assets/netflix.png"
import { motion } from "framer-motion"
function Slider() {
    const imgSrcArray=[aws,aws,netflix,netflix]
const [posicion,setPosicion]=useState(0)
const [positionX,setPositionX]=useState(0)
const cambio =()=>{
    setPosicion((posicion==imgSrcArray.length-1)?0:posicion+1)
    setPositionX((positionX==500)?0:500)
}
    useEffect(() => {
        // Inicializar el intervalo
        const intervalo = setInterval(() => {
          // Lógica que se ejecutará repetidamente
          cambio();
        }, 3000); // Ejemplo: se ejecuta cada segundo (1000 ms)
    
        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalo);
      }, [cambio]);
  return (


<div id="gallery" className='flex items-center justify-center w-full' data-carousel="slide">

<motion.div animate={{ x: positionX }} transition={{
  ease: "linear",
  duration: 2,
}} className='w-full h-full mr-10 'style={{width:"300px",height:"400px"}}>
    <img  src={imgSrcArray[posicion]} />
</motion.div>
</div>

  )
}

export default Slider