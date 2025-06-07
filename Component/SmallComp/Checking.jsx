import React from "react";

const Checking = ({ area, onAreaChange, month, onMonthChange, onSearch }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
      className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto"
    >
      {/* Area Input */}
      <div>
        <label htmlFor="areaInput" className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M9 16h6m-3-9V4m-4 3V4m8 3V4M4 20h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v11a1 1 0 001 1z" />
          </svg>
          Area Name
        </label>
        <input
          id="areaInput"
          type="text"
          value={area}
          onChange={(e) => onAreaChange(e.target.value)}
          className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          placeholder="Enter location (e.g., Delhi, Bangalore)"
          required
        />
      </div>

      {/* Month Input */}
      <div>
        <label htmlFor="monthInput" className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V4m8 3V4M3 10h18M5 20h14a1 1 0 001-1V8a1 1 0 00-1-1H5a1 1 0 00-1 1v11a1 1 0 001 1z" />
          </svg>
          Month
        </label>
        <input
          id="monthInput"
          type="month"
          value={month}
          onChange={(e) => onMonthChange(e.target.value)}
          className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          required
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
      >
        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

export default Checking;
