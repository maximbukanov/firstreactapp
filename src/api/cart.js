import makeRequest from './helpers/make-request';

function load(token) {
    let url = 'cart/load.php';

    console.log('LOAD CART...');

    if (token !== null) {
        url += `?token=${token}`;
    }

    return makeRequest(url);
}

function add(token, id) {
    return makeRequest(`cart/add.php?token=${token}&id=${id}`);
}

function change(token, id, cnt) {
    return makeRequest(`cart/change.php?token=${token}&id=${id}&cnt=${cnt}`);
}

function remove(token, id) {
    return makeRequest(`cart/remove.php?token=${token}&id=${id}`);
}

function clean(token) {
    return makeRequest(`cart/clean.php?token=${token}`);
}

export { load, change, add, remove, clean };