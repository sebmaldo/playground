import React, {Component} from 'react';

class Form extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Github Username" required/>
                <button type="submit">Add card</button>
            </form>
        )
    }
}

export default Form;