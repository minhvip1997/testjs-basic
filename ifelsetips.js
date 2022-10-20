
// const reasonPraseCode = new Map([
//     ['100', 'Continue'],
//     ['101', 'Switching Protocols'],
//     ['102', 'Processing'],
//     ['103', 'Early Hints'],
//     ['200', 'Ok'],
//     ['201', 'Created'],
//     ['202', 'Accepted'],
//     ['203', 'Non-authoritative Information'],
//     ['204', 'No content'],
//     ['default', 'No code'],
// ])

// const returnReasonPhraseCode = code => {
//     console.log(code);
//     console.log(reasonPraseCode.get(code) || reasonPraseCode.get('default'));
// }
// returnReasonPhraseCode('200')
// const HTTP = {
//     '100': 'Continue',
//     '101': 'Switching Protocols',
//     '102': 'Processing',
//     '103': 'Early Hints',
//     '200': 'Ok',
//     '201': 'Created',
//     '202': 'Accepted',
//     '203': 'Non-authoritative Information',
//     '204': 'No content',
//     'default': 'No code',
// }

// const returnHttpCode = status => {
//     console.log(HTTP[status] || HTTP['default']);
// }
// returnHttpCode()

// const isOldEnough = user => {
//     return user?.age ?? 0 > 30;
// }

// const AGE_REQUIREMENT = 30;
// const isOldEnough = user => {
//     return user?.age ?? 0 > AGE_REQUIREMENT;
// }

// SOLID nen tach ra lam 2 ham khac nhau
// const validateCreate = (create, isRobo) => {
//     if (isRobo) {
//         //...todo
//     } else {
//         //...todo
//     }
// }


// const validateHuman = user => {
//     //...todo
// }


// const validateCreate = create => {
//     //...todo
// }

// lv1
// if (user.age > 30 && user.name === 'cr7' && user.blog === 'anonystick.com') {

// }
// lv2
// const isOk = user.age > 30 && user.name === 'cr7' && user.blog === 'anonystick.com';

// if (isOk) {
//     //...todo
// }

// const isOk = user => {
//     return (
//         user.age > 30 &&
//         user.name === 'cr7' &&
//         user.blog === 'anonystick.com'
//     )
// }

// if (isOk(user)) {

// }

