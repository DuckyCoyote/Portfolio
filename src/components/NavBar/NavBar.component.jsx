import "./styles.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="ui-element">
        <li className="li-element">
          <a href="#home">Home</a>
        </li>
        <li className="li-element">
          <a href="#experience">Experience</a>
        </li>
      </ul>
    </nav>
  );
}
