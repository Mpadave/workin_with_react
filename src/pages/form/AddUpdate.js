import React from 'react'

export default function AddUpdate() {
    return (
        <div>
            <form>
                <legend>Product Form</legend>
                <div>
                <label>Item Name</label>
                <input type="text"/>
                </div>
                <div>
                <label> Type</label>
                <select>
                    <option>Thushi</option>
                    <option>Nath</option>
                    <option>Earring</option>
                    <option>Ring</option>
                    <option>Bangle</option>
                </select>
                </div>
                <div>
                <label>Note</label>
                <input type="text"/>
                </div>
                <div>
                <label>Image name</label>
                <input type="text"/>
                </div>
                <button type="submit">ADD / SAVE ITEM</button>
                <button type="reset">CLEAR</button>
            </form>
        </div>
    )
}
