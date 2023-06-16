'use client';
import CategoryToggle from "@/components/category/categoryToggle";
export default function Sidebar(){
    const category = [
        {
            "id": 0,
            "title": "Su & İçecek",
            "image": "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
            subCategory: ['Su', 'Gazli Icecek', 'Meyve Suyu', 'Cay', 'Kahve', 'Bitki Cayi', 'Enerji Icecegi', 'Kola', 'Gazoz']
        },
        {
            "id": 1,
            "title": "Meyve & Sebze",
            "image": "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
            subCategory: ['Meyve', 'Sebze', 'Ozel Meyve & Sebze', 'Salata', 'Yemeklik', 'Meyve Suyu', 'Dondurulmus Meyve & Sebze']
        },
    ]

    return (
        <aside className={"w-[240px] bg-brand-bg-white flex-shrink-0"}>
            <h3 className={'sm-head'}>Kategoriler</h3>
            <div className={"bg-white py-3"}>
                {category.map((item, index) => (
                    <CategoryToggle category={item} key={index}/>
                ))}
            </div>
        </aside>
    );
}