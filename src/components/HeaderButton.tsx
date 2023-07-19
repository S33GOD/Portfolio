import { ReactNode } from "react";

interface HeaderButtonProps {
  type: string;
  children: ReactNode;
}

function HeaderButton({ type, children }: HeaderButtonProps) {
  const scrollTo = () => {
    let el = document.getElementById(type);
    console.log(el);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header-button" onClick={scrollTo}>
      <img src={"src/assets/img/" + type + ".svg"} />
      <span>{children}</span>
    </div>
  );
}

export default HeaderButton;
