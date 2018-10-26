import React, { Component } from 'react';
import '../Estilos/App.css';
//Componentes
import Navbar from './Navbar.js';
import ProfileContainer from './ProfileContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <ProfileContainer></ProfileContainer>
      </div>
    );
  }
}

export default App;
