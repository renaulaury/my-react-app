import { useState } from 'react'

export default function useToggle(initialValue = false) {
  // useState stocke la valeur du toggle
  const [value, setValue] = useState(initialValue)

  // Inverse la valeur
  function toggle() {
    setValue((current) => !current)
  }

  // valeur + méth pour la changer
  return [value, toggle]
}
