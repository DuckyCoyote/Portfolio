import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

import text from '../../data/about-me.txt';

import info from '../../data/about-me.json';
import photo from '../../assets/avataaars.png';
import ContactComponent from '../../components/Contact/Contact.component';

import './home.styles.css';

export default function Home() {
  const [fileReader, setFileContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(text).catch((error) => console.log(error));
        const data = await response.text();
        setFileContent(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="presentation card" id="Home">
      <div className="photo-data">
        <img src={photo} alt="photo-profile" className="photo" />
        <div className="data">
          <h3>{info.phrase}</h3>
          <h2>{info.name}</h2>
          <TypeAnimation
            sequence={['Software Engineer', 1000, 'Backend Developer', 1000]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="about-me">
        <div className="description">
          <p>{fileReader}</p>
        </div>
        <div className="contact">
          <ContactComponent />
        </div>
      </div>
    </section>
  );
}
