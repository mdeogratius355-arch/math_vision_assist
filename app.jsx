 import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Generate from "./pages/Generate";
import About from "./pages/About";


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

        <Route 
          path="/about" 
          element={<About />} 
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;  
