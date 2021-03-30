import { Logo } from './Logos'

export default function Header({ reference }) {

  const handleClick = () => {
    reference.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
  }

  return (
    <header className='w-full pt-10 flex justify-around sm:justify-between sm:px-8 md:px-10'>
        <Logo />
        <span onClick={handleClick} className='text-white font-source md:text-lg cursor-pointer font-normal'>
          Proyectos
        </span>
    </header>
  )
}