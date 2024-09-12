import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import NowPlaying from "./Pages/Nowplaying";
import Popular from "./Pages/Popular";
import TopRated from "./Pages/TopRated";
import Upcoming from "./Pages/Upcomig";
import "./App.css"; 

import Navbarmain from "./Compontents/Navbar";

function App() {
  return (
    <Router basename="/cinemaApiReact-15">
      <Navbarmain />

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
