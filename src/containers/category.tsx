import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/category/sidebar";
import CategorySection from "@/components/category/categorySection";
import CategoryBasket from "@/components/category/categoryBasket";

export default function CategoryContainer() {
    return (
        <>
            <Header/>
            <main className={"w-full flex justify-center px-3"}>
                <div className={"flex max-w-[1232px] w-full bg-red-300 py-6 gap-x-3"}>
                    <Sidebar/>
                    <CategorySection/>
                    <CategoryBasket/>
                </div>
            </main>
            <Footer/>
        </>
    )
}