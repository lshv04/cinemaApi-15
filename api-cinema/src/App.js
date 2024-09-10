import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



import Home from './Pages/Home';
import About from './Pages/About';
import NowPlaying from './Pages/Nowplaying';
import Popular from './Pages/Popular';
import TopRated from './Pages/TopRated';
import Upcoming from './Pages/Upcomig';
import './App.css'; // Verifique se o caminho está correto


function App() {
  return (
    <Router>
      <nav>
      

        
            <Link to="/" className='btn btn-primary'>Home</Link>
        
       
           
        
            <Link to="/now-playing" className='btn btn-primary'>Now Playing</Link>

            <Link to="/popular" className='btn btn-primary'>Popular</Link>

            <Link to="/top-rated" className='btn btn-primary'>Top Rated</Link>

            <Link to="/upcoming" className='btn btn-primary'>Upcoming</Link>

            <Link to="/about" className='btn btn-primary'>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} /> 
        <Route path="/upcoming" element={<Upcoming />} /> 
      </Routes>
    </Router>
  );
}

export default App;