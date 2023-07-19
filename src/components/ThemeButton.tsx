import { useState } from "react";

interface ThemeButtonProps {
  onThemeChange: (state: number) => void;
}

function ThemeButton({ onThemeChange }: ThemeButtonProps) {
  const [state, setState] = useState(0);
  const imgPath = "src/assets/img/";
  return (
    <div
      className="theme-change-btn"
      onClick={() => {
        setState(Number(!state));
        onThemeChange(Number(!state));
      }}
    >
      <img src={!state ? imgPath + "dark.svg" : imgPath + "light.svg"}></img>
      <div id="theme-toggle-switch">
        <div id="roller"></div>
        <div id="empty-roller-space"></div>
      </div>
    </div>
  );
}

export default ThemeButton;
