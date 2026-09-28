import { useState } from "react";

function Counter() {
  //const [valeur, setValeur] = useState(valeurDeDépart)
  const [count, setCount] = useState(0)
  const [playerName, setPlayerName] = useState("")

  // event handler : récupère ce qui est saisi dans l'input
  function handleNameChange(event) {
    setPlayerName(event.target.value)
  }

  return (
    <div>
      <label>
        Player name :{" "}
        <input
          type="text"
          placeholder="Player name"
          value={playerName}
          onChange={handleNameChange}
        />
      </label>

      {playerName && <p>Joueur : {playerName}</p>}

      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>

      {count === 10 && <p>BOOM</p>}
    </div>
  )
}

export default Counter
