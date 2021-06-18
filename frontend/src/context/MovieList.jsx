import React, { Component } from 'react';
import UserContext from './userContext';
import MovieRow from './MovieRow';

class MovieList extends Component {
    // Accessing Consumer props outside render method:
    // static contextType = UserContext;

    render() { 
        return(
           <UserContext.Consumer>
               {currentUser => {
                   return(
                       <div className="content">
                           <h1>(Context using Class Component) {currentUser.name}</h1>
                           <MovieRow />
                       </div>
                   );
               }}
           </UserContext.Consumer>
        );
    }
}


// OR 
// Accessing Consumer props outside render method:
// MovieList.contextType = UserContext;
 
export default MovieList;