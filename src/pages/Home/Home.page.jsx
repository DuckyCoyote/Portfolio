import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

import "./styles.css";
import text from "../../data/about-me.txt";

import info from "../../data/about-me.json";
import polar from "../../assets/polar.jpg";

export default function Home() {
  const [fileReader, setFileContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(text).catch((error) => console.log(error));
        console.log(response);
        const data = await response.text();
        setFileContent(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="presentation" id="Home">
      <div className="photo-data">
        <img src={polar} alt="polar" className="photo" />
        <div className="data">
          <h3>{info.phrase}</h3>
          <h2>{info.name}</h2>
          <TypeAnimation
            sequence={["Software Engineer", 1000, "Backend Developer", 1000]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="info text-file">
        <h3 className="title-file">{info["title-file"]}</h3>
        <p>{fileReader}</p>
      </div>
    </section>
  );
}
