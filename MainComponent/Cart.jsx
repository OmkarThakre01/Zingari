import React from 'react';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQuantity = (index, delta) => {
    const newCart = [...cart];
    if (!newCart[index].quantity) newCart[index].quantity = 1;
    newCart[index].quantity = Math.max(1, newCart[index].quantity + delta);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-[#5D4037] mb-8 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center border-b py-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity || 1}</span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button className="mt-4 bg-[#BF360C] text-white px-6 py-2 rounded hover:bg-[#a32e09]">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 