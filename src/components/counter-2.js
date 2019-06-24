import React, { useState } from 'react';
import CounterForm from './counter-form';

export default function CounterTwo(props) {
    const { counter, counterSetter, validator } = props;
    return (
        <div>
            <h2>Counter #2</h2>
            <CounterForm counter={counter}
                counterSetter={counterSetter}
                validator={validator}
            />
        </div>
    )
}