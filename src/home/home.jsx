import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  const [name, steName] = useState();
  return (
    <div className="cor homezin">
      <h1>home</h1>
      <button className="butao">
        <Link to="/todo">Entrar</Link>
      </button>
      <p>{name}</p>
      <div className="inputContainer">
        <input
          className="inputi"
          type="text"
          onChange={(e) => steName(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
