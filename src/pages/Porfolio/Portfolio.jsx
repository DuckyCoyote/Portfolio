import { useState } from 'react';

import portfolio from '../../data/portfolio.json';

import folder from '../../assets/folder.png';
import bank from '../../assets/bank.webp';
import ecommerce from '../../assets/ecommerce.webp';
import ownorm from '../../assets/ownorm.webp';
import github2 from '../../assets/techicons/github.webp';

import javascript from '../../assets/techicons/javascript.webp';
import typescript from '../../assets/techicons/typescript.webp';
import mysql from '../../assets/techicons/mysql.webp';
import postgres from '../../assets/techicons/postgres.webp';
import nodejs from '../../assets/techicons/nodejs.webp';
import nestjs from '../../assets/techicons/nestjs.webp';
import react from '../../assets/techicons/react.webp';
import angular from '../../assets/techicons/angular.webp';
import springboot from '../../assets/techicons/springboot.svg';
import java from '../../assets/techicons/java.webp';

import './portfolio.styles.css';

export default function Portfolio() {
  const [selectedFolder, setSelectedFolder] = useState(portfolio[0]);

  const icons = { bank, ecommerce, ownorm };
  const techIcons = {
    java,
    javascript,
    typescript,
    mysql,
    postgres,
    nodejs,
    nestjs,
    react,
    angular,
    springboot,
  };

  const genIconMap = (iconNames) => {
    return iconNames.reduce((acc, icon) => {
      if (icons[icon.name]) {
        acc[icon.name] = icons[icon.name];
      }
      return acc;
    }, {});
  };

  const genTechIconMap = (technologies) => {
    return technologies.reduce((acc, tech) => {
      if (techIcons[tech]) {
        acc[tech] = techIcons[tech]; // Asociamos el nombre de la tecnología con el ícono
      }
      return acc;
    }, {});
  };

  const projectIconMap = genIconMap(portfolio);

  return (
    <section className="portfolio card" id="portfolio">
      <div className="sub-title_container">
        <h2 className="sub-title">portfolio</h2>
      </div>
      <div className="portfolio-desktop">
        <div className="folders">
          {portfolio.map((folderElement) => {
            return (
              <div
                key={folderElement.id}
                className="folder-container"
                onClick={() => setSelectedFolder(folderElement)}
              >
                <img src={folder} alt="folder" className="folder" />
                <p>{folderElement.name}</p>
              </div>
            );
          })}
        </div>
        <div className="text-file portfolio-canvas">
          {selectedFolder ? (
            <>
              <h3 className="title-file">{selectedFolder.name}</h3>
              <div className="description">
                <img
                  src={projectIconMap[selectedFolder.name]}
                  alt=""
                  className="project-icon"
                />
                <div className="description-repository">
                  <p>{selectedFolder.description}</p>
                  <a href={selectedFolder.url} className="repository-link btn" target='__blank'>
                    <img src={github2} alt="github" />
                    <span>Repository</span>
                  </a>
                </div>
              </div>
              <div className="technologies">
                {selectedFolder.technologies.map((technology) => {
                  const projectTechIconMap = genTechIconMap([technology]);
                  return (
                    <img
                      key={technology}
                      src={projectTechIconMap[technology]}
                      className="tech-icons"
                    ></img>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <h3 className="title-file">Portfolio</h3>
              <p>Click on a folder to see the project details.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
