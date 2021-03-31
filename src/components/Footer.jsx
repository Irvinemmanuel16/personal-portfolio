import { InstagramLogo, LinkedinLogo, PersonalLogo, GithubLogo } from './Logos'

export default function Footer() {
  return (
    <footer className='px-8 mt-12 md:px-16 lg:px-28 xl:px-28 flex flex-col items-center'>
      <hr className='w-80 md:w-5/6 border-2 border-orange bg-orange rounded my-1 md:my-12' />
      <PersonalLogo />
      <a className='font-open text-orange md:text-xl md:py-4' href='mailto:developer@irvinemmanuel.xyz'>developer@irvinemmanuel.xyz</a>
      <div className='flex justify-evenly lg:justify-between my-8 w-36 md:w-40 lg:w-44'>
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