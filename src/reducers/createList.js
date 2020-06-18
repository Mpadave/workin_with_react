const initialState = {
    itemList : []
}

const GenrateList = (state = initialState,action) => {

    switch(action.type){
        case 'GEN_LIST': 
            return {
                ...state,
                itemName:action.payload.itemName,
                itemType:action.payload.itemType,
                itemNote:action.payload.itemNote,
                itemPrice:action.payload.itemPrice,
                itemQty:action.payload.itemQty,
                itemImage:action.payload.itemImage
            }
        default:
            return state;
    }

}