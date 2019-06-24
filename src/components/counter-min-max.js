import React, { useState } from 'react';

export default function CounterMinMax(props) {
    const {
        counter,
        min,
        max,
        dispatchers: {
            counterSetter,
            minSetter,
            maxSetter
        },
        validator } = props;
    const [newMin, newDispatcherMin] = useState(min);
    const [newMax, newDispatcherMax] = useState(max);
    const onChangeMin = (e) => {
        return newDispatcherMin(validator(e.target.value));
    }
    const onChangeMax = (e) => {
        return newDispatcherMax(validator(e.target.value));
    }
    const applyMinAndMax = (e) => {
        e.preventDefault();
        const newMinValidated = validator(newMin);
        const newMaxValidated = validator(newMax);
        if (newMinValidated > newMaxValidated || newMaxValidated < newMinValidated) {
            alert('Incorrect "Min" and "Max" given!');
            return false;
        }
        minSetter(newMinValidated);
        maxSetter(newMaxValidated);
        counterSetter(counter);
    }
    return (
        <form>
            <fieldset>
                <div>
                    <label>Min:</label>
                    <input type="text" value={newMin} onChange={onChangeMin}></input>
                    <i>current: {min}</i>
                </div>
                <div>
                    <label>Max:</label>
                    <input type="text" value={newMax} onChange={onChangeMax}></input>
                    <i>current: {max}</i>
                </div>
                <div>
                    <button type="submit" onClick={applyMinAndMax}>Submit</button>
                </div>
            </fieldset>
        </form>
    );
}