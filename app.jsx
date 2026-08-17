import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Upload from "./upload";
import Generate from "./generate";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/upload"
          element={<Upload />}
        />

        <Route
          path="/generate"
          element={<Generate />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
