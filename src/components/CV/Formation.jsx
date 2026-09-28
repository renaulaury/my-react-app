function Formation({dateTr, tr, school}) {

    return (
            <li className="cv-item">
                <span className="cv-date">{dateTr}</span>
                <strong className="cv-title">{tr}</strong>
                <span className="cv-place">{school}</span>
            </li>
    )

}

export default Formation
