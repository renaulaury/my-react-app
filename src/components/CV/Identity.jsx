import { identity } from '../data/myCv'

function Identity() {

    return (
        <section>
            <ul>
                <li> Nom : {identity.name} </li>
                <li>Prénom : {identity.firstName} </li>
                <li>Téléphone : {identity.phoneNumber}</li>
            </ul>
        </section>
    )

}

export default Identity