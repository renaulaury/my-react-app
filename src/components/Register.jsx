import Input from './Input'
import Modal from './Modal'
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

        {/* Civilité */}
        <Input type="radio" name="civility" label="Civilité" onChange={(e) => setCivility(e.target.value)} options={["M.", "Mme"]} />

        {/* Identité */}
        <Input label="Nom" type="text" onChange={(e) => setName(e.target.value)} />
        <Input label="Prénom" type="text" onChange={(e) => setFirstName(e.target.value)} />
        <Input label="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
        <Input label="Date de naissance" type="date" onChange={(e) => setBirthDate(e.target.value)} />
        <Input label="Code Postal" type="text" onChange={(e) => setCodePostal(e.target.value)} />
        <Input label="Ville" type="text" onChange={(e) => setCity(e.target.value)} />

        {/* Validation / Modale */}
        <button type="button" onClick={() => setShowModal(true)}>Valider</button>
      </form>

    {/* Modale */}
      {showModal && (
        <Modal
          civility={civility}
          name={name}
          firstName={firstName}
          email={email}
          birthDate={birthDate}
          codePostal={codePostal}
          city={city}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default Register