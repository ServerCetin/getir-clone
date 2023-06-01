import HomePageContainer from "@/containers/homePage";
import {fetchAllCategories} from "@/service/categories";

export default async function App() {
  const categories = await fetchAllCategories();

  return (
      <HomePageContainer categories={categories}/>
  );
}
