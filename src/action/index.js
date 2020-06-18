export const loggedout =() => {
    return {
        type:'SIGN_OUT'
    }
}

export const loggedin =() => {
    return {
        type:'SIGN_IN'
    }
}


export const addItem = (listState) => {
    //console.log(listState)
    return {
        type:'ADD_ITEM',
        payload:listState
        
    }
}

