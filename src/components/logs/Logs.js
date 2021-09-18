import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../layout/Preloader';
import LogsItem from './LogItem';
import AddBtn from '../layout/AddBtn';
import { getLogs } from '../../actions/logActions';

const Logs = () => {
  const { logs, loading, filteredLogs } = useSelector((state) => state.log);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogs());
  }, [dispatch]);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>

        {filteredLogs !== null ? (
          filteredLogs.map((log) => {
            return <LogsItem key={log.id} log={log} />;
          })
        ) : !loading && logs.length === 0 ? (
          <p>No logs to show ....</p>
        ) : (
          logs.map((log) => <LogsItem key={log.id} log={log} />)
        )}
      </ul>
      <AddBtn />
    </>
  );
};

export default Logs;
