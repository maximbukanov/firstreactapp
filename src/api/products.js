import makeRequest from './helpers/make-request';

function all() {
    console.log('LOAD PRODUCTS...');
    return makeRequest('products/all.php');
}

export { all };