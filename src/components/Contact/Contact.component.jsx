import cv from '../../assets/cv(1).png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

import aboutMe from '../../data/about-me.json';

import './contact.styles.css';

export default function ContactComponent() {
  const { social } = aboutMe;

  const icons = { cv, linkedin, github };

  const genIconMap = (socials) => {
    return socials.reduce((acc, social) => {
      if (icons[social.name]) {
        acc[social.name] = icons[social.name];
      }
      return acc;
    }, {});
  };

  const iconMap = genIconMap(social);
  return (
    <>
      {social.map((contact) => (
        <a
          href={contact.link}
          key={contact.id}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={iconMap[contact.name]}
            alt={contact.name}
            className="icons"
          />
        </a>
      ))}
    </>
  );
}
