import Button from './components/BtnClick/Button'
import Details from './components/Details/Details'
import Students from './components/Details/Students'
import './App.css'

function City() {
  const city = "New York"

  return <p>Une grande ville : {city}</p>
}

function App() {
  const firstName = "Laury"

  const students = [
    { id: 1, name: "R", firstName: "Lily", avatar: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Lily", campus: "Là bas", favoriteLanguage: "php", isFromRi7: true },
    { id: 2, name: "D", firstName: "Jean", avatar: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Jean", campus: "Ici", favoriteLanguage: "node", isFromRi7: true },
    { id: 3, name: "D", firstName: "David", avatar: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=David", campus: "Ici", favoriteLanguage: "node", isFromRi7: false },
  ]

  return (
    <>
      <section id="center">
        <div>
          <h1>Hello Ri7</h1>
          <p>Je m'appelle {firstName}</p>
          <City />
          <Details />
          <Button />
        </div>
      </section>

      {students.map((student) => (
        <Students
          key={student.id}
          name={student.name}
          firstName={student.firstName}
          avatar={student.avatar}
          campus={student.campus}
          favoriteLanguage={student.favoriteLanguage}
          isFromRi7={student.isFromRi7}
        />
      ))}

      <Students
        name="M"
        firstName="Sara"
        avatar="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Sara"
        campus="Metz"
        favoriteLanguage="Python"
        isFromRi7
      />
    </>
  )
}

export default App
