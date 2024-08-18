"use client";

import { createContext, useContext, useState } from 'react';

// Create the Cart context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Function to add to cart
  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Function to update item quantity
  const updateQuantity = (productId, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: quantity > 0 ? quantity : 1 }
        : item
    ));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        cartCount: cartItems.length,
        searchQuery,
        setSearchQuery,
        sortOption,
        setSortOption,
        categoryFilter,
        setCategoryFilter
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);
