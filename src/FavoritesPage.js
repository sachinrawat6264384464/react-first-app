import React, { useState, useEffect } from "react";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  // ✅ Fetch favorites from localStorage when component mounts
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  // ✅ Remove favorite and update both state + localStorage
  const removeFavorite = (id) => {
    const updated = favorites.filter((place) => place.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div
      style={{
        padding: "7rem",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #10af9c, #22888bff)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginTop: "5%" }}>❤️ Your Favorite Destinations</h1>

      {/* ✅ Conditional rendering */}
      {favorites.length === 0 ? (
        <p style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
          You haven’t added any favorite destinations yet.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "2rem",
          }}
        >
          {favorites.map((place) => (
            <div
              key={place.id}
              style={{
                background:
                  "linear-gradient(270deg, #ed7316ff, #4d7578ff, #e57c31ff, #e18b44ff)",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                position: "relative",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={place.img}
                alt={place.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h3 style={{ marginTop: "10px", color: "#000" }}>{place.name}</h3>
              <p style={{ color: "#222" }}>{place.desc}</p>

              {/* Delete button */}
              <button
                onClick={() => removeFavorite(place.id)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  background: "rgba(241, 37, 68, 0.9)",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "rgba(255, 0, 0, 0.8)")}
                onMouseOut={(e) => (e.target.style.background = "rgba(241, 37, 68, 0.9)")}
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
