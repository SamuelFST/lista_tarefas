import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  changeHandler = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#">
          <input onChange={this.changeHandler} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
