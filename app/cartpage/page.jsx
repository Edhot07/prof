"use client";
import { useCart } from '../context/Ccontext';
import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="container mx-auto  min-h-[85vh] text-black ">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            {cartItems.map((item) => (
              <div key={item.id} className="border p-4 mb-4 flex items-center bg-blue-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-orange-500 font-bold">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="btn btn-xs"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-xs"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-error ml-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1 bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold">Cart Summary</h3>
            <p className="mt-4">
              Subtotal: <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </p>
            <Link href="/checkout">
              <button className="btn btn-primary mt-4 w-full">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
