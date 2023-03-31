import {logIn, logOut} from "../actions";

const user = JSON.parse(localStorage.getItem("user"));

const defaultState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

export const loginReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case logIn:
            return {
                ...state,
                user : action.payload,
                isLoggedIn: true
            }
        case logOut:
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

export const logInAction = (payload) => ({type:logIn, payload})
export const logOutAction = () => ({type:logOut})