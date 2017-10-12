import React, {Component} from 'react';

class Form extends Component {
    state = {
        userName: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event from submit: ', this.state.userName);
        this.setState(()=>{
            return {userName:''}
        });

    }

    handleChange = (event) => {
        this.setState(
                 {userName: event.target.value}
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    placeholder="Github Username" required/>
                <button type="submit">Add card</button>
            </form>
        )
    }
}

export default Form;