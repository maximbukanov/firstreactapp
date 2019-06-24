import React, { useState } from 'react';

export default function CounterInput(props) {
    const { counter, counterSetter, validator } = props;
    const inputValueChange = (e) => {
        counterSetter(validator(e.target.value));
    }
    return (
        <input type="text" value={counter} onChange={inputValueChange}></input>
    )
}