function Input({ label, type, onChange }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input type={type} onChange={onChange} />
    </div>
  )
}

export default Input
