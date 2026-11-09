import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Certificates,
  Contact,
  Experience,
  Hero,
  Navbar,
  Recommendations,
  Stats,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-paper text-ink">
        <Navbar />
        <Hero />

        <div className="atmosphere">
          <About />
          <Stats />
        </div>

        <div className="bg-paper">
          <Projects />
        </div>

        <div className="bg-surface/80 atmosphere">
          <Experience />
        </div>

        <div className="bg-paper">
          <Recommendations />
        </div>

        <div className="bg-surface/60">
          <Certificates />
        </div>

        <div className="bg-night">
          <Tech />
        </div>

        <div className="bg-paper atmosphere">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
