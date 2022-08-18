//get the current month of the year 
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentMonth = new Date();
let getCurrentMonth = monthArr[currentMonth.getMonth()];
//get the current day of the month
const dayArr = ['Sunday' ,'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = new Date();
let today = dayArr[currentDay.getDay()];
console.log(today);
