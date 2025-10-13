import React, { useState } from "react";
import newyork from "./images/tajmahel.png"
import bali from "./images/fool.jpg"
import tokyo from "./images/gate way.png"
import syney from "./images/hawamehal.jpg"
import london from "./images/pahad one.jpg"
import paris from "./images/suadmandir.png"
import gggg from "./images/gggg.png"
import ghat from "./images/ghat.png"
import mahel from "./images/hawa mahel.jpg"
import lkl from "./images/lkl.png"
import './places.css';

function Places() {
const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const destinations = [
    { id: 1, name: "", desc: "City of Lights", img: paris },
  { id: 2, name: "", desc: "Land of the Rising Sun", img: tokyo },
  { id: 3, name: "", desc: "The Big Apple", img: newyork},
  { id: 4, name: "", desc: "Tropical paradise", img: bali },
  
  
  { id: 5, name: "", desc: "The historic city", img: london},
  { id: 6, name: "", desc: "Harbor city", img: syney },
  { id: 7, name: "", desc: "Harbor city", img: gggg },
  { id: 8, name: "", desc: "Harbor city", img: mahel },
  { id: 9, name: "", desc: "Harbor city", img: ghat },
  { id: 10, name: "", desc: "Harbor city", img: lkl },
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
