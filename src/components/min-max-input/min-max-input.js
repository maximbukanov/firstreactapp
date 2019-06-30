import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyInput from '../lazy-input';

export default class extends Component {
    //Принимает onChange от родителя
    static defaultProps = {
        onChange: function (cnt) { }
    }

    //Обязательно принять min, max, cnt
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    increase = () => {
        this.set(this.props.cnt + 1);
    }

    decrease = () => {
        this.set(this.props.cnt - 1);
    }

    //Вызвать onChange из пропсов
    set(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.props.onChange(cnt);
    }

    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    }

    render() {
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <LazyInput
                    nativeProps={{ type: 'text' }}
                    value={this.props.cnt}
                    onChange={this.onChange}
                />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}