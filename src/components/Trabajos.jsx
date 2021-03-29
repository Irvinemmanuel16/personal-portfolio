import { Link } from 'react-router-dom'

export default function Trabajos() {
  return (
    <section className='mt-16 md:mt-20 px-8 md:px-16 flex flex-col'>
      <h5 className='md:text-4xl'>Enfocado en la</h5>
      <h6 className='md:text-5xl'>funcionalidad<br />y diseño</h6>
      <div className='mt-8'>
        <p className='font-open text-gray text-xl md:text-3xl font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-12 md:top-26 h-auto'>Trabajos</p>
        <div className='grid mt-8 justify-items-center items-center'>
          <Link to='/' className='noteIt relative h-72 w-40 flex justify-end items-center justify-self-start'>
            <p className='font-open font-bold text-xl text-white absolute -right-2'>NoteIt</p>
          </Link>
          <Link to='/' className='textIt relative h-72 w-40 flex justify-end items-center justify-self-end -top-10 z-10'>
            <p className='font-open font-bold text-xl text-white absolute -left-6'>TextIt</p>
          </Link>
          <Link to='/' className='shoppingIt relative h-72 w-40 flex justify-end items-center justify-self-start -top-20'>
            <p className='font-open font-bold text-xl text-white absolute -right-4'>ShoppingIt</p>
          </Link>
        </div>
      </div>
    </section>
  ) 
}