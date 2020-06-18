
// const initialState = {
//     itemList:[]
// }

const itemList = (state = [],action) =>{

    switch(action.type){
        case 'ADD_ITEM': 
            return [
                ...state,
              {
                    
                    itemName:action.payload.itemName,
                    itemType:action.payload.itemType,
                    itemNote:action.payload.itemNote,
                    itemPrice:action.payload.itemPrice,
                    itemQty:action.payload.itemQty,
                    itemImage:action.payload.itemImage
                    }
                    
                ]
        default:
            return state;
    }

}

export default itemList