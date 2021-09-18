import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateLog, setCurrent } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

import M from 'materialize-css/dist/js/materialize.min.js';

export const EditLog = () => {
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
    }
  }, [dispatch, current]);

  const onSubmit = () => {
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
  };

  return (
    <div>
      <h4 className='log-heading'>Edit System Log</h4>
      <div className='row'>
        <div className='input-field'>
          <input
            type='text'
            name='message'
            value={message}
            autoComplete='off'
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Log Message'
          />
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
          Edit
        </button>
      </div>
    </div>
  );
};
export default EditLog;
