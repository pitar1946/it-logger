import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addLog, updateLog, setCurrent } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

import M from 'materialize-css/dist/js/materialize.min.js';

export const AddEditLog = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const { current } = useSelector((state) => state.log);

  useEffect(() => {
    if (id) {
      dispatch(setCurrent(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    } else {
      setMessage('');
      setTech('');
      setAttention('');
    }
  }, [dispatch, current]);

  const onSubmit = () => {
    if (!id || !current) {
      if (message === '' || tech === '') {
        M.toast({ html: 'Please enter a message and tech' });
      } else {
        let newLog = {
          message,
          attention,
          tech,
          date: new Date(),
        };
        dispatch(addLog(newLog));
        history.push('/');

        M.toast({ html: `Log added by ${tech}` });
        setAttention(false);
        setTech('');
        setMessage('');
      }
    } else {
      if (message === '' || tech === '') {
        M.toast({ html: 'Please enter a message and tech' });
      } else {
        let updLog = {
          id,
          message,
          attention,
          tech,
          date: new Date(),
        };
        dispatch(updateLog(updLog, id));
        history.push('/');

        M.toast({ html: `Log updated by ${tech}` });
        setAttention(false);
        setTech('');
        setMessage('');
      }
    }
  };

  return (
    <div>
      <h4 className='log-heading'>
        {id || current ? 'Update System log' : 'Enter System Log'}
      </h4>
      <div className='row'>
        <div className='input-field'>
          <input
            type='text'
            name='message'
            value={message}
            autoComplete='off'
            onChange={(e) => setMessage(e.target.value)}
          />
          <label htmlFor='message' className='active'>
            Log Message
          </label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field'>
          <select
            name='tech'
            value={tech}
            className='browser-default'
            onChange={(e) => setTech(e.target.value)}
          >
            <option value='' disabled>
              Select Technician
            </option>
            <TechSelectOptions />
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='input-field'>
          <p>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                checked={attention}
                value={attention}
                onChange={(e) => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </p>
        </div>
      </div>
      <div className='row'>
        <button
          onClick={onSubmit}
          className='waves-effect blue waves-light btn btn-block'
        >
          {id || current ? 'update log' : 'enter new log'}
        </button>
      </div>
    </div>
  );
};
export default AddEditLog;
