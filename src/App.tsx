import ContentSection from "./components/ContentSection";
import FlexBox from "./components/FlexBox";
import Header from "./components/Header";
import HeaderButton from "./components/HeaderButton";
import SectionHeader from "./components/SectionHeader";
import Tag from "./components/Tag";
import Section from "./components/Section";
import OverviewText from "./assets/Overview";
import { useState } from "react";
import SkillBox from "./components/SkillBox";
import Experience from "./assets/Experience";
import EducationBox from "./components/EducationBox";
import Education from "./assets/Education";
import Footer from "./components/Footer";

const App = () => {
  const skills = ["HTML", "CSS", "REACT", "SQL", "OOP", "PYTHON"];
  const [themeState, setThemeState] = useState(0);
  const handleThemeState = (state: number) => setThemeState(state);
  return (
    <FlexBox themeState={themeState}>
      <Header onThemeChange={handleThemeState}>
        <HeaderButton type="Overview">Overview</HeaderButton>
        <HeaderButton type="Education">Education</HeaderButton>
        <HeaderButton type="Experience">Experience</HeaderButton>
        <HeaderButton type="Contacts">Contacts</HeaderButton>
      </Header>
      <ContentSection>
        <Section id="header-section">
          <div id="header-section-info">
            <h1>Pavlo Suprun</h1>
            <h3>Front-end React developer</h3>
            <div id="tag-box">
              <span>Skills</span>
              {skills.map((el) => (
                <Tag>{el}</Tag>
              ))}
            </div>
            <div className="header-section-decorative-line">
              <div className="first"></div>
              <div className="second"></div>
            </div>
          </div>
          <div id="header-section-image">
            <img src="src/assets/react.svg"></img>
          </div>
        </Section>
        <SectionHeader text="Overview"></SectionHeader>
        <Section className="plain-section overview">
          <p>{OverviewText}</p>
        </Section>
        <SectionHeader text="Education"></SectionHeader>
        <Section className="plain-section education">
          <EducationBox
            header="Vinnytsia Technical College"
            degree="Computer Engineering Junior Bachelor"
            text={Education.VTC}
            date="Sep 2018 - Jul 2022"
          ></EducationBox>
          <EducationBox
            header="Vinnytsia National Technical University"
            degree="Computer Engineering Bachelor"
            text={Education.VNTU}
            date="Oct 2022 - Present"
          ></EducationBox>
        </Section>
        <SectionHeader text="Experience"></SectionHeader>
        <Section className="plain-section experience">
          <div id="experience-subsection">
            <SkillBox pallete={themeState}></SkillBox>
            <div id="project-box">
              <h2>Projects</h2>
              <a href="https://github.com/S33GOD/CustomObjectDetectionYOLO">
                <img src="src/assets/img/github.svg"></img>Artist Tracking
                Website
              </a>
            </div>
          </div>
          <div id="experience-grid">
            <div className="experience-header">
              <span className="experience-workplace">
                Winstars Technologies LLC
              </span>
              <span className="experience-date">Feb 2022 - Apr 2022</span>
            </div>
            <div className="experience-content">
              <div className="experience-role">
                <em>Position:</em> Trainee Data Scientist
              </div>
              <div className="experience-desc">{Experience.winstars}</div>
            </div>
            <div className="experience-header">
              <span className="experience-workplace">
                FIVE Systems Development
              </span>
              <span className="experience-date">Oct 2022 - Apr 2022</span>
            </div>
            <div className="experience-content">
              <div className="experience-role">
                <em>Position:</em> Junior Data Scientist
              </div>
              <div className="experience-desc">{Experience.five}</div>
            </div>
          </div>
        </Section>
        <Footer></Footer>
      </ContentSection>
    </FlexBox>
  );
};

export default App;
