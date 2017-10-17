import React from 'react';
import Card, {CardContent} from 'material-ui/Card';
import Grid from 'material-ui/Grid';

export default (props) => {
    return (
        <Card >
            <CardContent>
                <Grid container direction='row' align='center' justify='center' spacing={24}>
                    <Grid item>1</Grid>
                    <Grid item>2</Grid>
                    <Grid item>3</Grid>
                    <Grid item>4</Grid>
                    <Grid item>5</Grid>
                    <Grid item>6</Grid>
                    <Grid item>7</Grid>
                    <Grid item>8</Grid>
                    <Grid item>9</Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};