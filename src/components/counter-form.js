import React, { useState } from 'react';
import CounterButtonIncrease from './counter-button-increase';
import CounterButtonDecrease from './counter-button-decrease';
import CounterInput from './counter-input';

export default function CounterForm(props) {
    const { counter, counterSetter, validator } = props;
    return (
        <form>
            <fieldset>
                <div style={{ display: 'flex' }}>
                    <div>
                        <CounterButtonDecrease counter={counter} counterSetter={counterSetter} />
                    </div>
                    <div>
                        <label>Current iteration</label>
                        <CounterInput counter={counter} counterSetter={counterSetter} validator={validator} />
                    </div>
                    <div>
                        <CounterButtonIncrease counter={counter} counterSetter={counterSetter} />
                    </div>
                </div>
            </fieldset>
        </form>
    )
}