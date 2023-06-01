import Image from "next/image";

function CategoryItem({ category } : any) {
	return (
        <a href="#" className="flex group justify-center items-center rounded transition-colors hover:bg-purple-50 flex-col p-4">
            <Image height={48} width={48} alt={category.title} src={category.image} className="w-12 h-12 rounded-lg border border-gray-200 object-cover" priority={true}/>
            <span className="font-semibold transition-colors group-hover:text-purple-700 whitespace-nowrap block mt-2 text-sm">{category.title}</span>
        </a>
	)
}

export default CategoryItem