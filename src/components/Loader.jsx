import './Loader.css'

// angles des 5 trous de la bobine (un tous les 72° = 360 / 5)
const HOLES = [0, 72, 144, 216, 288]

// size : 'large' (listes de films) ou 'small' (barre de nav)
function Loader({ size = 'large' }) {
  return (
    <div className={`loader loader--${size}`} role="status">
      {/* bobine dessinée en SVG : disque + 5 trous + moyeu central */}
      <svg className="loader__reel" viewBox="0 0 100 100" aria-hidden="true">
        <circle className="loader__disc" cx="50" cy="50" r="46" />
        {HOLES.map((angle) => (
          <circle
            key={angle}
            className="loader__hole"
            cx="50"
            cy="23"
            r="11"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
        <circle className="loader__hole" cx="50" cy="50" r="5" />
      </svg>
      <p className="loader__text">Chargement...</p>
    </div>
  )
}

export default Loader
