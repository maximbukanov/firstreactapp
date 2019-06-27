import React, { Component } from 'react';

export default class extends Component {
    //Принимает onClick из props, переданный от родителя
    render() {
        const { onClick } = this.props;
        return (
            <button onClick={onClick}>Remove</button>
        );
    }
}