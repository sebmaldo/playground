import React from 'react';

export default (props) => {
    return (
        <div className={props.display ? '': 'hidden'}>{props.message}</div>
    );
};