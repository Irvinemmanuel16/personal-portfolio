import { Link } from 'react-router-dom'

export default function Trabajos() {
  return (
    <section className='mt-16 px-8 flex flex-col'>
      <h5>Enfocado en la</h5>
      <h6>funcionalidad<br />y diseño</h6>
      <div className='grid md:grid-flow-col mt-8'>
        <p className='flex font-open text-gray text-xl justify-center items-center font-bold md:col-start-2 h-10'>Trabajos</p>
        <div className='grid mt-8 justify-items-center items-center'>
          <Link to='/' className='noteIt relative h-72 w-40 flex justify-end items-center justify-self-start'>
            <p className='font-open font-bold text-xl text-orange absolute -right-2'>NoteIt</p>
          </Link>
          <Link to='/' className='textIt relative h-72 w-40 flex justify-end items-center justify-self-end -top-10 z-10'>
            <p className='font-open font-bold text-xl text-orange absolute -left-4'>TextIt</p>
          </Link>
          <Link to='/' className='shoppingIt relative h-72 w-40 flex justify-end items-center justify-self-start -top-20'>
            <p className='font-open font-bold text-xl text-orange absolute -right-4'>ShoppingIt</p>
          </Link>
        </div>
      </div>
    </section>
  ) 
}