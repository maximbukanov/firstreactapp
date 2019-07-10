import React, { Component } from 'react';

class ShopItemControls extends Component {
    render() {
        return (
            this.props.isInCart ?
                <button className="btn btn-danger" onClick={this.props.remove}>Remove from cart</button> :
                <button className="btn btn-success" onClick={this.props.add}>Add to cart</button>
        );
    }
}

export default ShopItemControls;