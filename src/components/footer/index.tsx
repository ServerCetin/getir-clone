import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import {FiGlobe} from 'react-icons/fi';
import Image from "next/image";

export default function Footer() {
    return (
        <div className={"w-full bg-white"}>
            <div className="py-4 sm:pt-10 sm:pb-6 container mx-auto md:max-w-[1519px] md:px-32">
                <div className="container mx-auto grid gap-y-5">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-4">
                        <nav>
                            <h3 className="text-lg text-purple-700 mb-4">
                                Getir&apos;i indirin!
                            </h3>
                            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-3">
                                <li>
                                    <a href="#">
                                        <Image alt={"apple-store"} width={160} height={48} src="/assets/images/main-page/app-store.svg"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image alt={"google-play"} width={160} height={48} src="/assets/images/main-page/google-play.svg"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image alt={"huawei"} width={160} height={48} src="/assets/images/main-page/huawei.svg"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <h3 className="text-lg text-purple-700 mb-4">
                                Getir&apos;i keşfedin
                            </h3>
                            <ul className="grid gap-y-3 text-sm">
                                <li>
                                    <a href="#" className="hover:underline">Hakkımızda</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Kariyer</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">İletişim</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">COVID-19 Duyuru</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Sosyal Sorumluluk Projeleri</a>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <h3 className="text-lg text-purple-700 mb-4">
                                Yardıma mı ihtiyacınız var?
                            </h3>
                            <ul className="grid gap-y-3 text-sm">
                                <li>
                                    <a href="#" className="hover:underline">Sıkça Sorulan Sorular</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Kişisel Verilerin Korunması</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Gizlilik Politikası</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Kullanım Koşulları</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Çerez Politikası</a>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <h3 className="text-lg text-purple-700 mb-4">
                                İş Ortağımız Olun
                            </h3>
                            <ul className="grid gap-y-3 text-sm">
                                <li>
                                    <a href="#" className="hover:underline">Bayimiz Olun</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Deponuzu Kiralayın</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">GetirYemek Restoranı Olun</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">GetirÇarşı İşletmesi Olun</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="h-[1px] bg-gray-100"></div>
                    <div
                        className="flex justify-between flex-col items-center gap-y-3 sm:gap-y-0 sm:flex-row text-sm pt-1 sm:pt-3">
                        <div className="flex gap-x-4 text-gray-700">
                            &copy; 2021 Getir
                            <div>
                                <a href="#" className="text-purple-800 hover:underline">Bilgi Toplumu Hizmetleri</a>
                            </div>
                        </div>
                        <nav className="flex gap-x-2 items-center">
                            <a href="#"
                               className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                                <FaFacebook size={20}/>
                            </a>
                            <a href="#"
                               className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                                <FaTwitter size={20}/>
                            </a>
                            <a href="#"
                               className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                                <FaInstagram size={20}/>
                            </a>
                            <a href="#"
                               className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700">
                                <FiGlobe size={18}/>
                                Türkçe (TR)
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
