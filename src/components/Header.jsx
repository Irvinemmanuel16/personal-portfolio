import { Link } from 'react-router-dom';
import { Logo } from './Logos'

export default function Header({ reference, match }) {

  const handleClick = () => {
    reference.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
  }

  return (
    <header className='w-full pt-10 flex justify-around sm:justify-between sm:px-8 md:px-10'>
      <Link to='/' className='outline-none'>
        <Logo />
      </Link>
      {
        match?.path === '/'
        ? <span onClick={handleClick} className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'>
            Projects
          </span>
        : <>
            {match?.path === '/noteIt' &&
              <a href='https://note-it-1624.netlify.app/' rel='noreferrer' target='blank' className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'>
                Go to the site
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