import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTechs } from '../../actions/techActions';

import TechItem from './TechItem';

const TechListModal = () => {
  const { techs, loading } = useSelector((state) => state.tech);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechs());
  }, [dispatch]);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
