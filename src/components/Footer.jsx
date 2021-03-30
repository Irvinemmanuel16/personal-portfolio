import { InstagramLogo, LinkedinLogo, PersonalLogo, GithubLogo } from './Logos'

export default function Footer() {
  return (
    <footer className='px-8 mt-10 flex flex-col items-center'>
      <h5 className='text-orange text-right'>"Si les hubiese preguntado qué querían, ellos habrían pedido caballos más rápidos."</h5>
      <p className='font-source text-white self-end py-6'>Henry Ford</p>
      <hr className='w-80 border-2 border-orange bg-orange rounded my-1' />
      <PersonalLogo />
      <a className='font-open text-orange' href='mailto:developer@irvinemmanuel.xyz'>developer@irvinemmanuel.xyz</a>
      <div className='flex justify-evenly my-8 w-36'>
        <a target='blank' rel='noreferrer' href="https://www.linkedin.com/in/irvin-emmanuel-b232b81aa/">
          <LinkedinLogo />
        </a>
        <a target='blank' rel='noreferrer' href="https://www.instagram.com/irvinemmanuel16/">
          <InstagramLogo />
        </a>
        <a target='blank' rel='noreferrer' href="https://github.com/Irvinemmanuel16?tab=repositories">
          <GithubLogo />
        </a>
      </div>
    </footer>
  )
}