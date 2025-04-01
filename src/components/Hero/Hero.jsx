import React from 'react'
import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { slipeUp } from '../../utility/animation';

const Hero = () => {
  return (
    <section className='mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-2'>

        {/* textos y descripciones */}
        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <motion.img 
            src={Logo} 
            alt="Logo"
            variants={slipeUp(0.2)}
            initial="initial"
            animate="animate"
          />
         
          <motion.p className='py-12 text-white'
            variants={slipeUp(0.3)}
            initial="initial"
            animate="animate">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum
          </motion.p>
          
          <motion.div className='flex justify-center gap-4'
  variants={slipeUp(1)}
  initial="initial"
  animate="animate"
>
  <a 
    href="https://wa.me/5493548542647" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-amber-400 py-2 px-12 rounded-3xl text-white hover:bg-amber-600 transition-all duration-300 flex items-center gap-2"
  >
    Contactanos ahora 
    <i className="bi bi-telephone-inbound"></i>
  </a>
</motion.div>
</div>

        {/* Imagenes */}
        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <img src={Personaje} alt="Ganesha" />
        </div>
      </div>
    </section>
  )
}

export default Hero
