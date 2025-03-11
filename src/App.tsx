import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import StudioLayout from "./components/StudioLayout";
import Prompts from "./pages/Prompts";
import NewPrompt from "./pages/NewPrompt";
import HomeLayout from "./components/HomeLayout";

function App() {
  const isStudioEnabled = useSelector((state: RootState) => state.studio.isEnabled);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        {isStudioEnabled ? (
          <>
            <Route path="/studio" element={<StudioLayout><Prompts /></StudioLayout>} />
            <Route path="/studio/prompts" element={<StudioLayout><Prompts /></StudioLayout>} />
            <Route path="/studio/prompts/new" element={<StudioLayout><NewPrompt /></StudioLayout>} />
          </>
        ) : (
          <Route path="/studio/*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
