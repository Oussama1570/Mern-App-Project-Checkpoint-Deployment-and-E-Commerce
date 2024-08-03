// import

import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, SUCC_USER, CLEAR_ERRORS } from "../ActionsTypes/user";


// initState
 const initState = {
    user: null,
    loadUser: false,
    errors: [],
    isAuth: false,

 };


// pure function
const userReducer = (state = initState, {type, payload}) => {
    switch (type) {
         case LOAD_USER:
             return {...state, loadUser: true};
         case REGISTER_USER:
            localStorage.setItem("token", playload.token);
               return {...state, loadUser:false, user: playload.user, isAuth: true};
         case CURRENT_USER:
               return {...state, user:payload, loadUser: false, isAuth: true};  
         case LOGOUT_USER:
             localStorage.removeItem("token") ;
               return { user: null, loadUser: false, errors:null, isAuth: false} ;  
         case FAIL_USER: 
           return {...state, loadUser: false, errors: payload};
           // {...state, loadUser: false, errors: payload}; //
                 
          default:
             return state; 
    }
};

export default userReducer;