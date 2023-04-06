import {LOG_IN, LOG_OUT} from "../actions";

const user = JSON.parse(localStorage.getItem("user"));

const defaultState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

export const loginReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                user : action.payload,
                isLoggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                user: null,
                isLoggedIn: false
            };
        default :
            return{
                ...state
            }
    }
}

export const logInAction = (payload) => ({type:LOG_IN, payload})
export const logOutAction = () => ({type:LOG_OUT})