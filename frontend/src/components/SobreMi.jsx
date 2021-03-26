export default function SobreMi() {
  return (
    <section className='mt-14 px-8 flex flex-col'>
      <h5>Autodidacta y entusiasta del</h5>
      <h6>desarrollo web</h6>
      <div className='grid md:grid-flow-col mt-6'>
        <p className='font-open text-gray text-xl font-bold md:col-start-2 h-10'>Sobre mi</p>
        <p className='py-2 text-white font-open'>Soy un estudiante panameño, graduado de bachiller en ciencias de la informática, apasionado por la innovación y creatividad en la experiencia del usuario.</p>
      </div>
      <hr className='w-80 border-2 border-gray bg-gray rounded my-1 self-center' />
      <p className='text-right pt-8 font-open font-bold text-orange text-xl'>"El diseño es muy simple.<br />Por eso es complicado."</p>
      <span className='font-source text-white text-right py-5'>Paul Rand</span>
    </section>
  )
}