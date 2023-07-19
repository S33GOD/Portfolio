import DefaultProps from "./DefaultPropsInterface";

function Tag({ children }: DefaultProps) {
  return (
    <div className="tag-small">
      <span>{children}</span>
    </div>
  );
}

export default Tag;
