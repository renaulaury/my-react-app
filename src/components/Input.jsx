function Input({ label, type, name, options, onChange }) {
  // Bouton radio 
  if (type === "radio") {
    return (
      <div className="field">
        <p>{label}</p>
        {options.map((option) => (
          <label key={option}>
            <input type="radio" name={name} value={option} onChange={onChange} /> {option}
          </label>
        ))}
      </div>
    )
  }

  // Input classique
  return (
    <div className="field">
      <label>{label}</label>
      <input type={type} onChange={onChange} />
    </div>
  )
}

export default Input