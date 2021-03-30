import ProjectsSlider from './ProjectsSlider';

export default function Proyectos({ reference }) {
  return (
    <section ref={reference} id='proyectos' className='mt-16 md:mt-20 px-8 md:px-16 xl:px-28 flex flex-col relative'>
      <h5 className='md:text-4xl'>Enfocado en la</h5>
      <h6 className='md:text-5xl'>funcionalidad<br />y diseño</h6>
      <div className='mt-8'>
        <p className='font-open text-gray text-center text-xl md:text-3xl font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-16 md:top-96 h-auto'>Proyectos</p>
      </div>
      <ProjectsSlider />  
    </section>
  ) 
}