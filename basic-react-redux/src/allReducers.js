import {combineReducers} from 'redux';
import userReducer from './UserDetails/reducerUserDetail';

const allReducer = combineReducers({
    users:userReducer
});

export default allReducer;