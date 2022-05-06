// 判断当年是否为闰年
// 闰年（leap year）二月 29 天（多一天）
// 平年（common year）二月 28 天
function isLeapYear(year) {
  let flag = false;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    flag = true;
  }
  return flag;
}
// console.log(isLeapYear(2004));