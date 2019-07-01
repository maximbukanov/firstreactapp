export function countProductSubtotal(product) {
    return product.price * product.current;
}
export function countProductsTotal(products) {
    return products.reduce((sum, product) => {
        return sum + countProductSubtotal(product);
    }, 0);
}