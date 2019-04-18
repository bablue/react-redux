import { combineReducers } from 'redux';
import userReducer from './UserDetails/reducerUserDetail';
import userClickedReducer from './UserDetails/reducerUserClicked'

const allReducer = combineReducers({
    users: userReducer,
    activeUser: userClickedReducer
});

export default allReducer;