import { PersonalLogo } from './Logos'

export default function Footer() {
  return (
    <footer className='px-8 mt-10 flex flex-col items-center'>
      <h5 className='text-orange text-right'>"Si les hubiese preguntado qué querían, ellos habrían pedido caballos más rápidos."</h5>
      <p className='font-source text-white self-end py-6'>Henry Ford</p>
      <hr className='w-80 border-2 border-orange bg-orange rounded my-1' />
      <PersonalLogo />
      <a className='font-open text-orange' href='mailto:developer@irvinemmanuel.xyz'>developer@irvinemmanuel.xyz</a>
      <div className='flex justify-evenly my-8 w-36'>
        <a href="/">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8299 23.9816C19.2182 23.9816 24.397 18.8948 24.397 12.6198C24.397 6.34494 19.2182 1.25812 12.8299 1.25812C6.44166 1.25812 1.26294 6.34494 1.26294 12.6198C1.26294 18.8948 6.44166 23.9816 12.8299 23.9816Z" stroke="#707070"/>
          </svg>
        </a>
        <a href="/">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8299 23.9816C19.2182 23.9816 24.397 18.8948 24.397 12.6198C24.397 6.34494 19.2182 1.25812 12.8299 1.25812C6.44166 1.25812 1.26294 6.34494 1.26294 12.6198C1.26294 18.8948 6.44166 23.9816 12.8299 23.9816Z" stroke="#707070"/>
          </svg>
        </a>
        <a href="/">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8299 23.9816C19.2182 23.9816 24.397 18.8948 24.397 12.6198C24.397 6.34494 19.2182 1.25812 12.8299 1.25812C6.44166 1.25812 1.26294 6.34494 1.26294 12.6198C1.26294 18.8948 6.44166 23.9816 12.8299 23.9816Z" stroke="#707070"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}