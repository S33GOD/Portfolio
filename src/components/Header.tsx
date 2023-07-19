import "../css/Header.css";
import { ReactNode } from "react";
import CollapseExpandButton from "./CollapseExpandButton";
import { useState } from "react";
import ThemeButton from "./ThemeButton";

interface HeaderProps {
  children: ReactNode;
  onThemeChange: (state: number) => void;
}

function Header({ children, onThemeChange }: HeaderProps) {
  const [state, setState] = useState(1);
  const onChildStateChange = (stateChange: number) => {
    setState(stateChange);
  };
  return (
    <div className={!state ? "header expanded" : "header collapsed"}>
      <ThemeButton onThemeChange={onThemeChange}></ThemeButton>
      <CollapseExpandButton
        onStateChange={onChildStateChange}
      ></CollapseExpandButton>
      {children}
    </div>
  );
}

export default Header;
