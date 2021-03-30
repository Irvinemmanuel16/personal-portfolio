export default function SobreMi({ reference }) {
  return (
    <section ref={reference} className='mt-14 px-8 md:px-16 flex flex-col relative'>
      <h5 className='md:text-4xl'>Autodidacta y entusiasta del</h5>
      <h6 className='md:text-5xl'>desarrollo web</h6>
      <div className='mt-6 md:h-auto'>
        <p className='font-open text-gray text-xl md:text-3xl font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-11 md:top-26 h-auto'>Sobre mi</p>
        <p className='py-2 text-white font-open md:text-lg md:w-auto'>Soy un estudiante panameño, graduado de bachiller en <br /> ciencias de la informática, apasionado por la innovación y creatividad en la experiencia del usuario.</p>
      </div>
      <hr className='w-80 md:w-full border-2 border-gray bg-gray rounded my-4 self-center' />
      <p className='text-right pt-8 md:pt-14 font-open font-bold text-orange text-xl md:text-4xl'>"El diseño es muy simple.<br />Por eso es complicado."</p>
      <span className='font-source text-white text-right py-5 md:text-2xl'>Paul Rand</span>
    </section>
  )
}