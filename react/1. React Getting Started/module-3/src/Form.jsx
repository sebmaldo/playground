import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    state = {
        userName: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event from submit: ', this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then((resp)=> {
                this.props.onSubmit(resp.data);
                console.log(resp);
            })
            .catch(()=>{
                this.props.onError();
            });
        this.setState(()=>{
            return {userName:''}
        });
    }

    handleChange = (event) => {
        this.props.onChange();
        this.setState(
                 {userName: event.target.value}
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{marginLeft: 10}}>
                <input type="text"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    placeholder="Github Username" required/>
                <button type="submit" style={{marginLeft: 10}}>Add card</button>
            </form>
        )
    }
}

export default Form;