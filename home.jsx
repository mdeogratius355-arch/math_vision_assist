 import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();


  return (

    <div className="container">

      <h1>
        Math Vision
      </h1>


      <p className="subtitle">
        AI-powered Mathematical Diagram Assistant
      </p>


      <button
        className="main-button"
        onClick={() => navigate("/upload")}
      >
        Upload Diagram
      </button>


      <button
        className="main-button"
        onClick={() => navigate("/generate")}
      >
        Generate Diagram
      </button>


      <button
        className="main-button"
        onClick={() => navigate("/about")}
      >
        About Us
      </button>


      <div className="status">

        <h3>
          Welcome
        </h3>

        <p>
          Use Math Vision to upload mathematical diagrams,
          generate new diagrams using AI, and learn more
          about the project.
        </p>

      </div>


    </div>

  );

}
