import React from 'react';
import Star from 'material-ui-icons/Star';
import Grid from 'material-ui/Grid';


export default () => {
    return (
        <Grid item xs={5}>
            <Star />
            <Star />
            <Star />
            <Star />
        </Grid>
    );
};