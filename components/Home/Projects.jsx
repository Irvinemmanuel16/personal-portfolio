import ProjectsSlider from './ProjectsSlider';

export default function Projects({ reference }) {
  return (
    <section ref={reference} className='mt-16 md:mt-24 px-8 md:px-16 lg:px-28 flex flex-col relative'>
      <h5 className='md:text-4xl'>Focused on</h5>
      <h6 className='md:text-5xl'>funcionality<br />and design</h6>
      <div className='mt-8'>
        <p className='font-open text-gray text-center text-xl md:text-3xl lg:text-4xl lg:font-extrabold font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-10 md:top-96 h-auto'>Projects</p>
      </div>
      <ProjectsSlider />  
    </section>
  ) 
}