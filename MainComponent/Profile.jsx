import React, { useState } from 'react';

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('personal');
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      street: '123 Spice Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: true
    }
  ]);
  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      date: '2024-03-15',
      total: 2999,
      status: 'Delivered',
      items: [
        { name: 'Premium Turmeric Powder', quantity: 2, price: 599 },
        { name: 'Black Pepper Powder', quantity: 1, price: 799 }
      ]
    }
  ]);

  const [newAddress, setNewAddress] = useState({
    type: '',
    street: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setAddresses([...addresses, { ...newAddress, id: addresses.length + 1, isDefault: false }]);
    setNewAddress({ type: '', street: '', city: '', state: '', pincode: '' });
  };

  const setDefaultAddress = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#5D4037] mb-8">My Profile</h1>

        {/* Tabs */}
        <div className="flex border-b mb-8">
          <button
            className={`px-6 py-3 ${activeTab === 'personal' ? 'border-b-2 border-[#BF360C] text-[#BF360C]' : 'text-gray-600'}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Information
          </button>
          <button
            className={`px-6 py-3 ${activeTab === 'addresses' ? 'border-b-2 border-[#BF360C] text-[#BF360C]' : 'text-gray-600'}`}
            onClick={() => setActiveTab('addresses')}
          >
            Addresses
          </button>
          <button
            className={`px-6 py-3 ${activeTab === 'orders' ? 'border-b-2 border-[#BF360C] text-[#BF360C]' : 'text-gray-600'}`}
            onClick={() => setActiveTab('orders')}
          >
            Order History
          </button>
          <button
            className={`px-6 py-3 ${activeTab === 'tracking' ? 'border-b-2 border-[#BF360C] text-[#BF360C]' : 'text-gray-600'}`}
            onClick={() => setActiveTab('tracking')}
          >
            Track Orders
          </button>
        </div>

        {/* Personal Information */}
        {activeTab === 'personal' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    defaultValue={user?.name || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md"
                    defaultValue={user?.email || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-md"
                    defaultValue={user?.phone || ''}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#BF360C] text-white px-6 py-2 rounded-md hover:bg-[#a32e09]"
              >
                Update Information
              </button>
            </form>
          </div>
        )}

        {/* Addresses */}
        {activeTab === 'addresses' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
              <div className="space-y-4">
                {addresses.map(address => (
                  <div key={address.id} className="border p-4 rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{address.type}</h3>
                        <p className="text-gray-600">
                          {address.street}, {address.city}, {address.state} - {address.pincode}
                        </p>
                      </div>
                      <div className="space-x-2">
                        {!address.isDefault && (
                          <button
                            onClick={() => setDefaultAddress(address.id)}
                            className="text-[#BF360C] hover:underline"
                          >
                            Set as Default
                          </button>
                        )}
                        {address.isDefault && (
                          <span className="text-green-600">Default Address</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Add New Address</h2>
              <form onSubmit={handleAddressSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address Type</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      value={newAddress.type}
                      onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                      placeholder="Home/Office"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      value={newAddress.street}
                      onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      value={newAddress.pincode}
                      onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#BF360C] text-white px-6 py-2 rounded-md hover:bg-[#a32e09]"
                >
                  Add Address
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Order History */}
        {activeTab === 'orders' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <div className="space-y-4">
              {orders.map(order => (
                <div key={order.id} className="border p-4 rounded-md">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Order #{order.id}</h3>
                      <p className="text-gray-600">Placed on {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{order.total}</p>
                      <p className={`text-sm ${
                        order.status === 'Delivered' ? 'text-green-600' : 'text-[#BF360C]'
                      }`}>
                        {order.status}
                      </p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm mb-2">
                        <span>{item.name} x {item.quantity}</span>
                        <span>₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Order Tracking */}
        {activeTab === 'tracking' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Track Your Order</h2>
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Order Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your order number"
                />
              </div>
              <button
                className="w-full bg-[#BF360C] text-white px-6 py-2 rounded-md hover:bg-[#a32e09]"
              >
                Track Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 