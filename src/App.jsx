import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import FanZonePage from './pages/FanZonePage/FanZonePage'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/nhl" element={<FanZonePage />} />
    </Routes>
    </BrowserRouter>

      </>
  )
}

export default App
