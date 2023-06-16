import React from 'react';
import Image from "next/image";

function CategoryBasket() {
    return (
        <div className={"w-[300px] flex-shrink-0"}>
            <p className={"sm-head"}>Sepetim</p>
            <div className={"bg-white border-2 border-brand-yellow rounded-2xl w-full py-14 px-10"}>
                <Image src={'/assets/images/category/basket.svg'} alt={'basket'} width={86} height={107} className={"mx-auto"}/>
                <p className={"text-primary-brand-color font-semibold text-center mt-12"}>Sepetiniz şu an boş</p>
                <p className={"text-center text-sm mt-2 mb-5 text-gray-500"}>Sipariş vermek için sepetinize ürün ekleyin</p>
            </div>
        </div>
    );
}

export default CategoryBasket;