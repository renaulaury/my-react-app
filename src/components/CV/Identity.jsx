import { identity } from '../data/myCv'

function Identity() {

    return (
        <section className="cv-identity">
            <p className="cv-name">{identity.firstName} {identity.name}</p>
            <ul>
                <li><span className="cv-label">Nom</span> {identity.name}</li>
                <li><span className="cv-label">Prénom</span> {identity.firstName}</li>
                <li><span className="cv-label">Téléphone</span> {identity.phoneNumber}</li>
            </ul>
        </section>
    )

}

export default Identity
