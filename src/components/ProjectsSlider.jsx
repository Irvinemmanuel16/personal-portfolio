import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import sliderData from '../utils/sliderData';
import dot from '../assets/dot.svg'
import activeDot from '../assets/dot-active.svg'
import forward from '../assets/forward.svg'
import backward from '../assets/backward.svg'

export default function ProjectsSlider() {
	const [current, setCurrent] = useState(0);
	const focusRef = useRef()
	const length = sliderData?.length;

	const nextSlide = () => {
		setCurrent(current === length -1 ? 0 : current + 1);
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	useEffect(() => {
		focusRef.current.scrollIntoView({ smooth: true, block: 'center' , inline: 'center' });
	}, [current])

	return (
		<div className='grid mt-10'>
			<button className='h-10 text-xl text-white flex self-center items-center justify-center col-start-1 row-start-1 outline-none focus:outline-none' onClick={prevSlide}>
				<img className='h-auto w-4' src={backward} alt="backward arrow"/>
			</button>
			<button className='h-10 text-xl text-white flex self-center items-center justify-center col-start-3 row-start-1 outline-none focus:outline-none' onClick={nextSlide}>
				<img className='h-auto w-4' src={forward} alt="forward arrow"/>
			</button>
			<div className='flex overflow-x-auto w-5/6 mx-auto'>
				{sliderData.map((slide, index) => {
					return(
						<>
							{index === current
								? <Link to={slide.to} ref={focusRef} className='flex items-center justify-center relative flex-shrink-0'><img className='h-auto w-5/6 md:w-full transition duration-500' src={slide.image} alt={slide.alt} key={index} /><p className='z-10 text-white absolute font-open font-bold text-2xl'>{slide.title}</p></Link> 
								: <Link to={slide.to} className='flex items-center justify-center relative flex-shrink-0'><img className='h-auto transition duration-500 transform scale-75' src={slide.image} alt={slide.alt} key={index} /></Link>
							}
						</>
					)
				})}
			</div>
			<div className='row-start-2 col-start-2 flex mt-4 justify-center'>
				{sliderData.map((image, index) => {
					return(
					<span onClick={() => setCurrent(index)} className='p-2 pt-4'>
						{current === index 
							? <img className='transition duration-300' key={index} src={activeDot} alt="activedot"/> 
							: <img className='transition duration-300' key={index} src={dot} alt="dot"/>
						}
					</span>
					)
				})}
			</div>
		</div>
	);
}