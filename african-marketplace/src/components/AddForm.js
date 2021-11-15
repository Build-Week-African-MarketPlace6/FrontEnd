import React from 'react';
import { Link } from 'react-router-dom';

class AddForm extends React.Component {
    state = {
        itemData: {
            item: "",
            price: "", 
            description: "",
            id: ""
        }
    };

    handleChange = event => {
        this.setState({
            itemData: {
                ...this.state.itemData,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return(
            <div>

            </div>)
    }
}

export default AddForm;