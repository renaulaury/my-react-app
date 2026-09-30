import { useState, useEffect } from 'react'
import './Time.css'

function Time() {
  // valeur de dép
  const [time, setTime] = useState(new Date())
  const [boom, setBoom] = useState(false)

  // Timer
  useEffect(() => {
    console.log("tic-tac")

    if (boom) return // pour stopper le timer add boom here (boom:true) and array(stop timer)
    const interval = setInterval(() => {
      setTime(new Date()) // rempl par l'heure actuelle
    }, 1000)

    // Nettoyer time
    return () => clearInterval(interval)
  }, [boom])  //tabl de dépendance : effet s'éxé x1


  //Boom 10sec
  useEffect(() => {
    // si déjà explosé
    if (boom) return

    const timeout = setTimeout(() => {
      setBoom(true)
    }, 10000)

    // Nettoyer boom
    return () => clearTimeout(timeout)
  }, [boom])

  return (
    <div>
      {/* formate la date */}
      <p>{time.toLocaleTimeString()}</p>

      {/* Affiche BOOM */}
      {boom && (
        <div className="boom">
          <p>BOOM</p>
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.gif"
            alt="Tête qui explose"
            width="120"
          />

          <button className="boom-reset" onClick={() => setBoom(false)}>Réinit</button>
        </div>
      )}
    </div>
  )
}

export default Time
