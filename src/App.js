import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <MeetAll />
        </div>
      </div>

    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1> My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}> Reference to my profile </a>
    </div>
  )
}

function MeetAll() {
  return (
    <div>
      <SayFullName name="Luidgi" surname="Bros." link="https://vk.com" />
      <SayFullName name="Mario" surname="Bros." link="https://facebook.com" />
      <SayFullName name="Igor" surname="Gurikin" link="#" />
    </div>

  )
}

export default App;
