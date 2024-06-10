import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("/api/name").then((res) => {
      setName(res.data);
    });
  });
  return (
    <>
      <h1 className="bg-green-800 ">{name}</h1>
    </>
  );
}

export default App;
