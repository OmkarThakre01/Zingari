import React, { useState } from 'react';
import Checking from './Checking'; // adjust the path

// Your mock data...
const mockRoomsData = { /* ...same as before... */ };

const RoomFinder = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [month, setMonth] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);

  const handleSearch = () => {
    if (selectedArea && month) {
      setAvailableRooms(mockRoomsData[selectedArea] || []);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <section className="bg-gray-100 w-full py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-[#7F55B1] mb-6 text-center">Hotel Room Booking</h2>

        {/* 🔍 Checking Form */}
        <Checking
          area={selectedArea}
          onAreaChange={setSelectedArea}
          month={month}
          onMonthChange={setMonth}
          onSearch={handleSearch}
        />

        {/* 🛏️ Available Rooms */}
        <div className="mt-8">
          {availableRooms.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {availableRooms.map((room) => (
                <div
                  key={room.id}
                  className="border p-4 rounded-lg shadow hover:shadow-lg transition bg-white"
                >
                  <h3 className="text-xl font-semibold text-[#7F55B1]">{room.name}</h3>
                  <p className="text-gray-600 mb-2">{room.price}</p>
                  <button className="mt-2 px-4 py-2 bg-[#ECFAE5] text-[#7F55B1] rounded-full border border-[#7F55B1] hover:bg-[#e1f5da] transition">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          ) : selectedArea ? (
            <p className="text-gray-500 mt-6 text-center">No rooms available for your selection.</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default RoomFinder;
