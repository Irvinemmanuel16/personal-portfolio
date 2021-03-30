export default function Sections({ reference }) {
  const { projectsRef, aboutMeRef, skillsRef } = reference;

  return (
    <nav className='hidden xl:flex font-source font-light text-white text-xl w-64 h-32 fixed top-28 left-10' style={{ zIndex: 1000 }}>
      <ul className='flex flex-col justify-around w-1/6 items-center p-2 bg-blue '>
        <li>1</li>
        <hr className='w-5/6'/>
        <li>2</li>
        <hr className='w-5/6'/>
        <li>3</li>
      </ul>
      <ul className='opacity-0 p-2 w-full flex flex-col justify-around items-start hover:opacity-100 bg-blue transition duration-300'>
        <li className='cursor-pointer' onClick={() => aboutMeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center'})}>Sobre mi</li>
        <hr className='w-4/6'/>
        <li className='cursor-pointer' onClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center'})}>Habilidades</li>
        <hr className='w-4/6'/>
        <li className='cursor-pointer' onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center'})}>Proyectos</li>
      </ul>
    </nav>
  )
}