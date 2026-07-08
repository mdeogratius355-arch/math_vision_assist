 import { useState } from "react";

export default function Generate() {

  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(
    "Enter a description of the mathematical diagram you want to generate."
  );

  function generateDiagram() {

    if (description === "") {
      setMessage("Please enter a diagram description first.");
    } else {
      setMessage(
        "AI is generating your mathematical diagram. The generated diagram will appear here."
      );
    }

  }


  return (

    <div className="container">

      <h1>Generate Diagram</h1>

      <p className="subtitle">
        Create mathematical diagrams using AI.
      </p>


      <label>
        Describe your diagram:
      </label>


      <textarea
        rows="5"
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "18px",
          marginTop: "15px",
          marginBottom: "20px"
        }}
        placeholder="Example: Draw a triangle with angles 60°, 60° and 60°"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />


      <button
        className="main-button"
        onClick={generateDiagram}
      >
        Generate Diagram
      </button>


      <div className="status">

        <h3>Status</h3>

        <p>
          {message}
        </p>

      </div>


    </div>

  );
}
