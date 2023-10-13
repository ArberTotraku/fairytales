import React, { useEffect, useState } from "react";
import "./App.css";
import Register from "./components/Register";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }, []); // Provide an empty dependency array to ensure the effect runs only once

  return (
    <div className="App">
      <h1>This is a new site</h1>
      <p>Message from Express server: {message}</p>

<Register />
    </div>
  );
}

export default App;
