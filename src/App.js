import './App.css';
import Intro from './Pages/Intro';
import Home from './Pages/Home';
import Results from './Pages/Results';
import Seller from './Pages/Seller';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/Results" element={<Results />} />
          <Route path="/home/Seller" element={<Seller />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
