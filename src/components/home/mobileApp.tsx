import Image from "next/image";

function MobileApp() {

	return (
		<div className="container mx-auto md:max-w-[1519px] md:px-32" >
			<div className="bg-purple-700 flex flex-col sm:flex-row items-center sm:pl-12 justify-between bg-mobile-app rounded-lg">
				<div className="text-white p-5 sm:p-0 text-center sm:text-left">
					<h3 className="text-3xl	tracking-tighter font-bold">Getir&apos;i indirin!</h3>
					<p className="font-semibold text-xs sm:text-base mt-3">
						İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.
					</p>
					<div className="grid sm:flex grid-cols-2 gap-2 mt-4 sm:mt-8">
						<a href="#">
							<Image alt={"apple-store"} width={160} height={48}  src="/assets/images/main-page/app-store.svg"/>
						</a>
						<a href="#">
							<Image alt={"google-play"} width={160} height={48}  src="/assets/images/main-page/google-play.svg"/>
						</a>
						<a href="#">
							<Image alt={"huawei"} width={160} height={48}  src="/assets/images/main-page/huawei.svg"/>
						</a>
					</div>
				</div>
				<div className="self-end mt-4">
					<Image alt={"huawei"} width={605} height={288}  src="/assets/images/main-page/phone-landing.png"/>
				</div>
			</div>
		</div>
	)
}

export default MobileApp