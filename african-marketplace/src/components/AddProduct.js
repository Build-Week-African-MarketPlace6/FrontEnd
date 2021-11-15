import React, { useState } from 'react';
import AddForm from './AddForm';

function AddProduct() {
    const [ addItem, setAddItem ] = useState(false);
    const [ toBeAdded, setToBeAdded] = useState("")

    return(
        <div>

            <AddForm 
                addItem = { addItem }
                setToBeAdded = { setToBeAdded } 
                toBeAdded = { toBeAdded }
                setAddItem = { setAddItem }
            />
        </div>
    )
}

export default AddProduct