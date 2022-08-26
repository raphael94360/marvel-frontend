import "./App.css";

// Import packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
