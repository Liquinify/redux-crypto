import React, { FC } from "react";
import { useTheme } from "../hooks/theme";
import { IoMoon, IoSunny } from "react-icons/io5";

const Theme: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme" onClick={toggleTheme}>
      {theme === "Light" ? <IoSunny size="18px" /> : <IoMoon size="14px" />}
      <span className="theme__span">{theme} Mode</span>
    </div>
  );
};

export default Theme;
