import React, { Component } from 'react';
import MinMaxInput from '../min-max-input';

export default class extends Component {
    render() {
        const {
            products,
            changeCnt,
            removeProduct,
            cartItemsProvided,
            sendForm,
            formDone
        } = this.props;

        const productsRows = products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <MinMaxInput min={1}
                            max={product.rest}
                            cnt={product.current}
                            onChange={(cnt) => changeCnt(i, cnt, products)}
                        />
                    </td>
                    <td>{productSubtotal(product)}</td>
                    <td>
                        <button onClick={() => removeProduct(product.id)}>Remove</button>
                    </td>
                </tr>
            );
        });

        const productsTotal = products.reduce((sum, product) => {
            return sum + productSubtotal(product);
        }, 0);

        // const renderLayout = !formDone ?
        //     renderCartLayout(productsRows, productsTotal, sendForm) :
        //     renderCongratulationsLayout();

        // return (
        //     <div>{renderLayout}</div>
        // );

        return (
            <div>
                <h2>Cart</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                        </tr>
                        {productsRows}
                    </tbody>
                </table>
                <div>
                    <strong>Total: {productsTotal}</strong>
                </div>
                <div>
                    <button onClick={cartItemsProvided}>Send</button>
                </div>
            </div>
        );
    }
}

// function renderCartLayout(productsRows, productsTotal, sendForm) {
//     return (
//         <div>
//             <h2>Cart</h2>
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>Title</td>
//                         <td>Price</td>
//                         <td>Count</td>
//                         <td>Total</td>
//                     </tr>
//                     {productsRows}
//                 </tbody>
//             </table>
//             <div>
//                 <strong>Total: {productsTotal}</strong>
//             </div>
//             <div>
//                 <button onClick={sendForm}>Send</button>
//             </div>
//         </div>
//     );
// }

// function renderCongratulationsLayout() {
//     return (
//         <div>
//             <h2>Congratulations!</h2>
//             <p>Your order has been recieved!</p>
//         </div>
//     );
// }

//subtotal - подытог по каждому продукту
function productSubtotal(product) {
    return product.price * product.current;
}