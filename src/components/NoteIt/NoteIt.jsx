import { useEffect } from "react";
import Header from "../Header";
import Hero from './Hero'
import Propuesta from "./Propuesta";

export default function NoteIt({ match }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])

  return(
    <>
      <Header match={match}/>
      <Hero />
      <div className='flex flex-col items-end p-6 pt-8 md:p-12 md:pt-10'>
      <p className='font-open text-white text-right font-bold w-5/6 md:w-4/6 lg:w-3/6'>
        Organiza, anota y guarda tus apuntes importantes, todo en una única cuenta, sin complicaciones y con una interfaz intuitiva
      </p>
      <span className='text-white font-source font-light text-white mt-4 lg:text-xl'>
        2020
      </span>
      </div>
      <Propuesta />
    </>
  )
}