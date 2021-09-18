import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = () => {
  const { techs, loading } = useSelector((state) => state.tech);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechs());
  }, [dispatch]);

  return (
    !loading &&
    techs !== null &&
    techs.map((tech) => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

export default TechSelectOptions;
