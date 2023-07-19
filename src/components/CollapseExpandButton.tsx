import { useState } from "react";

interface CollapseExpandButtonProps {
  onStateChange: (state: number) => void;
}

function CollapseExpandButton({ onStateChange }: CollapseExpandButtonProps) {
  const [state, setState] = useState(0);
  const imgPath = "src/assets/img/";
  return (
    <div
      className="collapse-expand-button"
      onClick={() => {
        setState(Number(!state));
        onStateChange(Number(state));
      }}
    >
      <img
        id="collapse-expand-svg"
        src={!state ? imgPath + "collapsed.svg" : imgPath + "expanded.svg"}
      ></img>
    </div>
  );
}

export default CollapseExpandButton;
