import { useState } from "react";

function App() {
  const [resume, setResume] = useState("");

  const handleOptimize = async () => {
    console.log("Resume sent:", resume);
    alert("Button works Backend not connected yet");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Resume Optimizer</h1>

      <textarea
        placeholder='Paste your resume here...'
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        style={{
          width: "100%",
          height: "300px",
          marginTop: "20px",
          padding: "10px",
          fontSize: "14px",
        }}
      />

      <br />

      <button
        onClick={handleOptimize}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Optimize Resume
      </button>
    </div>
  );
}

export default App;
