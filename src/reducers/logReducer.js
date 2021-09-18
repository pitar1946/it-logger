import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  FILTER_LOGS,
  CLEAR_FILTER_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../constants';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
  filteredLogs: null,
};

export const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_LOGS:
      return {
        ...state,
        filteredLogs: state.logs.filter((log) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return log.tech.match(regex) || log.message.match(regex);
        }),
      };
    case CLEAR_FILTER_LOGS:
      return {
        ...state,
        filteredLogs: null,
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
