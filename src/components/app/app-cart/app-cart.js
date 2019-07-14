import React from 'react';

export default function appCart(props) {
    console.log('todo: appCart: propTypes / appCartTotal');
    console.log('todo: appCart: propTypes / appCartCnt');
    return (
        <>
            <button className="btn btn-primary">{props.appCartTotal}</button>
            <button className="btn btn-secondary">{props.appCartCnt}</button>
        </>
    );
}