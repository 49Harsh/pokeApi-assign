import React from 'react'

const PokemonCard = ({ pokemon }) => {
  // Function to capitalize first letter
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  // Type badge color mapping
  const typeColors = {
    normal: 'bg-gray-300',
    fire: 'bg-red-500 text-white',
    water: 'bg-blue-500 text-white',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500 text-white',
    ice: 'bg-blue-200',
    fighting: 'bg-red-700 text-white',
    poison: 'bg-purple-500 text-white',
    ground: 'bg-yellow-600 text-white',
    flying: 'bg-indigo-300',
    psychic: 'bg-pink-500 text-white',
    bug: 'bg-green-400',
    rock: 'bg-yellow-800 text-white',
    ghost: 'bg-purple-700 text-white',
    dragon: 'bg-indigo-700 text-white',
    dark: 'bg-gray-800 text-white',
    steel: 'bg-gray-400',
    fairy: 'bg-pink-300'
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 flex flex-col items-center">
        <div className="bg-gray-100 rounded-full p-4 mb-4">
          <img 
            src={pokemon.image} 
            alt={pokemon.name} 
            className="w-32 h-32"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'
            }} 
          />
        </div>
        
        <div className="text-center mb-2">
          <span className="text-gray-500 text-xs">#{pokemon.id.toString().padStart(3, '0')}</span>
          <h2 className="text-lg font-bold">{capitalize(pokemon.name)}</h2>
        </div>
        
        <div className="flex gap-2 mt-2">
          {pokemon.types.map(type => (
            <span 
              key={type} 
              className={`px-2 py-1 rounded-full text-xs font-semibold ${typeColors[type] || 'bg-gray-200'}`}
            >
              {capitalize(type)}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonCard 