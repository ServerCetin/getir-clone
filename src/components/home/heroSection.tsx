'use client';
import {useState} from 'react'
import Slider from 'react-slick';
import ReactFlagsSelect from 'react-flags-select';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
function HeroSection() {
    const [selected, setSelected] = useState('TR');

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        arrows: false,
    };

    const flags = {
        US: '+1',
        GB: '+5',
        FR: '+70',
        DE: '+30',
        IT: '+11',
        TR: '+90',
    }

    return (
        <div
            className="h-auto sm:h-[500px] bg-brand-color relative before:bg-gradient-to-r before:from-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            <Slider className="h-full hidden sm:block" {...settings}>
                <div>
                    <div className="h-[500px] bg-center bg-no-repeat bg-cover"
                         style={{backgroundImage: 'url(/assets/images/main-page/getir-mainpage-1.jpg)'}}>a</div>
                </div>
                <div>
                    <div className="h-[500px] bg-center bg-no-repeat bg-cover"
                         style={{backgroundImage: 'url(/assets/images/main-page/getir-mainpage-1.jpg)'}}>a</div>
                </div>
            </Slider>
            <div className="relative sm:absolute inset-0 px-0 sm:px-8 z-[40] flex items-center">
                <div
                    className="w-full md:max-w-[1519px] md:px-32 sm:container flex mx-auto justify-between items-center">
                    <div className="gap-y-10 flex-col hidden sm:flex">
                        <Image alt="1" height={180} width={180} src="/assets/images/getir-logo.svg"/>
                        <h3 className="text-4xl font-semibold tracking-tighter	 text-white">
                            Dakikalar içinde <br/> kapınızda
                        </h3>
                    </div>
                    <div className="w-full sm:w-[400px] bg-gray-50 sm:rounded-lg px-5 py-3 pb-5 sm:py-6">
                        <h3 className="text-center mb-4 font-semibold text-purple-600">Giriş yap veya kayıt ol</h3>
                        <div className="flex flex-col gap-y-3">
                            <div className="flex gap-x-3">
                                <ReactFlagsSelect
                                    countries={Object.keys(flags)}
                                    customLabels={flags}
                                    selected={selected}
                                    onSelect={code => setSelected(code)}
                                />
                                <label className="relative flex-1 group">
                                    <input required
                                           className="h-full rounded px-4 pt-2 hover:border-purple-700 focus:border-purple-700 transition-colors outline-none text-sm w-full border-2 border-gray-200 peer"/>
                                    <span
                                        className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-purple-600 peer-valid:h-7 peer-valid:text-xs peer-valid:text-purple-600">
									Telefon Numarası
								</span>
                                </label>
                            </div>
                            <button
                                className="h-12 rounded-lg transition-colors bg-yellow-300 text-purple-700 text-sm font-semibold hover:bg-purple-700 hover:text-yellow-300">
                                Telefon numarası ile devam et
                            </button>
                            <div className="h-[1px] bg-gray-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection