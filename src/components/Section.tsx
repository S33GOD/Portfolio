import { ReactNode } from "react";

interface SectionProps {
  className?: string;
  id?: string;
  children: ReactNode;
}

function Section({ children, className, id }: SectionProps) {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
}

export default Section;
