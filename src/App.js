import React from "react";
import "./App.css";
import Container from "./components/Container";
import ProjectContainer from "./components/ProjectContainer";

function App() {
  return (
    <div className="App">
      <Container />
      <ProjectContainer />
         <h6><a
          style={{ fontWeight: "bold", textDecoration: "none", color: "rgba(0, 0, 0, 0.492)" }}
          href="mikrobka231@gmail.com"
          target="_blank" rel="noreferrer"
      >mikrobka231@gmail.com</a></h6>
    </div>
  );
}

export default App;
