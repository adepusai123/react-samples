import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudioLayout from "./components/StudioLayout";
import Prompts from "./pages/Prompts";
import NewPrompt from "./pages/NewPrompt";
import HomeLayout from "./components/HomeLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/studio" element={<StudioLayout><Prompts /></StudioLayout>} />
        <Route path="/studio/prompts" element={<StudioLayout><Prompts /></StudioLayout>} />
        <Route path="/studio/prompts/new" element={<StudioLayout><NewPrompt /></StudioLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
