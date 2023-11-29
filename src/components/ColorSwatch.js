import React, { useState } from "react";
import { useColor } from "./ColorContext";

const ColorSwatch = () => {
  const { setNewColor } = useColor();
  const [setIsPaused] = useState(false);

  const colorArray = [
    "#ff5507",
    "#ffc532",
    "#ffb189",
    "#ffffff",
    "#70736c",
    "#97b081",
  ];

  const handleColorClick = (color) => {
    setIsPaused(true);
    setNewColor(color);
  };

  return (
    <div className="color-swatch">
      {colorArray.map((color, index) => (
        <button
          key={index}
          style={{ background: color }}
          onClick={() => handleColorClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorSwatch;
