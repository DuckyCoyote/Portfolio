import "./Service.style.css";
import ReactIcon from "../../assets/reacticon.png";
import WebIcon from "../../assets/service-2.svg";
import NodeIcon from "../../assets/nodejsicon.webp";

const data = [
  {
    id: 1,
    image: WebIcon,
    title: "Web Development",
    description:
      "Implementation of web design to code, layout, HTML, CSS, JS and UI/UX.",
  },
  {
    id: 2,
    image: ReactIcon,
    title: "React Js",
    description:
      "Experience in project development projects, with a strong focus on using ReactJS. Proficient in the integrated management capabilities of React, including state, context and Redux.",
  },
  {
    id: 3,
    image: NodeIcon,
    title: "Node Js",
    description:
      "Experience in developing and deploying REST APIs using Node.js, as well as handling HTTP status code. Strong knowledge in the integration of relational databases (MySQL, PostgreSQL) and NoSQL databases in projects.",
  },
];

export default function Service() {
  return (
    <section className="services container section" id="services">
      <div className="services_container grid">
        {data.map(({ id, description, title, image }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="Images Services" className="services_img" />

              <h3 className="services_title">{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
