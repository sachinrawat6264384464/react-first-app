import React, { useState } from "react";
import './card.css';

function Card() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const destinations = [
    { id: 1, name: "Paris", desc: "City of Lights", img: "" },
    { id: 2, name: "Tokyo", desc: "Land of the Rising Sun", img: "https://source.unsplash.com/200x150/?tokyo" },
    { id: 3, name: "New York", desc: "The Big Apple", img: "https://source.unsplash.com/200x150/?newyork" },
    { id: 4, name: "Bali", desc: "Tropical paradise", img: "https://source.unsplash.com/200x150/?bali" },
    { id: 5, name: "London", desc: "The historic city", img: "https://source.unsplash.com/200x150/?london" },
    { id: 6, name: "Sydney", desc: "Harbor city", img: "https://source.unsplash.com/200x150/?sydney" },
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
  <>
  <div className="app">
  <div className="welcome-section">
    <h1>🌍 Welcome to <span>Dream Destinations</span></h1>
    <p>Discover breathtaking places, plan your next adventure, and save your favorites — all in one place!</p>
    <button className="explore-btn">Start Exploring</button>
  </div>

  
</div>

  <div className="app">
      <div className="bg">
        <h1>🌍 Travel Planner</h1>
      </div> 
      <input
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
    </div></>
  );
}

export default Card;
