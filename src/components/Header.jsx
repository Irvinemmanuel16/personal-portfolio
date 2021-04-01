import { Link } from 'react-router-dom';
import { Logo } from './Logos'

export default function Header({ reference, match }) {

  const handleClick = () => {
    reference.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
  }

  return (
    <header className='w-full pt-10 flex justify-around sm:justify-between sm:px-8 md:px-10'>
      <Link to='/'>
        <Logo />
      </Link>
      {
        match?.path === '/'
        ? <span onClick={handleClick} className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'>
            Proyectos
          </span>
        : <>
            {match?.path === '/noteIt' &&
              <a href='https://fierce-depths-60167.herokuapp.com/' rel='noreferrer' target='blank' className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'>
                Ir al sitio
              </a>
            }
            {match?.path === '/textIt' &&
              <span className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'>
                On develop
              </span>
            }
            {match?.path === '/shoppingIt' &&
              <span className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'>
                On develop
              </span>
            }
          </>
      }
    </header>
  )
}