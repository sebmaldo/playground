import React from 'react';
import Card from './Card';

export default (props) => {
    return (
        <div>
            {
                props.cards.map((card) => {
                    return <Card key={card.id} {...card}/>
                })
            }
        </div>
    );
};