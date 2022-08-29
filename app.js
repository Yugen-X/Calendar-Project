function calcTime(offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*offset));
    console.log(nd.toLocaleString());
    let stringDate = nd.toLocaleString();
    // const stringArray = stringDate.split(", ");
    // // console.log(stringArray[0]);
    // // console.log(stringArray[1]);
    // const dataArray = stringArray[0].split('/');
    // // console.log(dataArray[0]);
    // // console.log(dataArray[1]);
    // // console.log(dataArray[2]);
    // return dataArray;
    return stringDate;
}
let McKinneyTime = calcTime('-5');
console.log(McKinneyTime)

const date = new Date();

const months = [
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];
document.querySelector('.date div').innerHTML = `Time in McKinney, TX: ${McKinneyTime}`;











