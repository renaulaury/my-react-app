function Experience({ dateXp, xp, company}) {
  return (
    <li className="cv-item">
        <span className="cv-date">{dateXp}</span>
        <strong className="cv-title">{xp}</strong>
        <span className="cv-place">{company}</span>
    </li>
  )
}

export default Experience
