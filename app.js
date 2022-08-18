const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentMonth = new Date();
let getCurrentMonth = monthArr[currentMonth.getMonth()];
document.getElementById('current-month').innerHTML = `${getCurrentMonth}`;
