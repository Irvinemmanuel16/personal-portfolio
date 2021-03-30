import { ReactLogo, NodeLogo, MongoLogo, WebpackLogo, SassLogo } from '../Logos'

export default function Habilidades({ reference }) {
  return (
    <section ref={reference} className='mt-6 md:px-16 xl:px-28 px-8 flex flex-col relative'>
      <h5 className='md:text-4xl'>Autocrítico, sin dejar de</h5>
      <h6 className='md:text-5xl'>aprender</h6>
      <div className='mt-8 md:h-auto'>
        <p className='font-open flex text-gray text-xl md:text-3xl justify-center font-bold transform md:rotate-90 md:tracking-widest md:self-center md:absolute md:-right-18 md:bottom-24 h-auto'>Habilidades</p>
        <div className='grid grid-cols-3 mt-8 md:mt-12 xl:h-96 justify-items-center items-center gap-6'>
          <ReactLogo />
          <NodeLogo />
          <MongoLogo />
          <WebpackLogo />
          <SassLogo />
        </div>
      </div>
    </section>
  )
}