import Input from './Input'
import { useState } from 'react'
import './Register.css'

function Register() {
  const [civility, setCivility] = useState("")
  const [name, setName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [codePostal, setCodePostal] = useState("")
  const [city, setCity] = useState("")
  const [showModal, setShowModal] = useState(false) //Modale cachée par défaut

  return (
    <div className="register">
      <form className="register-form">
        <h2>Inscription</h2>

        <label>
          <input type="radio" name="civility" value="M." onChange={(e) => setCivility(e.target.value)} /> M.
        </label>
        <label>
          <input type="radio" name="civility" value="Mme" onChange={(e) => setCivility(e.target.value)} /> Mme
        </label>

        <Input label="Nom" type="text" onChange={(e) => setName(e.target.value)} />
        <Input label="Prénom" type="text" onChange={(e) => setFirstName(e.target.value)} />
        <Input label="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
        <Input label="Date de naissance" type="date" onChange={(e) => setBirthDate(e.target.value)} />
        <Input label="Code Postal" type="text" onChange={(e) => setCodePostal(e.target.value)} />
        <Input label="Ville" type="text" onChange={(e) => setCity(e.target.value)} />

        <button type="button" onClick={() => setShowModal(true)}>Valider</button>
      </form>

    {/* Modale */}
      {showModal && (
        <div className="register-result">
          <h2>Résultat</h2>
          <p><span>Civilité</span>{civility}</p>
          <p><span>Nom</span>{name}</p>
          <p><span>Prénom</span>{firstName}</p>
          <p><span>Email</span>{email}</p>
          <p><span>Date de naissance</span>{birthDate}</p>
          <p><span>Code Postal</span>{codePostal}</p>
          <p><span>Ville</span>{city}</p>
          <button type="button" onClick={() => setShowModal(false)}>Fermer</button>
        </div>
      )}
    </div>
  )
}

export default Register