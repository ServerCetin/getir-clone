'use client'
import MobileApp from "@/components/home/mobileApp";
import Cards from "@/components/home/cards";
import {useEffect, useState} from "react";

export default function Article(){
    const [width, setWidth] = useState<number>(650)

    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            setWidth(window.innerWidth)
        })
    }, [width])

    return (
        <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
            <MobileApp />
            <Cards />
        </div>
    )
}