import { ReactNode } from "react";
import "../css/FlexBox.css";

interface FlexBoxProps {
  children: ReactNode;
  themeState: number;
}

function FlexBox({ children, themeState }: FlexBoxProps) {
  return (
    <div id="main-flexbox" className={!themeState ? "dark" : "light"}>
      {children}
    </div>
  );
}

export default FlexBox;
