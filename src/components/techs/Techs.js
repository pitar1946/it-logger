import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import { Link } from 'react-router-dom';

import TechItem from './TechItem';

const Techs = () => {
  const { techs, loading } = useSelector((state) => state.tech);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechs());
  }, [dispatch]);
  return (
    <>
      <div className='row'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
      <div className='btn-wrapper'>
        <Link
          to='/add-tech'
          className='btn-floating btn-large darken-2 modal-trigger'
        >
          <i className='large red material-icons'>person_add</i>
        </Link>
      </div>
    </>
  );
};
export default Techs;
