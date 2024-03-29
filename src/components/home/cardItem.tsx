import Image from "next/image";

function CardItem({card: {title, image, description}} : any) {
	return (
		<div className="bg-white flex flex-col gap-y-2 text-center items-center rounded-lg px-6 py-10">
			<Image alt="" width={144} height={144} src={image} className="w-36 h-36 mb-4"/>
			<h3 className="text-lg font-semibold text-purple-700">{title}</h3>
			<p className="text-sm text-gray-600 px-5">
				{description}
			</p>
		</div>
	)
}

export default CardItem