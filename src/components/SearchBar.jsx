import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchInput(value)
    onSearch(value)
  }

  return (
    <div className="w-full md:w-1/2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg 
            className="w-4 h-4 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Pokémon by name..."
          value={searchInput}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default SearchBar 