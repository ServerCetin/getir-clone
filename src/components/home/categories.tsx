import CategoryItem from './categoryItem';
import {HomeCategory} from "@/types/homeCategory";

function Categories({categories}:{categories: HomeCategory[]}) {

	return (
		<div className="bg-white py-6">
			<div className="container mx-auto md:max-w-[1519px] md:px-32">
				<h3 className="font-semibold text-sm mb-2">Kategoriler</h3>
				<div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-11 2xl:grid-cols-12">
					{categories && categories.map((category:any) => <CategoryItem key={category.id} category={category} />)}
				</div>
			</div>
		</div>
	)
}

export default Categories