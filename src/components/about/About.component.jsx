import "./About.style.css";
import AboutAvatar from "../../assets/avatar-2.svg";
import AboutBox from "./About.box.component";

export default function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={AboutAvatar} alt="Avatar about" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am Alejandro Daniel Cruz Hernandez, a passionate web developer
              originally from Mexico with a main focus on application
              development using React.js and Node.js.
            </p>
            <a href="https://drive.google.com/uc?export=download&id=1YQ-yzfGnLQPHsmpigKHOm1hshPxZPV_i" className="btn">
              Download CV
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">Web Development</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills_bar web"></div>
            </div>

            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">React Js</h3>
                <span className="skills_number">75%</span>
              </div>

              <div className="skills_bar react"></div>
            </div>

            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">Node Js</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar node"></div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
}
