import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import StudioLayout from "./components/StudioLayout";

function App() {
  return (
       <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/studio" element={<StudioLayout />} />
      </Routes>
    </Router>
  )
}

export default App
