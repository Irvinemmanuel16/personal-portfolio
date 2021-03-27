import { Logo } from './Logos'

export default function Header() {
  return (
    <header className='w-full pt-10 flex justify-around sm:justify-between sm:px-8 md:px-10'>
        <Logo />
        <a className='text-white font-source md:text-lg' href='mailto:developer@irvinemmanuel.xyz' target="_top">
          developer@irvinemmanuel.xyz
        </a>
    </header>
  )
}