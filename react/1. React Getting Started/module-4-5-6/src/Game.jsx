import React, {Component} from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import Grid from 'material-ui/Grid'

class Game extends Component {

    render(){
        return (
            <div>
                <h1>Play Nine</h1>
                <hr/>
                <Grid container direction='row' align='center' justify='space-around'>
                    <Stars />
                    <Button />
                    <Answer />
                </Grid>
                <br/>
                <Numbers />


            </div>
        )
    }
}

export default Game;