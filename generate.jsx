 import { useState } from "react";

export default function Generate() {
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(
    "Enter a description of the mathematical diagram you want to generate."
  );

  const [image, setImage] = useState("");

  async function generateDiagram() {
    if (description.trim() === "") {
      setMessage("Please enter a diagram description first.");
      return;
    }

    setMessage("AI is generating your mathematical diagram...");
    setImage("");

    try {
      const response = await fetch(
        "https://math-vision-assist.vercel.app/api/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: description,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        setMessage(data.error);
        return;
      }

      if (!data.image) {
        setMessage("The AI did not return an image.");
        return;
      }

      setImage(`data:image/png;base64,${data.image}`);
      setMessage("Diagram generated successfully.");

    } catch (error) {
      setMessage("Connection failed. Please try again.");
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
        onChange={(e) => setDescription(e.target.value)}
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

      {image && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={image}
            alt="Generated mathematical diagram"
            style={{
              width: "100%",
              borderRadius: "10px"
            }}
          />
        </div>
      )}

    </div>
  );
}
