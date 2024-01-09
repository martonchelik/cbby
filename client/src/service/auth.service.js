import {logInAction, logOutAction} from "../store/reducers/loginReducer";


export const loginServ = (username) => {

    const redir = () => {
        window.location.assign('http://localhost:3000/Search')
    }
    return function (dispatch){

        const logIn = (callback) => {
            setTimeout(()=>{
                dispatch(logInAction(username));
                callback();
            },3000);
        }
        logIn(redir);
    };
};

export const logoutServ = () => {
    const refresh = () =>{
        window.location.reload();
    }
    return function (dispatch){
        const logOut = (callback) => {
            setTimeout(()=>{
                dispatch(logOutAction());
                callback();
            },3000);
        }
        logOut(refresh)
    };
};
