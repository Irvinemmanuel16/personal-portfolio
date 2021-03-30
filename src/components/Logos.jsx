import logo from '../assets/logos/logo.svg';
import webpack from '../assets/logos/webpack-logo.svg'
import reactLogo from '../assets/logos/react-logo.svg'
import nodeLogo from '../assets/logos/node-logo.svg'
import mongoLogo from '../assets/logos/mongo-logo.svg'
import sassLogo from '../assets/logos/sass-logo.svg'
import personalLogo from '../assets/logos/logo-personal.svg'
import linkedinLogo from '../assets/logos/linkedin-logo.svg'
import githubLogo from '../assets/logos/github-logo.svg'
import instagramLogo from '../assets/logos/instagram-logo.svg'


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

export const LinkedinLogo = () => (
  <img className='h-auto w-8' src={linkedinLogo} alt="linkedin logo" />
)

export const InstagramLogo = () => (
  <img className='h-auto w-8' src={instagramLogo} alt="instagram logo" />
)

export const GithubLogo = () => (
  <img className='h-auto w-8' src={githubLogo} alt="github logo" />
)

