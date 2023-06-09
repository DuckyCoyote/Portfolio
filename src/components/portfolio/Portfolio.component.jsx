import './Portfolio.style.css';
import Menu from "./Menu.component";

export default function Portfolio() {
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section_title">Recent Works</h2>

      <div className="work_container grid">
        {
          Menu.map(element => {
            const { id, image, title, url } = element;
            return (
              <div className="work_card" key={id}>
                <div className="work_thumbnail">
                  <img src={image} alt={title} className="work_img" />
                  <div className="work_mask"></div>
                </div>

                <h3 className="work_title">{title}</h3>
                <a href={ url } className="work_button">
                  <i className="icon-link work_button-icon"></i>
                </a>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}