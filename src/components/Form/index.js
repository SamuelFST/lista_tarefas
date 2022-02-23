import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import { FaPlus } from 'react-icons/fa';

export default function Form({ submitHandler, changeHandler, novaTarefa }) {
  return (
    <form onSubmit={submitHandler} action="#" className="form">
      <input
        onChange={changeHandler}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
