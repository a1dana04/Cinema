// import './App.scss';
import { Route, Routes } from "react-router-dom";
// import "./App.scss";
import './App.scss'
import Header from "./components/Header";
import Popular from "./components/Popular";
import Home from "./components/Home";
import TopRated from "./components/TopRated";
import MovieDetails from "./Pages/MovieDetails";
import ActorDetails from "./Pages/ActorDetails";
import Search from "./components/Search";
import { useContext } from "react";
import { LanguageContex } from "./context";
import Favorite from "./components/Favorite";

function App() {
  const {dark} = useContext(LanguageContex)
  return (
    <div style={{
    background: dark ? "black":"white",color: dark ? "white" :""
    }}>
      <Header />
      {/* <Hero/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/movieDetails/:kinoId" element={<MovieDetails/>}/>
        <Route path="/actorDetails/:actorId" element={<ActorDetails/>}/>
        <Route path="/search/:nameMovie" element={<Search/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </div>
  );
}

export default App;
