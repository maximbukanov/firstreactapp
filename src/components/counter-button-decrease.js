import React, { useState } from 'react';

export default function CounterButtonDecrease(props) {
    const { counter, counterSetter } = props;

    const decrease = (e) => {
        e.preventDefault();
        counterSetter(counter - 1);
    }
    return (
        <button onClick={decrease}>-</button>
    )
}