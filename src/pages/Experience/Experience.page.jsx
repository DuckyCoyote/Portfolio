import "./styles.css";

import folder from "../../assets/folder.png";

import folders from "../../data/folders.json";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="sub-title_container">
        <h2 className="sub-title">EXPERIENCE</h2>
      </div>
      <div className="experience-desktop">
        <div className="folders">
          {folders.map((folderElement) => (
            <div key={folderElement.id}>
              <img src={folder} alt="folder" className="folder" />
              <p>{folderElement.name}</p>
            </div>
          ))}
        </div>
        <div className="text-file experience-file">
          <h3 className="title-file">Portfolio</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            earum, nihil accusantium officiis expedita odit nesciunt,
            consequatur quae ut corporis, fugiat dicta fugit quia tenetur
            placeat repudiandae. Tenetur, ipsum rem? Lorem ipsum dolor sit amet,
            officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
            nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
            cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
            Lorem est aliquip amet voluptate voluptate dolor minim nulla est
            proident. Nostrud officia pariatur ut officia. Sit irure elit esse
            ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem
            duis laboris cupidatat officia voluptate. Culpa proident adipisicing
            id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
            reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
            culpa et culpa duis.
          </p>
        </div>
      </div>
    </section>
  );
}
