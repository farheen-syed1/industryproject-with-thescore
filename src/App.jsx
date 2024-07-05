import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FanZonePage from "./pages/FanZonePage/FanZonePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fan-zone" element={<FanZonePage />} />
          <Route path="/fan-zone/:selectedSport" element={<FanZonePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
