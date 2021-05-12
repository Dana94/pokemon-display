
import { useContext } from 'react';

import {DataContext} from '../../../context/data-context';

import './Profile.css';

const Profile = () => {

    const dataContext = useContext(DataContext);

    return (
        <div className="Profile">
            <div className="Info">
                <h1>{dataContext.pokemon.name}</h1>
                <p>#ID</p>
                <p>develop trick doctor blow clothes hearing flew record dear center friendly brick should happen search page sell current season spring tank color signal disappear</p>
                <p>Sex Ratio:</p>
            </div>

            <div className="Img"></div>

        </div>
    )
}

export default Profile;
