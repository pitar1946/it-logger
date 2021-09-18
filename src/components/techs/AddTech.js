import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTech = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name' });
    }

    let newTech = {
      firstName,
      lastName,
    };
    dispatch(addTech(newTech));
    history.push('/techs');

    M.toast({ html: `${firstName} ${lastName} was added as a tech` });

    // Clear Fields
    setFirstName('');
    setLastName('');
  };

  return (
    <>
      <h4 className='tech-heading'>New Technician</h4>
      <div className='row'>
        <div className='input-field'>
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor='firstName' className='active'>
            First Name
          </label>
        </div>
      </div>

      <div className='row'>
        <div className='input-field'>
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor='lastName' className='active'>
            Last Name
          </label>
        </div>
      </div>
      <div>
        <button
          onClick={onSubmit}
          className='waves-effect blue waves-light btn btn-block'
        >
          Add tech
        </button>
      </div>
    </>
  );
};

export default AddTech;
