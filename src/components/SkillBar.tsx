import React, { useState } from "react";

interface SkillBarProps {
  rating: number;
  skill: string;
  colorPlaceholder: string;
}

function SkillBar({ rating, skill, colorPlaceholder }: SkillBarProps) {
  const bgColors = ["#e06960", "#de844b", "#dec247", "#cde06c", "#6dc93e"];

  return (
    <div className="skill-box">
      <span>{skill}</span>
      <div className="skill-level-container">
        {bgColors.map((el, index) => {
          return (
            <div
              className="skill-level"
              id={"skill-level-" + index}
              style={
                index < rating
                  ? { background: el }
                  : { background: colorPlaceholder, opacity: 0.1 }
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillBar;
