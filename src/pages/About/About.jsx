import { motion } from 'framer-motion';

const About = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-white p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
    <h2>¿Quienes somos?</h2>
    <motion.p className='py-12 text-white'>Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</motion.p>
    <img src="/about-image.jpg" alt="Sobre Nosotros" className="img-fluid rounded" />
  </motion.div>
);

export default About;
