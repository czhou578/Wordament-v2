import { Route, Routes } from "react-router-dom";
import { ColorGame } from "./components/ColorGame";
import { GameSetup } from "./components/GameSetup";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { UserDashboard } from "./components/UserDashboard";
import Wordle from "./components/Wordle";
function App() {
  return (
    <Routes>
      <Route path="/" element={<GameSetup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/wordle" element={<Wordle />} />
      <Route path="/color-game" element={<ColorGame />} />
    </Routes>
  );
}

export default App;
