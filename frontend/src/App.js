import React from 'react';
import UserContext from './context/userContext';
import MainComponent from './components/mainComponent';
import Counter from './hooks/counter';
import MoviePage from './context/MoviePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Mukesh"}
    };
  }

  render() {
    return(
      <div className="root">
        <MainComponent />
        <Counter />
        <UserContext.Provider value={this.state.currentUser}>
          <MoviePage />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;