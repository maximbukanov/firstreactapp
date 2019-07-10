import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LazyInput from '../lazy-input';
import styles from './min-max-input.module.css';

//Deep equal и shallow equal
//Проверка по вложенным и верхним ключам при повторном рендере
export default class MinMaxInput extends PureComponent {
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

    lazyInput = React.createRef();

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
        return cnt;
    }

    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        let realCnt = this.set(isNaN(cnt) ? this.props.min : cnt);
        if (realCnt.toString() !== e.target.value) {
            this.lazyInput.current.setValue(realCnt);
        }
    }

    render() {
        return (
            <div className="input-group">
                <span className="input-group-btn">
                    <button className={"btn btn-danger " + styles.btnLeft} onClick={this.decrease}>-</button>
                </span>
                <LazyInput
                    nativeProps={{ type: 'text', className: 'form-control' }}
                    value={this.props.cnt}
                    onChange={this.onChange}
                    ref={this.lazyInput}
                />
                <span className="input-group-btn">
                    <button className={"btn btn-success " + styles.btnRight} onClick={this.increase}>+</button>
                </span>
            </div>
        );
    }
}