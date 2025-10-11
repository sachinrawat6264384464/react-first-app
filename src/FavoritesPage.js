import React, { useState, useEffect } from "react";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  // Component load hote hi localStorage se data fetch karna
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  // Delete function
  const removeFavorite = (id) => {
    const updated = favorites.filter((place) => place.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div style={{ 
      padding: "2rem", 
      minHeight: "100vh",
      background: "linear-gradient(135deg, #10af9cff, #9e0d58ff)",
      color: "white",
      textAlign: "center",
    
    }}>
      <h1  style={{ 
     marginTop:"10%",
    
    }} >❤️ Your Favorite Destinations</h1>

      {favorites.length === 0 ? (
        <p style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
          You haven't added any favorite destinations yet.
        </p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "2rem"
        }}>
          {favorites.map((place) => (
            <div key={place.id} style={{
      background: "linear-gradient(270deg, #ff9ad7ff, #2de4f1ff, #f575ceff, #fbc2eb)",
              padding: "20px",
              borderRadius: "15px",
              backdropFilter: "blur(6px)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              position: "relative"
            }}>
              <img 
                src={place.img} 
                alt={place.name} 
                style={{ 
                  width: "100%", 
                  height: "150px", 
                  objectFit: "cover", 
                  borderRadius: "10px" 
                }} 
              />
              <h3 style={{ marginTop: "10px" }}>{place.name}</h3>
              <p>{place.desc}</p>
              {/* Delete button */}
              <button 
                onClick={() => removeFavorite(place.id)}
                style={{
                  position: "absolute",
                  top: "22vh",
                  right: "10px",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  background: "rgba(241, 37, 68)",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
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
