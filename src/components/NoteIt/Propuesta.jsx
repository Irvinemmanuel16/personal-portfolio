import { Link } from 'react-router-dom'
import noteItDesktopMockup from '../../assets/images/noteit-mock-up.svg'
import noteItDesktopMockup2 from '../../assets/images/noteit-mock-up2.svg'
import noteItMobileMockup from '../../assets/images/noteit-mobile-mock-up.svg'
import noteItMobileMockup2 from '../../assets/images/noteit-mobile-mock-up2.svg'
import noteItMockup from '../../assets/images/noteit-principal-mock-up.svg'
import Footer from '../Footer'

export default function Propuesta() {
  return(
    <>
      <section className='p-6 md:p-12 lg:px-16 relative'>
        <h5 className='md:text-4xl'>Fresco, Innovador y</h5>
        <h6 className='md:text-5xl'>versátil</h6>
        <p className='font-open text-gray text-xl mt-10 md:text-3xl lg:text-4xl lg:font-extrabold font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-11 lg:top-40 md:top-26 h-auto'>Propuesta</p>
        <div className='flex flex-col md:w-3/6 lg:w-full lg:px-12 lg:mt-8 lg:flex-row lg:justify-center lg:items-center'>
          <img className='h-auto w-56 lg:w-2/6 my-4 md:my-8' src={noteItMockup} alt="A litle demo of the propuse"/>
          <div className='lg:w-2/5 lg:px-8'>
            <p className='font-source text-white md:text-lg'>Pensada para el usuario de agenda muy organizada, asi como para aquellos más espontáneos, brindando simplicidad y elegancia unificada en una app que puedes usar desde tu navegador.</p>
            <p className='font-source text-white font-bold md:text-lg lg:py-2'>NoteIt está realizada con MERN stack, CSS y HTML.</p>
          </div>
        </div>
      </section>
      <div className='flex flex-col justify-between'>
        <div className='bg-orange h-auto mt-24 p-4 flex flex-col xl:w-3/4 xl:self-end items-center relative'>
          <p className='font-open hidden text-gray text-xl mt-10 md:block md:text-3xl lg:text-4xl lg:font-extrabold font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-11 md:top-40 h-auto md:text-primary'>Propuesta</p>
          <img className='h-auto' src={noteItDesktopMockup} alt="A snapshot of the desktop version"/>
          <img className='h-auto' src={noteItDesktopMockup2} alt="A snapshot of the desktop version"/>
        </div>
        <div className='bg-orange h-auto mt-10 p-4 pb-2 flex flex-col xl:w-3/4 xl:self-end md:flex-row lg:justify-center items-center'>
          <img className='h-auto' src={noteItMobileMockup} alt="A snapshot of the mobile version"/>
          <img className='h-auto' src={noteItMobileMockup2} alt="A snapshot of the mobile version"/>
        </div>
      </div>
      <div className='flex justify-end p-7'>
        <Link className='font-open font-bold text-white md:text-2xl' to='/'>Volver</Link>
      </div>
      <div className='flex flex-col items-start px-10 md:p-12 lg:px-16 md:mt-16 lg:w-4/6'>
        <h5 className='text-orange font-bold lg:text-4xl md:text-3xl'>"El diseño, es el embajador silencioso de tu marca."</h5>
        <p className='font-source md:text-3xl lg:text-3xl md:text-2xl text-white pt-4'>Paul Rand</p>
      </div>
      <Footer />
    </>
  )
}