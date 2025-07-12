import React from "react";

function App() {
  const throwError = () => {
    fetch("/api/error");
  };

  return (
    <div>
      <h1>MERN DevOps Frontend 🚀</h1>
      <button onClick={throwError}>Trigger Error</button>
    </div>
  );
}

export default App;
