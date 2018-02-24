import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as firebase from "firebase";

import {GetAllItems} from "./firebase/database";



class App extends Component {

  constructor() {
    super();

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    GetAllItems()
    .then(snapshot => {
      console.log("RESULTADO", snapshot.val())
      this.setState({
        courses: snapshot.val()
      })
    })
    .catch(error => {
      console.error("ERRO", error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Existem {this.state.courses.length} cursos cadastrados.
        </p>
      </div>
    );
  }
}

export default App;
