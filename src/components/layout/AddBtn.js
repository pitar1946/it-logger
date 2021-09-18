import React from 'react';
import { Link } from 'react-router-dom';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <Link
        to='/techs'
        className='btn-floating btn-large red darken-2 modal-trigger'
      >
        <i className='large material-icons'>person</i>
      </Link>
      <Link
        to='/add-log'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </Link>
    </div>
  );
};

export default AddBtn;
