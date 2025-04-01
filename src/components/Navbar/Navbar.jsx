import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const navbarLinks = [
  { id: 1, title: 'Inicio', link: '/' },
  { id: 2, title: 'Nosotros', link: '/about' },
  { id: 3, title: 'Catálogo', link: '/catalog' },
  { id: 4, title: 'Contacto', link: '/contact' },
];

const navbarRedes = [
  { id: 1, title: 'Instagram', link: 'https://www.instagram.com/ekadantadeco/', icon: 'bi bi-instagram' },
  { id: 2, title: 'Facebook', link: 'https://web.facebook.com/EkadantaDeco/', icon: 'bi bi-facebook' },
  { id: 3, title: 'WhatsApp', link: 'https://wa.me/c/5493548542647', icon: 'bi bi-whatsapp' },
  { id: 4, title: 'Ubicación', link: 'https://www.google.com/maps/place/Ekadanta,+tienda+esot%C3%A9rica/', icon: 'bi bi-geo-alt' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-amber-400/50 backdrop-blur-lg z-50">
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
        <img src={Logo} alt='Logo' className='w-[100px]' />
        
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navegación Desktop */}
        <div className='hidden md:flex space-x-10'>
          {navbarLinks.map(link => (
            <Link key={link.id} to={link.link} className='text-white text-lg hover:text-amber-800 transition-transform hover:scale-110'>
              {link.title}
            </Link>
          ))}
        </div>

        {/* Redes sociales Desktop */}
        <div className='hidden md:flex space-x-4'>
          {navbarRedes.map(link => (
            <a key={link.id} href={link.link} target='_blank' rel='noopener noreferrer' className='hover:scale-125 transition-transform'>
              <i className={`${link.icon} text-2xl text-white hover:text-amber-800`} />
            </a>
          ))}
        </div>
      </div>

      {/* Menú Móvil */}
      <div className={`md:hidden absolute w-full bg-amber-400 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className='flex flex-col px-4 py-2'>
          {navbarLinks.map(link => (
            <li key={link.id} className='py-2 text-center'>
              <Link to={link.link} className='text-white hover:text-amber-800' onClick={closeMenu}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='flex justify-center space-x-4 px-4 py-2 border-t border-white'>
          {navbarRedes.map(link => (
            <li key={link.id}>
              <a href={link.link} target='_blank' rel='noopener noreferrer' className='text-white hover:text-amber-800' onClick={closeMenu}>
                <i className={`${link.icon} text-lg`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
