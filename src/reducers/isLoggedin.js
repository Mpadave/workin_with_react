const isLoggedReducer = (state = true,action) =>{

    switch(action.type){
        case 'SIGN_OUT': 
            return state = false;
        case 'SIGN_IN': 
            return state = true;    
        default:
            return state;
    }

}

export default isLoggedReducer