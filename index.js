
function getIP(json) {
    document.write("My public IP address is: ", json.ip);
}
// const fetchData = async (id) => {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
//     let data = await response.json();
//     return data;
// }
// const fetchData2 = async (id) => {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/2`)
//     let data = await response.json();
//     return data;
// }
// const fetchData3 = async (id) => {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/3`)
//     let data = await response.json();
//     return data;
// }


// function navigate() {
//     const array = []
//     fetchData(1).then(data => {
//         array.push(data)

//         let search = array[0].find((item) => item?.id == 1)
//         if (false) {

//         } else {
//             fetchData2(2).then(data => {
//                 console.log('data2', data);
//                 if (data) {

//                 } else {
//                     fetchData3(2).then(data => {
//                         if (data) {

//                         } else {

//                         }
//                     })
//                 }
//             })
//         }
//     });

// }

// navigate();
// var today = new Date('2015-02-10T10:12:50.5000z');
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;

// $(function () {
//     // $("#dialog").dialog();
//     $('#dialog').dialog({
//         title: 'minh',
//         autoOpen: false,
//         width: 500,
//         height: 200,
//         modal: true,

//     })
//     $("#opener").click(function () {
//         $("#dialog")
//             .data('a', 'minh')
//             .dialog("open");
//     });
// });


// var today = new Date(moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')).getTime()
// var expected = new Date('2022-08-27 00:00:00').getTime()
// var minus = (expected - today) / (1000 * 60 * 60 * 24);
// console.log(today);
// console.log(expected);
// console.log(minus);