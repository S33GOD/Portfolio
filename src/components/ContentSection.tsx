import "../css/ContentSection.css";
import DefaultProps from "./DefaultPropsInterface";

function ContentSection({ children }: DefaultProps) {
  return <div id="content-section">{children}</div>;
}

export default ContentSection;
