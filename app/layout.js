"use client"

import { CartProvider } from "./context/Ccontext";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <CartProvider>
        
        <div className="sm:bg-white md:text-sm sm:text-white">
          <Navbar/>
          {children}
          <Footer/>
          

        </div>
        </CartProvider>
      </body>
    </html>
  );
}
