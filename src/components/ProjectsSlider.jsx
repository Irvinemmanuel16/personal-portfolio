import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import sliderData from '../utils/sliderData';
import dot from '../assets/dot.svg'
import activeDot from '../assets/dot-active.svg'
import forward from '../assets/forward.svg'
import backward from '../assets/backward.svg'

export default function ProjectsSlider() {
	const [current, setCurrent] = useState(0);
	const [initialX, setInitialX] = useState() 
	const [finalX, setFinalX] = useState() 
	const [initialY, setInitialY] = useState() 
	const [finalY, setFinalY] = useState() 
	const focusRef = useRef()
	const length = sliderData?.length;

	const nextSlide = () => {
		setCurrent(current === length -1 ? 0 : current + 1);
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	const handleTouchStart = e => {
		setInitialX(e.nativeEvent.touches[0].clientX)
		setInitialY(e.nativeEvent.touches[0].clientY)
	}

	const handleTouchMove = e => {
		setFinalX(e.nativeEvent.touches[0].clientX)
		setFinalY(e.nativeEvent.touches[0].clientY)
	}

	const handleTouchEnd = () => {
		if (finalX > initialX && finalY - initialY < 10) {
			prevSlide()
		}
		else if (finalX < initialX && finalY - initialY < 10) {
			nextSlide()
		}
	}

	useEffect(() => {
		focusRef.current.scrollIntoView({ block: 'center' , inline: 'center' });
	}, [current])

	return (
		<div className='grid mt-10'>
			<button className='h-10 text-xl text-white flex self-center items-center justify-center col-start-1 row-start-1 outline-none focus:outline-none' onClick={prevSlide}>
				<img className='h-auto w-4' src={backward} alt="backward arrow"/>
			</button>
			<button className='h-10 text-xl text-white flex self-center items-center justify-center col-start-3 row-start-1 outline-none focus:outline-none' onClick={nextSlide}>
				<img className='h-auto w-4' src={forward} alt="forward arrow"/>
			</button>
			<div 
				className='flex overflow-x-hidden w-5/6 mx-auto' 
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				{sliderData.map((slide, index) => {
					return(
						<div className='flex-shrink-0' key={index}>
							{index === current
								? <Link to={slide.to} ref={focusRef} className='flex items-center justify-center relative transition duration-500'><img className='h-auto w-5/6 md:w-full' src={slide.image} alt={slide.alt} key={slide.id} /><p className='z-10 text-white absolute font-open font-bold text-2xl'>{slide.title}</p></Link> 
								: <Link to={slide.to} onClick={(e) => e.preventDefault()} className='flex items-center justify-center relative transition duration-500 transform scale-90'><img className='h-auto w-5/6 md:w-full' src={slide.image} alt={slide.alt} key={slide.id} /></Link>
							}
						</div>
					)
				})}
			</div>
			<div className='row-start-2 col-start-2 flex mt-4 justify-center'>
				{sliderData.map((image, index) => {
					return(
					<span onClick={() => setCurrent(index)} key={`dot-${index}`} className='p-2 pt-4 cursor-pointer'>
						{current === index 
							? <img className='transition duration-300' key={`active-${index}`} src={activeDot} alt="activedot"/> 
							: <img className='transition duration-300' key={`dotactive-${index}`} src={dot} alt="dot"/>
						}
					</span>
					)
				})}
			</div>
		</div>
	);
}