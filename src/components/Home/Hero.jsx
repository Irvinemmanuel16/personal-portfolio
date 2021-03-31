export default function Hero() {
  return (
    <section className='hero w-full h-40 md:h-60 lg:h-72 flex flex-col my-10 md:mb-20 items-center justify-center'>
        <h2 className='font-open text-white font-bold text-4xl md:text-5xl'>Irvin Meneses</h2>
        <hr className='w-52 md:w-60 border-2 border-gray rounded my-1 bg-gray' />
        <h4 className='text-center text-orange font-source text-xl md:text-3xl'>
          Front End Developer
          <p className='text-white text-base md:text-lg'>Con conocimientos Backend</p>
        </h4>
    </section>
  )
}