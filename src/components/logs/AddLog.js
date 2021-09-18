import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

import M from 'materialize-css/dist/js/materialize.min.js';

export const AddLog = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
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
  };

  return (
    <div>
      <h4 className='log-heading'>Enter System Log</h4>
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
          Enter
        </button>
      </div>
    </div>
  );
};
export default AddLog;
