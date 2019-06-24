import React, { useState } from 'react';

export default function CounterButtonIncrease(props) {
    const { counter, counterSetter } = props;

    const increase = (e) => {
        e.preventDefault();
        counterSetter(counter + 1);
    }
    return (
        <button onClick={increase}>+</button>
    )
}