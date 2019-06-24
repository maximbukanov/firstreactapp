import React, { useState } from 'react';
import CounterButtonIncrease from './counter-button-increase';
import CounterButtonDecrease from './counter-button-decrease';

export default function CounterOne(props) {
    const { counter, counterSetter } = props;
    return (
        <div>
            <h2>Counter #1</h2>
            <div style={{ display: 'flex' }}>
                <div>
                    <CounterButtonDecrease counter={counter} counterSetter={counterSetter} />
                </div>
                <div>
                    <span>Current value: <strong>{counter}</strong></span>
                </div>
                <div>
                    <CounterButtonIncrease counter={counter} counterSetter={counterSetter} />
                </div>
            </div>
        </div>
    )
}