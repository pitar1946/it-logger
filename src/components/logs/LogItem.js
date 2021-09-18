import React from 'react';
import { useDispatch } from 'react-redux';
import Moment from 'react-moment';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteLog(id));
    M.toast({ html: 'Log deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => dispatch(setCurrent(log))}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i
            className='material-icons grey-text'
            onClick={() => onDelete(log.id)}
          >
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

export default LogItem;
