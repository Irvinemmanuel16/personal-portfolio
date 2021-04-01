export default function Info({ description, year }) {
  return (
    <div className='flex flex-col items-end p-6 pt-8 md:p-12 md:pt-10'>
      <p className='font-open text-white text-right font-bold w-5/6 md:w-4/6 lg:w-3/6'>
        {description}
      </p>
      <span className='text-white font-source font-light text-white mt-4 lg:text-xl'>
        {year}
      </span>
    </div>
  )
}