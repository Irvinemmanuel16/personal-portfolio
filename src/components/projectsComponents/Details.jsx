export default function Details({ title, subtitle, mockup, description, construction }) {
  return (
    <section className='p-6 md:p-12 lg:px-16 relative'>
      <h5 className='md:text-4xl'>{title}</h5>
      <h6 className='md:text-5xl'>{subtitle}</h6>
      <p className='font-open text-gray text-xl mt-10 md:text-3xl lg:text-4xl lg:font-extrabold font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-11 lg:top-40 md:top-26 h-auto'>Approach</p>
      <div className='flex flex-col md:w-3/6 lg:w-full lg:px-12 lg:mt-8 lg:flex-row lg:justify-center lg:items-center'>
        <img className='h-auto w-56 lg:w-2/6 my-4 md:my-8' src={mockup} alt="A litle demo of the propuse"/>
        <div className='lg:w-2/5 lg:px-8'>
          <p className='font-source text-white md:text-lg'>{description}</p>
          <p className='font-source text-white font-bold md:text-lg lg:py-2'>{construction}</p>
        </div>
      </div>
    </section>
  )
}