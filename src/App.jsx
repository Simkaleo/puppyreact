import "./App.css";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>App</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />}></Route>
        <Route path="/players/:id" element={<SinglePlayer />}></Route>
      </Routes>
      <SinglePlayer />
    </>
  );
}

export default App;
