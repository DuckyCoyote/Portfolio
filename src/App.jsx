import Home from './components/home/Home.component';
import Portfolio from './components/portfolio/Portfolio.component';
import About from './components/about/About.component';
import Services from './components/services/Services.component';
import Sidebar from './components/sidebar/Sidebar.components';

import './App.css'

function App() {
  return (
    <div>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Portfolio />
      </main>
   </div>
 )
}

export default App
