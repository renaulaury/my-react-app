import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import frFlag from '../assets/flags/fr.svg'
import gbFlag from '../assets/flags/gb.svg'

// Langues du header, avec leur drapeau
const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: frFlag },
  { code: 'en', label: 'English', flag: gbFlag },
]

export default function LanguageSwitcher() {
  const { language, setLanguage, texts } = useContext(LanguageContext)

  return (
    <div className="lang-switcher" role="group" aria-label={texts.nav.language}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={lang.code === language ? 'flag active' : 'flag'}
          onClick={() => setLanguage(lang.code)}
          aria-pressed={lang.code === language}
          title={lang.label}
        >
          <img src={lang.flag} alt={lang.label} />
        </button>
      ))}
    </div>
  )
}
