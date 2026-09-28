import Experience from './Experience'
import { experiences } from '../data/myCv'

function Experiences() {

    return (

        <ul className="cv-timeline">{experiences.map((experience) => (
            <Experience
            key={experience.id}
            dateXp={experience.dateXp}
            xp={experience.xp}
            company={experience.company}
            />
        ))}
        </ul>
    )
}

export default Experiences