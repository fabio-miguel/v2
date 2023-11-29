import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#ff5507");
  const [isPaused, setIsPaused] = useState(false);

  const setNewColor = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <ColorContext.Provider
      value={{ backgroundColor, setNewColor, isPaused, setIsPaused }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
