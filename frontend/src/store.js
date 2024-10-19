import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userloginReducer, userRegisterReducer } from './reducers/userReducer';
import { noteCreateReducer, noteDeleteReducer, noteListReducer, noteUpdateReducer } from './reducers/notesReducer';

const reducer = combineReducers({
    // this will contain our reducer
    userLogin: userloginReducer,
    userRegister: userRegisterReducer,
    noteList : noteListReducer,
    noteCreate:noteCreateReducer,
    noteUpdate:noteUpdateReducer,
    noteDelete:noteDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
