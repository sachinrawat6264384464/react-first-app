import React, { useState } from "react";
import './card.css';

function Card() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const destinations = [
    { id: 1, name: "Paris", desc: "City of lights", img: "https://via.placeholder.com/200" },
    { id: 2, name: "Tokyo", desc: "Land of the rising sun", img: "https://via.placeholder.com/200" },
    { id: 3, name: "New York", desc: "The Big Apple", img: "https://via.placeholder.com/200" },
    { id: 3, name: "New York", desc: "The Big Apple", img: "https://via.placeholder.com/200" },
    { id: 3, name: "New York", desc: "The Big Apple", img: "https://via.placeholder.com/200" },
    { id: 3, name: "New York", desc: "The Big Apple", img: "https://via.placeholder.com/200" },
    { id: 3, name: "New York", desc: "The Big Apple", img: "https://via.placeholder.com/200" },
    { id: 3, name: "New York", desc: "The Big Apple", img: "https://via.placeholder.com/200" },
    { id: 3, name: "New York", desc: "The Big Apple", img: "https://via.placeholder.com/200" },
    { id: 3, name: "New York", desc: "The Big Apple", img: "https://via.placeholder.com/200" },
  ];

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (place) => {
    let updated;
    if (favorites.find((f) => f.id === place.id)) {
      updated = favorites.filter((f) => f.id !== place.id);
    } else {
      updated = [...favorites, place];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="app">
    <div className="bg">
      <h1>🌍 Travel Planner</h1>
     </div> <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cards">
        {filtered.map((place) => (
          <div key={place.id} className="card">
            <img src={place.img} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.desc}</p>
            <button onClick={() => toggleFavorite(place)}>
              {favorites.find((f) => f.id === place.id)
                ? "❤️ Remove Favorite"
                : "🤍 Add Favorite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
