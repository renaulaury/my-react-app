import Identity from './components/CV/Identity'
import Avatar from './components/CV/Avatar'
import Experiences from './components/CV/Experiences'
import Formations from './components/CV/Formations'
import './App.css'

function App() {
  return (
    <main>
      <section>
        <h2>Moi !</h2>
        <Avatar />
        <Identity />
      </section>

      <section>
        <h2>Mes expériences</h2>
        <Experiences />
      </section>

      <section>
        <h2>Mes formations</h2>
        <Formations />
      </section>
    </main>
  )
}

export default App
