import React, { useState } from "react";
import newyork from "./images/kerala.png"
import bali from "./images/manaly.jpg"
import tokyo from "./images/kolkata.jpg"
import syney from "./images/Goa.png"
import london from "./images/himalaya.jpg"
import paris from "./images/darjeeling.jpg"
import gggg from "./images/chennai.jpg"
import ghat from "./images/rajasthan.jpg"
import mahel from "./images/varanasi.jpg"

import './places.css';

function Places() {
const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const destinations = [
    { id: 1, name: "Kerala", desc: "City of Lights", img: paris },
  { id: 2, name: "Manaly", desc: "Land of the Rising Sun", img: tokyo },
  { id: 3, name: "kolkata", desc: "The Big Apple", img: newyork},
  { id: 4, name: "Goa", desc: "Tropical paradise", img: bali },
  
  
  { id: 5, name: "Himachal", desc: "The historic city", img: london},
  { id: 6, name: "darjeeling", desc: "Harbor city", img: syney },
  { id: 7, name: "chennai", desc: "Harbor city", img: gggg },
  { id: 8, name: "rajasthan", desc: "Harbor city", img: mahel },
  { id: 9, name: "vanarasi", desc: "Harbor city", img: ghat },
  
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
      <h1> Travel Planner</h1>
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
  </div>
  );
}

export default Places
