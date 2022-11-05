import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from './Logos';

export default function Header({ reference }) {
  const router = useRouter();

  const handleClick = () => {
    reference.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className='w-full pt-10 flex justify-around sm:justify-between sm:px-8 md:px-10'>
      <div
        onClick={() => router.push("/", null, { shallow: true, scroll: false })}
        className='outline-none cursor-pointer'
      >
        <Logo />
      </div>
      {router?.pathname === "/" ? (
        <span
          onClick={handleClick}
          className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'
        >
          Projects
        </span>
      ) : (
        <>
          <span className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'>
            On develop
          </span>
          {/* {router?.query?.name === 'noteIt' && (
            <a
              href='https://noteit.irvinemmanuel.xyz/'
              rel='noreferrer'
              target='blank'
              className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'
            >
              Go to the site
            </a>
          )} */}
          {/* {router?.query?.name === 'textIt' && (
            <span className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'>
              On develop
            </span>
          )} */}
          {/* {router?.query?.name === 'shoppingIt' && (
            <span className='text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal'>
              On develop
            </span>
          )} */}
        </>
      )}
    </header>
  );
}
