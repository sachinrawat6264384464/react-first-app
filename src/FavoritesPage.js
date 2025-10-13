import React, { useState, useEffect } from "react";
import "./Favorites.css"; // ✅ External CSS import

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((place) => place.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="favorites-container">
      <h1>❤️ Your Favorite Destinations</h1>

      {favorites.length === 0 ? (
        <p className="no-favorites">
          You haven’t added any favorite destinations yet.
        </p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((place) => (
            <div key={place.id} className="favorite-card">
              <img src={place.img} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.desc}</p>

              <button
                className="delete-btn"
                onClick={() => removeFavorite(place.id)}
              >
                ❌ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
