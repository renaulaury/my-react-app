import Input from './Input'
import { useState } from 'react'
import Modal from './Modal'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../schemas/registerSchema'
import './Register.css'

const fields = [
  { name: "civility", label: "Civilité", type: "radio", options: ["M.", "Mme"] },
  { name: "name", label: "Nom", type: "text" },
  { name: "firstName", label: "Prénom", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "birthDate", label: "Date de naissance", type: "date" },
  { name: "codePostal", label: "Code Postal", type: "text" },
  { name: "city", label: "Ville", type: "text" },
]

function Register() {
  const [showModal, setShowModal] = useState(false) //Modale cachée par défaut
  const [formData, setFormData] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
      } = useForm({ // Crée form sous objet
        resolver: zodResolver(registerSchema),
      })

  function onSubmit(data) {
    setFormData(data)
    setShowModal(true)
  }

  return (
    <div className="register">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Inscription</h2>
        
        {fields.map((field) => (
          <Input
            key={field.name}
            label={field.label}
            type={field.type}
            options={field.options}
            {...register(field.name)}
            error={errors[field.name]?.message}
          />
        ))}

        {/* Validation / Modale */}
        <button type="submit">Valider</button>
      </form>

    {/* Modale */}
      {showModal && (
        <Modal {...formData} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default Register