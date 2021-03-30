import Header from "../Header";
import Hero from './Hero'
import Propuesta from "./Propuesta";

export default function NoteIt({ match }) {
  return(
    <>
      <Header match={match}/>
      <Hero />
      <div className='flex flex-col items-end p-6 pt-8'>
      <p className='font-open text-white text-right font-bold w-5/6'>
        Organiza, anota y guarda tus apuntes importantes, todo en una única cuenta, sin complicaciones y con una interfaz intuitiva
      </p>
      <span className='text-white font-source font-light text-white mt-4'>
        2020
      </span>
      </div>
      <Propuesta />
    </>
  )
}