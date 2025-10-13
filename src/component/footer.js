import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "40vh",
        backgroundColor: "rgba(50, 144, 126, 1)",
        position: "relative", // ✅ so absolute children align correctly
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        
      }}
    >
      <h3
        style={{
          fontSize: "1.3rem", // ✅ corrected key
          color: "white",
          cursor: "pointer",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        VISIT_THE{" "}
        <span
          style={{
            fontSize: "2.3rem",
            fontWeight: "900",
            color: "#00ffe5",
            marginLeft: "8px",
          }}
        >
          INDIA
        </span>
      </h3>

      <p style={{ color: "gray", marginTop: "1rem" }}>
        © {new Date().getFullYear()} Visit_The_India. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
