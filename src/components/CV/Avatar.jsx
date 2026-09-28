import { avatar } from '../data/myCv'

function Avatar() {

    return (
        <img className="cv-avatar" src={avatar.avatar} alt="avatar" />
    )
}

export default Avatar