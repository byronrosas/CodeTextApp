import { createStore, combineReducers } from 'redux';
import textReducer from './reducers/textReducer';

const reducer = combineReducers({
    textReducer,    
});

const store = createStore( reducer );

export default store;