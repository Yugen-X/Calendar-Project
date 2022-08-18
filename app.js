//get the current month of the year 
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentMonth = new Date();
let getCurrentMonth = monthArr[currentMonth.getMonth()];
console.log(getCurrentMonth)
//get the current day of the month
const dayArr = ['Sunday' ,'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = new Date();
let today = dayArr[currentDay.getDay()];
console.log(today);
//time zone conversion
function calcTime(city, offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*offset));
    return `The local time in ${city} is ${nd.toLocaleString()}`;
}
let McKinneyTime = calcTime('McKinney', '-5');
document.getElementById('current-month').innerHTML = getCurrentMonth;
document.getElementById("mckinney-time").innerHTML = McKinneyTime;