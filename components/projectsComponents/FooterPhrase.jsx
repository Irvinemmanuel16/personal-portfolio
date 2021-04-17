export default function FooterPhrase({ phrase, autor }) {
  return (
    <div className='flex flex-col items-start px-10 md:p-12 lg:px-16 md:mt-16 lg:w-4/6'>
      <h5 className='text-orange font-bold lg:text-4xl md:text-3xl'>"{phrase}"</h5>
      <p className='font-source md:text-3xl lg:text-3xl md:text-2xl text-white pt-4'>{autor}</p>
    </div>
  )
}