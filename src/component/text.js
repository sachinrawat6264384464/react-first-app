import React from "react";

const Text = ({ content1, content2 }) => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap", // allow stacking on small screens
    justifyContent: "center", // center content horizontally
    alignItems: "flex-start",
    backgroundColor: "rgba(143, 146, 146, 1)",
    padding: "20px",
    gap: "20px", // spacing between boxes
    minHeight: "50vh",
  };

  const boxStyle = {
    flex: "1 1 300px", // base width 300px, grows/shrinks
    maxWidth: "600px", // prevent too wide on large screens
    minHeight: "250px",
    backgroundColor: "rgba(61, 59, 59, 1)",
    borderRadius: "20px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>{content1}</div>
      <div style={boxStyle}>{content2}</div>
    </div>
  );
};

export default Text;
