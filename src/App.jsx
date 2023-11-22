import NavBar from "./components/NavBar/NavBar.component.jsx";
import Home from "./pages/Home/Home.page.jsx";
import Experience from "./pages/Experience/Experience.page.jsx";

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="container">
        <NavBar />
        <Home />
        <Experience />
      </div>
    </div>
  );
}

export default App;
