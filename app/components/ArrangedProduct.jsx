"use client";
import Image from "next/image";
import { useCart } from "../context/Ccontext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const ProductList = ({ products }) => {
  const [toggleStates, setToggleStates] = useState({});
  const { addToCart, searchQuery, sortOption, categoryFilter } = useCart();

  const handlecartCheck = async (product) => {
    let response = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    });
    let data = await response.json();
    console.log("The data is", data);
    addToCart(product);
    
    toast.success('Added Successfully', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      theme: "light",
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<span key={i}>★</span>); // Unicode for filled star
    }
    return stars;
  };

  const toggleWishlist = (productId) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const filteredProducts = products.filter(product =>product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter ? product.category === categoryFilter : true)
    )
    .sort((a, b) => {
      if (sortOption === 'price-asc') {
        return a.price - b.price;
      } else if (sortOption === 'price-desc') {
        return b.price - a.price;
      }
      return 0;
    });
    const filterlength = filteredProducts.length;

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="light"
      />

        {(filterlength === 0) && <div className="text-gray-500 font-bold text-4xl">No Results Found</div> }

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:text-black">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 flex justify-center flex-col items-center relative">
            {/* Heart icon */}
            <div
              onClick={() => toggleWishlist(product.id)}
              className={`${toggleStates[product.id] ? 'text-orange-400' : 'text-slate-400'} absolute top-2 right-1 text-4xl mr-0 cursor-pointer transition ease-in-out hover:-translate-y-2 hover:scale-110`}
            >
              ♥
            </div>
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="aspect-square object-contain transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 cursor-pointer duration-300"
            />
            <div className="flex flex-col w-full gap-2 transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-110 cursor-pointer hover:bg-slate-100 duration-300">
              <h2 className="text-lg font-bold mt-2 truncate">{product.title}</h2>
              <p className="text-orange-500 font-bold">${product.price}</p>
              <div className="flex text-yellow-400 text-2xl">
               {renderStars(product.rating.rate)}
              </div>
              <button
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-orange-600 bg-blue-600"
                onClick={() => handlecartCheck(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
