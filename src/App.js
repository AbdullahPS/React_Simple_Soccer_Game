import { useState } from "react";
import "./styles.css";

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const startGame = async () => {
    setScoreA(0);
    setScoreB(0);
    for (let i = 0; i < 90; i += 10) {
      const getTeam = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      console.log(getTeam);
      if (getTeam === 1) setScoreA((prev) => prev + 1);
      else if (getTeam === 2) {
        setScoreB((prev) => prev + 1);
      } else {
        console.log("nothing changed");
      }
      await new Promise((r) => setTimeout(r, 1000));
    }
    alert("game over");
  };
  return (
    <div className="App">
      <div class="container">
        <div className="score">
          <h1>{scoreA}</h1>
        </div>
        <button onClick={startGame}>Start game</button>
        <div className="score">
          <h1>{scoreB}</h1>
        </div>
      </div>
    </div>
  );
}
