import React, { Component } from 'react';
import './Main.css';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    this.setState({
      tarefas: [...tarefas, novaTarefa],
    });
  };

  // updateHandler = (event, index) => {

  // };

  deleteHandler = (event, index) => {
    const { tarefas } = this.state;
    tarefas.splice(index, 1);

    this.setState({
      tarefas: [...tarefas],
    });
  };

  changeHandler = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.submitHandler} action="#" className="form">
          <input
            onChange={this.changeHandler}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit onClick={(event) => this.updateHandler(event, index)} className="update" />
                <FaWindowClose onClick={(event) => this.deleteHandler(event, index)} className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
