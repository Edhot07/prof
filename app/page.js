"use server"

// import ImageDisplay from "./components/ImageDisplays";
// import Aside from "./components/Aside";
import ProductList from "./components/Productlist";
import SortOptions from "./components/SortOptions";

export default async function Home() {
  return (
    <div className="grid gap-4 grid-cols-5 min-w-[400px]">
      <div className="item col-span-5 h-12"></div>
      <div className="item sm:col-span-1 col-span-5">
       
        <SortOptions />
      </div>
      <div className="item col-span-4 min-h-[85vh] ">
        <ProductList />
      </div>
    </div>
  );
}
