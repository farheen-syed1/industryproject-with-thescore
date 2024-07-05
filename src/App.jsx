import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './pages/HomePage/HomePage'
import FanZonePage from './pages/FanZonePage/FanZonePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fanzone/:sport" element={<FanZonePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
