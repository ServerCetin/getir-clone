import HeroSection from "@/components/home/heroSection";
import Categories from "@/components/home/categories";
import Article from "@/components/home/article";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function HomePageContainer(){
    return (
        <>
            <Header />
            <HeroSection />
            <Categories />
            <Article />
            <Footer />
        </>
    );
}