import { ReactLogo, NodeLogo, MongoLogo, WebpackLogo, SassLogo } from './Logos'

export default function Habilidades() {
  return (
    <section className='mt-6 px-8 flex flex-col'>
      <h5>Autocrítico, sin dejar de</h5>
      <h6>aprender</h6>
      <div className='grid md:grid-flow-col mt-8'>
        <p className='flex font-open text-gray text-xl justify-center items-center font-bold md:col-start-2 h-10'>Habilidades</p>
        <div className='grid grid-cols-3 mt-8 justify-items-center items-center gap-6'>
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