import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./component/nav"; // ✅ Renamed Text4 → Nav for clarity
import Card from "./card.js";
import FavoritesPage from "./FavoritesPage.js";
import Footer from "./component/footer.js";
import Places from "./places.js";
import Text from "./component/text";
import About from "./component/about";

import TajMahalImg from "./images/tajmahel.png";
import IndiaGateImg from "./images/indiagate.jpg";

function App() {
  return (
    <Router>
      {/* ✅ Navbar always visible */}
      <Nav />

      {/* ✅ Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Card />
              <Text
                content1={
                  <p style={{ fontSize: "1.2rem" }}>
                    1. India Gate is located in New Delhi and serves as a war memorial dedicated to Indian soldiers who died in World War I and the Afghan Wars.<br></br><br></br>

                    2. It was designed by Sir Edwin Lutyens and stands 42 meters tall, made entirely of sandstone.<br></br><br></br>

                    3. The structure is engraved with the names of over 13,000 soldiers, honoring their bravery and sacrifice.<br></br><br></br>

                    4. by lush green lawns, it is a popular spot for both tourists and locals to visit and relax.<br></br><br></br>

                    5. India Gate symbolizes national pride and is also used as a venue for ceremonial events, including the Republic Day parade.<br></br><br></br>
                  </p>
                }
                content2={
                  <img
                    src={IndiaGateImg}
                    alt="India Gate"
                    style={{
                      width: "100%",
                      height: "100%",
                      fontSize:"2rem",
                      borderRadius: "18px",
                    }}
                  />
                }
              />

              <Text
                content1={
                  <img
                    src={TajMahalImg}
                    alt="Taj Mahal"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "18px",
                    }}
                  />
                }
                content2={
                  <p style={{ fontSize: "1.2rem" }}>
                  1. The Taj Mahal, located in Agra, India, is a world-famous monument of love.<br></br><br></br>

                  2. It was built by Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal.<br></br><br></br>

                  3. Constructed entirely of white marble, it is renowned for its perfect symmetry and intricate craftsmanship.<br></br><br></br>

                  4. The monument is surrounded by beautiful gardens and reflecting pools, creating a breathtaking view.<br></br><br></br>

                  5. It is recognized as a UNESCO World Heritage Site and stands as a symbol of India’s rich cultural heritage.
                  </p>
                }
              />
              <Footer/>
            </>
          }
        />

        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </Router>
  );
}

export default App;
