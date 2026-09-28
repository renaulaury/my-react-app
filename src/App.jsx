import Identity from './components/CV/Identity'
import Avatar from './components/CV/Avatar'
import Experiences from './components/CV/Experiences'
import Formations from './components/CV/Formations'
import './App.css'
import './components/CV/CV.css'

function App() {
  return (
    <main className="cv">
      <section className="cv-header">
        <h2>Moi !</h2>
        <Avatar />
        <Identity />
      </section>

      <section className="cv-card">
        <h2>Mes expériences</h2>
        <Experiences />
      </section>

      <section className="cv-card">
        <h2>Mes formations</h2>
        <Formations />
      </section>
    </main>
  )
}

export default App
