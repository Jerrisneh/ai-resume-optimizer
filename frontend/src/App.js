import { useState } from "react";

function App() {
  const [resume, setResume] = useState("");

  const [result, setResult] = useState("");

  const handleOptimize = async () => {
    try {
      const response = await fetch("http://localhost:5000/optimize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resume }),
      });

      const data = await response.json();
      setResult(data.data);
    } catch (err) {
      console.error(err);
      setResult("Backend connection failed");
    }
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

      <p>Backend response:</p>
      <p>{result}</p>
    </div>
  );
}

export default App;
