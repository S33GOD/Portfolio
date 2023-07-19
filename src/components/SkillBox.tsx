import React, { useState } from "react";
import SkillBar from "./SkillBar";

interface SkillBoxProps {
  pallete: number;
}

function SkillBox({ pallete }: SkillBoxProps) {
  const colorPlaceHolder = ["#ccd7ed", "#2c2f33"];
  return (
    <div className="skill-box-container">
      <h2>Skills</h2>
      <SkillBar
        skill="HTML"
        rating={5}
        colorPlaceholder={colorPlaceHolder[pallete]}
      ></SkillBar>
      <SkillBar
        skill="CSS"
        rating={4}
        colorPlaceholder={colorPlaceHolder[pallete]}
      ></SkillBar>
      <SkillBar
        skill="SQL"
        rating={3}
        colorPlaceholder={colorPlaceHolder[pallete]}
      ></SkillBar>
      <SkillBar
        skill="OOP"
        rating={4}
        colorPlaceholder={colorPlaceHolder[pallete]}
      ></SkillBar>
      <SkillBar
        skill="PYTHON"
        rating={5}
        colorPlaceholder={colorPlaceHolder[pallete]}
      ></SkillBar>
      <SkillBar
        skill="REACT"
        rating={2}
        colorPlaceholder={colorPlaceHolder[pallete]}
      ></SkillBar>
      <SkillBar
        skill="JS/TS"
        rating={4}
        colorPlaceholder={colorPlaceHolder[pallete]}
      ></SkillBar>
    </div>
  );
}

export default SkillBox;
