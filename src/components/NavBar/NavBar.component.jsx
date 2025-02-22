import "./navbar.styles.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="ui-element">
        <li className="li-element">
          <a href="#home">Home</a>
        </li>
        <li className="li-element">
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
    </nav>
  );
}
