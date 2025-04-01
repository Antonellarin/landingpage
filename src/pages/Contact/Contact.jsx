import React from 'react';
import { motion } from 'framer-motion';
import { slipeUp } from '../../utility/animation';

const Contact = () => (
  <section className='mt-36 text-white p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
    <motion.h2 
      className='text-center text-3xl font-bold mb-6'
      variants={slipeUp(0.2)}
      initial="initial"
      animate="animate"
    >
      Contacto
    </motion.h2>
    
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {/* Tarjeta Teléfono */}
      <motion.div 
        className='bg-amber-400 p-6 rounded-xl text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-amber-500'
        variants={slipeUp(0.3)}
        initial="initial"
        animate="animate"
      >
        <i className="bi bi-telephone-inbound text-4xl"></i>
        <p className='mt-4 text-lg'>Teléfono:</p>
        <p className='text-xl font-semibold'>(3548)542647</p>
      </motion.div>
      
      {/* Tarjeta Email */}
      <motion.div 
        className='bg-amber-400 p-6 rounded-xl text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-amber-500'
        variants={slipeUp(0.4)}
        initial="initial"
        animate="animate"
      >
        <i className="bi bi-envelope text-4xl"></i>
        <p className='mt-4 text-lg'>Email:</p>
        <p className='text-xl font-semibold'>andres.arin@gmail.com</p>
      </motion.div>
      
      {/* Tarjeta Dirección */}
      <motion.div 
        className='bg-amber-400 p-6 rounded-xl text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-amber-500'
        variants={slipeUp(0.5)}
        initial="initial"
        animate="animate"
      >
        <i className="bi bi-geo-alt text-4xl"></i>
        <p className='mt-4 text-lg'>Dirección:</p>
        <p className='text-xl font-semibold'>Av.Eden 250, La Falda-Cordoba</p>
      </motion.div>
    </div>
  </section>
);

export default Contact;
