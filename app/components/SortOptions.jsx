"use client";
import React from 'react';
import { useCart } from '../context/Ccontext';

const SortOptions = () => {
  const { setSortOption, setCategoryFilter } = useCart();

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 p-4 font-extrabold sm:text-black">
      <div>
        <label htmlFor="sort" className="block mb-2 ">Sort by:</label>
        <select id="sort" className="select text-white font-semibold select-bordered w-full bg-blue-600" onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div>
        <label htmlFor="category" className="block mb-2">Filter by Category:</label>
        <select id="category" className="select text-white font-semibold select-bordered w-full bg-blue-600" onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jeweleries</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="kids">Kids</option>
          <option value="furnitures">Furniture</option>
        </select>
      </div>
    </div>
  );
};

export default SortOptions;
