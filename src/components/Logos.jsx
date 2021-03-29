import logo from '../assets/logo.svg';
import webpack from '../assets/webpack-logo.svg'
import reactLogo from '../assets/react-logo.svg'
import nodeLogo from '../assets/node-logo.svg'
import mongoLogo from '../assets/mongo-logo.svg'
import sassLogo from '../assets/sass-logo.svg'
import personalLogo from '../assets/logo-personal.svg'

export const Logo = () => (
  <img className='h-auto md:w-10' src={logo} alt="logo" />
)

export const ReactLogo = () => (
  <figure className='flex justify-center items-center flex-col'>
    <img className='h-auto md:w-20' src={reactLogo} alt="react logo"/>
    <p className='font-open text-white font-bold'>React</p>
  </figure>
)

export const NodeLogo = () => (
  <figure className='flex justify-center items-center flex-col'>
    <img className='h-auto md:w-20' src={nodeLogo} alt="node logo"/>
    <p className='font-open text-white font-bold'>Node.js</p>
  </figure>
)

export const MongoLogo = () => (
  <figure className='flex justify-center items-center flex-col'>
    <img className='h-auto md:w-20' src={mongoLogo} alt="mongo logo"/>
    <p className='font-open text-white font-bold'>MongoDB</p>
  </figure>
)

export const WebpackLogo = () => (
  <figure className='flex justify-center items-center flex-col col-start-1 col-end-3 row-start-2'>
    <img className='h-auto md:w-20' src={webpack} alt="webpack"/>
  <p className='font-open text-white font-bold'>Webpack</p>
  </figure>
)

export const SassLogo = () => (
  <figure className='flex justify-center items-center flex-col col-start-2 col-end-4 row-start-2'>
    <img className='h-auto md:w-20' src={sassLogo} alt="sass logo"/>
    <p className='font-open text-white font-bold'>Sass</p>
  </figure>
)

export const PersonalLogo = () => (
  <img className='self-center my-8' src={personalLogo} alt="personal logo" />
)