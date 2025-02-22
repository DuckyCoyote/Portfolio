import NavBar from './components/NavBar/NavBar.component.jsx';
import Home from './pages/Home/Home.page.jsx';

import './App.css';
import Portfolio from './pages/Porfolio/Portfolio.jsx';
import { useEffect } from 'react';

function App() {

  // Background movment
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const offsetX = clientX / 50;
      const offsetY = clientY / 50;

      document.body.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        <NavBar />
        <Home />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
