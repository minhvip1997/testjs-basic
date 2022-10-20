$(document).ready(function () {

    // var origin1 = {
    //     minh: 'a',
    //     k1L: 'k',
    //     k2l: 'a',
    //     k3l: 'a',
    //     'asasa': 'aaa',
    //     'we': 'asasa',
    //     'po': 'sww'
    // }
    // console.log(origin1);
    // const count = Object.keys(origin1).length
    // for (let i = 0; i < count; i++) {
    //     console.log(Object.keys(origin1)[i]);
    //     Object.defineProperty(origin1, i,
    //         Object.getOwnPropertyDescriptor(origin1, Object.keys(origin1)[i]));
    //     delete origin1[Object.keys(origin1)[i]];
    // }
    var origin = [{
        'a+b+c+v': 5,
        't+p+o': 6,
        'q+w+e': 7
    }]
    for (let i = 0; i < origin.length; i++) {
        console.log(origin[i]);
        // console.log(Object.keys(origin[i]));
        var lengthobject = Object.keys(origin[i]).length;
        for (let j = 0; j < lengthobject; j++) {
            // console.log(Object.keys(origin[i])[j].split('+'));
            origin[Object.keys(origin[i])[j].split('+')] = Object.values(origin[i])[j];

            console.log(Object.keys(origin[i])[j]);
        }
    }
});