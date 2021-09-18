import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { id, firstName, lastName } }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTech(id));
    M.toast({ html: 'Technician deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <span className='secondary-content'>
          <i className='material-icons grey-text' onClick={onDelete}>
            delete
          </i>
        </span>
      </div>
    </li>
  );
};

export default TechItem;
