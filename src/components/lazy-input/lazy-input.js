import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LazyInput extends Component {
    //По умолчанию ленивый инпут может принимать onChange от родителя и nativeProps
    static defaultProps = {
        onChange: function (e) { },
        nativeProps: {}
    }

    //В PropTypes свойство value может быть любого типа, но в большинстве случаев это будет string 
    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object
    }

    //Задаем прямую ссылку на DOM-элемент, чтобы исключить частый вызов componentDidUpdate
    nativeInput = React.createRef();

    setValue(value) {
        this.nativeInput.current.value = value;
    }

    componentDidUpdate(prevProps, prevState) {
        let inp = this.nativeInput.current;

        if (prevProps.value !== this.props.value ||
            this.props.value != inp.value
        ) {
            inp.value = this.props.value;
        }
    }

    //Вызываем onChange от пропсов ленивого инпута
    checkChange = (e) => {
        if (this.props.value.toString() !== e.target.value) {
            this.props.onChange(e);
        }
    }

    checkEnterKey = (e) => {
        if (e.keyCode === 13) {
            this.checkChange(e);
        }
    }

    render() {
        return (
            <input {...this.props.nativeProps}
                defaultValue={this.props.value}
                onBlur={this.checkChange}
                onKeyUp={this.checkEnterKey}
                ref={this.nativeInput}
            />
        );
    }
}