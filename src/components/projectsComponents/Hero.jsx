export default function Hero({ titleFirst, titleSecond, subtitle }) {
  return (
    <section className='bg-white h-36 md:h-40 mt-20 flex flex-col items-center justify-center'>
      <h4 className={`font-pay ${titleFirst.color} text-4xl md:text-6xl`}>{titleFirst.content}<span className={`font-pay ${titleSecond.color} text-4xl md:text-6xl`}>{titleSecond.content}</span></h4>
      <p className='font-source'>{subtitle}</p>
    </section>
  )
}