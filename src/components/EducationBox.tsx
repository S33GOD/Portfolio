interface EducationBoxProps {
  header?: string;
  text?: string;
  degree?: string;
  date?: string;
}

function EducationBox({ header, text, degree, date }: EducationBoxProps) {
  return (
    <div className="education-box">
      <div className="education-box-header">
        <h2>{header}</h2>
        <em>{degree}</em>
      </div>
      <em>{date}</em>
      <p>{text}</p>
    </div>
  );
}

export default EducationBox;
