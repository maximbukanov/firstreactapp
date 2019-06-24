import React, { useState } from 'react';
import CounterOne from './components/counter-1';
import CounterTwo from './components/counter-2';
import CounterMinMax from './components/counter-min-max';

export default function App(props) {
    const [counter, dispatcherCounter] = useState(0);
    const [min, minSetter] = useState(0);
    const [max, maxSetter] = useState(100);

    const validateValue = (value) => {
        const validated = new Number(value);
        return !isNaN(validated.valueOf())
            ? validated.valueOf() : 0;
    }

    const counterSetter = (counter) => {
        if (counter >= min && counter <= max) {
            console.log('case 1:', 'counter >= min && counter <= max');
            return dispatcherCounter(counter);
        } else if (counter < min || counter > max) {
            console.log('case 2:', 'counter < min || counter > max');
            return dispatcherCounter(min);
        }
    }

    return (
        <div>
            <h1>Hello, world!</h1>
            <CounterMinMax
                counter={counter}
                min={min}
                max={max}
                dispatchers={{
                    counterSetter, minSetter, maxSetter
                }}
                validator={validateValue}
            />
            <CounterOne
                counter={counter}
                counterSetter={counterSetter}
            />
            <CounterTwo
                counter={counter}
                counterSetter={counterSetter}
                validator={validateValue}
            />
        </div>
    );
}