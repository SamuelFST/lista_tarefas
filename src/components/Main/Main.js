import React, { Component } from 'react';
import './Main.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import Form from '../Form';
import Tarefas from '../Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    if (index === -1) {
      this.setState({
        tarefas: [...tarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      tarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...tarefas],
        index: -1,
        novaTarefa: '',
      });
    }
  };

  updateHandler = (event, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

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

        <Form
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          updateHandler={this.updateHandler}
          deleteHandler={this.deleteHandler}
        />

      </div>
    );
  }
}
