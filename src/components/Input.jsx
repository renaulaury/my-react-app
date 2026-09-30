function Input({ label, type, options, error, ...rest }) {
  // Bouton radio 
  if (type === "radio") {
    return (
      <div className="field">
        <p>{label}</p>
        {options.map((option) => (
          <label key={option}>
            <input type="radio" value={option} {...rest} /> {option}
          </label>
        ))}
        {error && <p className="error">{error}</p>}
      </div>
    )
  }

  // Input classique
  return (
    <div className="field">
      <label>{label}</label>
      <input type={type} {...rest}/>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Input