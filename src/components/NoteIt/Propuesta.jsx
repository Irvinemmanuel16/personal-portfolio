import { Link } from 'react-router-dom'
import noteItDesktopMockup from '../../assets/images/noteit-mock-up.svg'
import noteItDesktopMockup2 from '../../assets/images/noteit-mock-up2.svg'
import noteItMobileMockup from '../../assets/images/noteit-mobile-mock-up.svg'
import noteItMobileMockup2 from '../../assets/images/noteit-mobile-mock-up2.svg'
import Footer from '../Footer'

export default function Propuesta() {
  return(
    <>
      <section className='p-6'>
        <h5 className='md:text-4xl'>Fresco, Innovador y</h5>
        <h6 className='md:text-5xl'>versátil</h6>
        {/* <img src={noteItpropuse1} alt="A litle demo of the propuse"/> */}
        <p className='font-open text-gray text-xl mt-4 md:text-3xl font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-11 md:top-26 h-auto'>Propuesta</p>
        <p className='font-source text-white pb-4'>Pensada para el usuario de agenda muy organizada, asi como para aquellos más espontáneos, brindando simplicidad y elegancia unificada en una app que puedes usar desde tu navegador.</p>
        <span className='font-source text-white font-bold'>Note it está realizada con MERN stack, CSS y HTML.</span>
      </section>
      <div className='bg-orange h-auto mt-24 p-4'>
        <img className='h-auto' src={noteItDesktopMockup} alt="A snapshot of the desktop version"/>
        <img className='h-auto' src={noteItDesktopMockup2} alt="A snapshot of the desktop version"/>
      </div>
      <div className='bg-orange h-auto mt-10 p-4 pb-2'>
        <img className='h-auto' src={noteItMobileMockup} alt="A snapshot of the mobile version"/>
        <img className='h-auto' src={noteItMobileMockup2} alt="A snapshot of the mobile version"/>
      </div>
      <div className='flex justify-end p-7'>
        <Link className='font-open font-bold text-white' to='/'>Volver</Link>
      </div>
      <Footer />
    </>
  )
}