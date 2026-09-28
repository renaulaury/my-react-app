import Formation from './Formation'
import { formations } from '../data/myCv'

function Formations() {

    return (

        <ul className="cv-timeline">{formations.map((formation) => (
            <Formation
            key={formation.id}
            dateTr={formation.dateTr}
            tr={formation.tr}
            school={formation.school}
            />
        ))}
        </ul>
    )
}

export default Formations