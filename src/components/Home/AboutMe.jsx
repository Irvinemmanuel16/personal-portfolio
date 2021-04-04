export default function AboutMe({ reference }) {
  return (
    <section ref={reference} className='mt-14 px-8 md:px-16 lg:px-28 flex flex-col relative'>
      <h5 className='md:text-4xl'>Self-taught</h5>
      <h6 className='md:text-5xl'>web developer</h6>
      <div className='mt-6 md:h-auto'>
        <p className='font-open text-gray text-xl md:text-3xl lg:text-4xl font-bold lg:font-extrabold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-14 md:top-26 h-auto'>About me</p>
        <p className='py-2 text-white font-open md:py-6 md:w-5/6 lg:text-xl'>I'm a young professional with proven experience. Aiming to leverage my skills to innovate and create applications using edge technologies.</p>
        <p className='mt-2 text-white font-open lg:text-xl'>Specialized in the <span className='font-bold'>MERN</span> stack</p>
      </div>
      <hr className='w-80 md:w-full lg:w-4/6 border-2 border-gray bg-gray rounded my-4 self-center lg:self-start' />
      <p className='text-right pt-8 md:pt-16 w-5/6 md:w-4/6 self-end lg:w-3/6 font-open font-bold text-orange text-xl md:text-4xl'>"Design is so simple, that's why it's so complicated."</p>
      <span className='font-source text-white lg:text-4xl text-right py-5 md:mb-12 md:text-3xl'>Paul Rand</span>
    </section>
  )
}