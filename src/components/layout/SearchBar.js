import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterLogs, clearFilterLogs } from '../../actions/logActions';

const SearchBar = () => {
  const { filteredLogs } = useSelector((state) => state.log);
  const text = useRef('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    if (text.current.value !== '') {
      dispatch(filterLogs(e.target.value));
    } else {
      dispatch(clearFilterLogs());
    }
  };

  useEffect(() => {
    if (filteredLogs === null) {
      return text.current.value === '';
    }
  }, [filteredLogs]);

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs..'
              ref={text}
              onChange={onChange}
              autoComplete='off'
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
