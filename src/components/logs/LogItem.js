import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteLog } from '../../actions/logActions';
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
        <span className={`${log.attention ? 'red-text' : 'blue-text'}`}>
          {log.message}
        </span>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <span className='secondary-content'>
          <i
            className='material-icons grey-text'
            onClick={() => onDelete(log.id)}
          >
            delete
          </i>
        </span>
        <Link to={`/upd-log/${log.id}`} className='secondary-content'>
          <i className='material-icons grey-text edit-icon'>edit</i>
        </Link>
      </div>
    </li>
  );
};

export default LogItem;
