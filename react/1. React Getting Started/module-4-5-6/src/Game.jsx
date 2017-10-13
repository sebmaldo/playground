import React, {Component} from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import 'react-bootstrap';

class Game extends Component {

    render(){
        return (
            <div>
                <h3>Play Nine</h3>
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>

            </div>
        )
    }
}

export default Game;