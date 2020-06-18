import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addItem} from '../../action'
import itemList from '../../reducers/itemList';

export default function AddUpdate() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.itemList);
  
    const [listState, setState] = React.useState({
        itemName: "",
        itemType: "",
        itemNote:"",
        itemImage:"",
        itemQty:"",
        itemPrice:""
    
      })

      const handleSubmit = (e)=> {
        dispatch(addItem(listState))
        console.log('handling form')
        
        e.preventDefault()
    }

      const handleChange = (evt)=>{
        
        const value = evt.target.value;
      setState({
        ...listState,
        [evt.target.name]: value
      });
    
    }
    return (

        <div className="FormTemplate">
            <div className="formTitle">Add / Edit Product</div>
            <form  onSubmit={(event)=> handleSubmit(event)}>

            
            <div className="formGroup"> 
                <label>Item Name</label>
                <input type="text" name="itemName" value={listState.itemName} onChange={handleChange}/>
                </div>

                <div className="formGroup">
                <label> Type</label>
                <select name="itemType"  onChange={handleChange}>
                    <option value="thushi">Thushi</option>
                    <option value="nath">Nath</option>
                    <option value="earring">Earring</option>
                    <option value="ring">Ring</option>
                    <option value="bangles">Bangle</option>
                </select>
                </div>

                <div className="formGroup">
                <label>Note</label>
                <input type="text" name="itemNote" value={listState.itemNote} onChange={handleChange}/>
                </div>
                <div className="formGroup">
                <label>Price</label>
                <input type="number" name="itemPrice" value={listState.itemPrice} onChange={handleChange}/>
                </div>
                <div className="formGroup">
                <label>Ouantity</label>
                <input type="number" name="itemQty" value={listState.itemQty} onChange={handleChange}/>
                </div>
                <div className="formGroup">
                <label>Image name</label>
                <input type="text" name="itemImage" value={listState.itemImage} onChange={handleChange}/>
                </div>
                <div className="button_container">
                <button type="submit">ADD / SAVE ITEM</button> &nbsp;
                <button type="reset">CLEAR</button>
                </div>
                
            </form>

    {/* {items.map(item => <li>{item.itemName} {item.itemType}</li>)} */}
        </div>
    )
}


