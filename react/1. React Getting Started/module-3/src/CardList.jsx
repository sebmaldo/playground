import React from 'react';
import Card from './Card';

export default (props) => {
    return (
        <div>
            {
                props.cards.map((card, i) => {
                    return <Card key={i} {...card}/>
                })
            }
        </div>
    );
};