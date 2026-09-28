function Students({ name, firstName, avatar, campus, favoriteLanguage, isFromRi7 }) {
  return (
    <section>
      <img className="student-avatar" src={avatar} alt={firstName} />
      <ul>
        <li>{firstName} {name}</li>
        <li>Campus : {campus}</li>
           <li>Langage préféré : {favoriteLanguage}</li>
        {isFromRi7 && <li>Étudiant(e) Ri7</li>}
      </ul>
      <button onClick={() => alert("Bonjour je m'appelle " + firstName)}>
        Me présenter
      </button>
    </section>
  )
}

export default Students