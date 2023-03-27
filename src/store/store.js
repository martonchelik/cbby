import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {loginReducer} from "./reducers/loginReducer";
import thunk from "redux-thunk";

const persistedState = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {}

export const store = createStore(
    loginReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(()=>{
    localStorage.setItem('user', JSON.stringify(store.getState()))
})