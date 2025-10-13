import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./component/nav"; // ✅ Renamed Text4 → Nav for clarity
import Card from "./card.js";
import FavoritesPage from "./FavoritesPage.js";
import Footer from "./component/footer.js";
import Places from "./places.js";
import Text from "./component/text";

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
                    India Gate, located in New Delhi, is a war memorial dedicated
                    to Indian soldiers who died in World War I and the Afghan Wars.
                    Designed by Sir Edwin Lutyens, it stands 42 meters tall and is
                    made of sandstone. The structure is engraved with the names of
                    over 13,000 soldiers, honoring their bravery and sacrifice.
                    Surrounded by lush lawns, it is a popular spot for both tourists
                    and locals to visit and relax. India Gate symbolizes national
                    pride and serves as a venue for ceremonial events, including the
                    Republic Day parade.
                  </p>
                }
                content2={
                  <img
                    src={IndiaGateImg}
                    alt="India Gate"
                    style={{
                      width: "100%",
                      height: "100%",
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
                    The Taj Mahal, in Agra, India, is a world-famous monument of
                    love. It was built by Emperor Shah Jahan in memory of his wife,
                    Mumtaz Mahal. Made entirely of white marble, it is admired for
                    its perfect symmetry and intricate designs. Surrounded by
                    gardens and reflecting pools, it offers a breathtaking view. The
                    Taj Mahal is a UNESCO World Heritage Site and a symbol of
                    India’s rich cultural heritage.
                  </p>
                }
              />
              <Footer/>
            </>
          }
        />

        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </Router>
  );
}

export default App;
