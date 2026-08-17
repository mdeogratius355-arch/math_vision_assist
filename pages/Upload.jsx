import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(
    "Upload a mathematical diagram to begin."
  );

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    setFile(selectedFile);
    setMessage(
      `File selected: ${selectedFile.name}. The diagram is ready for analysis.`
    );
  }

  function describeDiagram() {
    if (!file) {
      setMessage("Please select a mathematical diagram first.");
      return;
    }

    setMessage(
      "Diagram received. AI analysis will identify the mathematical components and provide an accessible description."
    );
  }

  return (
    <div className="container">

      <h1>Upload Diagram</h1>

      <p className="subtitle">
        Upload a mathematical diagram for analysis.
      </p>

      <label htmlFor="diagram-file">
        Select a mathematical diagram:
      </label>

      <input
        id="diagram-file"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{
          display: "block",
          marginTop: "15px",
          marginBottom: "20px",
          fontSize: "18px"
        }}
      />

      <button
        className="main-button"
        onClick={describeDiagram}
      >
        Describe Diagram
      </button>

      <div className="status">

        <h3>Status</h3>

        <p>{message}</p>

      </div>

    </div>
  );
}
