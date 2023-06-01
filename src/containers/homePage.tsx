import HeroSection from "@/components/home/heroSection";
import Categories from "@/components/home/categories";
import Article from "@/components/home/article";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {HomeCategory} from "@/types/homeCategory";

export default function HomePageContainer({categories}:{categories: HomeCategory[]}) {
    return (
        <>
            <Header />
            <HeroSection />
            <Categories categories={categories}/>
            <Article />
            <Footer />
        </>
    );
}