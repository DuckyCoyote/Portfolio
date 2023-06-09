import HeaderSocials from "./Header.socials.component";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes.component";

import "./Home.style.css";
import Me from "../../assets/avatar-1.svg";

export default function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="Me avatar" className="home_img" />
        <h1 className="home_name">Alejandro Daniel Cruz Hernandez</h1>
        <span className="home_education">I'm a Full-Srack Developer</span>

        <HeaderSocials />

        <a href="#about" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
        <Shapes />
    </section>
  );
}
