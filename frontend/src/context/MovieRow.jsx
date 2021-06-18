import {useContext} from 'react';
import UserContext from './userContext';

function MovieRow(props) {
    const currentUser = useContext(UserContext);
    return(
        <div className="context">
            <h1>(Context using Functional Component) {currentUser.name}</h1>
        </div>
    );
}

export default MovieRow;