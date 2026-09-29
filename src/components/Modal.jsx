function Modal({ civility, name, firstName, email, birthDate, codePostal, city, onClose }) {
  return (
    <div className="register-result">
      <h2>Résultat</h2>
      <p><span>Civilité</span>{civility}</p>
      <p><span>Nom</span>{name}</p>
      <p><span>Prénom</span>{firstName}</p>
      <p><span>Email</span>{email}</p>
      <p><span>Date de naissance</span>{birthDate}</p>
      <p><span>Code Postal</span>{codePostal}</p>
      <p><span>Ville</span>{city}</p>
      <button type="button" onClick={onClose}>Fermer</button>
    </div>
  )
}

export default Modal
