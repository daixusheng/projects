// 判断当年是否为闰年
function isLeapYear(year) {
  let flag = false;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    flag = true;
  }
  return flag;
}