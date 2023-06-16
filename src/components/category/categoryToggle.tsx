'use client'
import Image from "next/image";
import {IoIosArrowDown} from "react-icons/io";
import Link from "next/link";
import {useState} from "react";

type CategoryToggleProps = {
    id: number;
    title: string;
    image: string;
    subCategory: string[];
}

function CategoryToggle({category}: { category: CategoryToggleProps }) {
    const [isToggle, setIsToggle] = useState(false);
    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div onClick={handleToggle}>
            <div className={"flex justify-self-center items-center gap-3 hover:bg-[#F3F0FE] py-1 px-3"}>
                <Image src={category.image} alt={category.title} width={30.4} height={30.4} className={"w-[30.4px] h-[30.4px] rounded-[2px] border-[1px] border-gray-300"} />
                <div className={"flex w-full justify-between"}>
                    <p className={""}>{category.title}</p>
                    {
                        // TODO tier 3 add toggle animation
                        isToggle ? <IoIosArrowDown className={"text-primary-brand-color text-2xl self-center"} /> :
                            <IoIosArrowDown className={"text-primary-brand-color text-2xl self-center transform rotate-180"} />
                    }
                </div>
            </div>
            <div className={""}>
                <div className={isToggle ? 'block' : 'hidden'}>
                    {category.subCategory.map((item, index) => (
                        <Link href={`/kategori/${item}`} key={index} legacyBehavior>
                            <a className={"block py-1 px-3 hover:bg-white  pl-[calc(30.4px+1.5rem)]"}>{item}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryToggle;