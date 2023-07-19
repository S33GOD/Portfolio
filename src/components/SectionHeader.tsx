interface SectionHeaderProps {
  text: string;
}

function SectionHeader({ text }: SectionHeaderProps) {
  return (
    <div className="section-header" id={text}>
      <span className="section-header-line"></span>
      <h1>{text}</h1>
      <span className="section-header-line"></span>
    </div>
  );
}

export default SectionHeader;
