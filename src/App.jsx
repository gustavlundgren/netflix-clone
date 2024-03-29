import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Player from "./components/Player";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/" element={<Netflix />}/>
      </Routes>
    </Router>
  )
}
