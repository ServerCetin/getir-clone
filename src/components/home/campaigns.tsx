'use client';
import {useState, useEffect} from 'react'
import Slider from "react-slick";
import Banners from '../../data/banners.json'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextButton ({ onClick, className } : any) {
	return (
		<button className={`${className} text-purple-700`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className } : any) {
	return (
		<button className={`${className} text-purple-700`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}

function Campaigns() {
	const [banners, setBanners] = useState<any>([])
	const [width, setWidth] = useState<number>(650)

	useEffect(()=> {
		setBanners(Banners)
		window.addEventListener('resize', ()=> {
			setWidth(window.innerWidth)
		})
	}, [width])

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
	};
	return width > 640 ? (
		<div className="container mx-auto w-full md:max-w-[1519px] md:px-32">
			<div className="sm:container overflow-hidden md:overflow-visible mx-auto px-0 relative" style={{width: width < 640 ? width : ''}}>
				<h3 className="font-semibold  hidden sm:block text-sm mb-3">Kampanyalar</h3>
				<Slider className="-mx-2  w-full h-full" {...settings}>
					{banners && banners.map((banner:any) => (
						<div key={banner.id} className="px-2">
							<img alt="" src={banner.image} className="w-full sm:rounded-lg" />
						</div>
					))}
				</Slider>
			</div>
		</div>
	) : <></>;
}

export default Campaigns