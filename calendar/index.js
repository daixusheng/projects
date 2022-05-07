const calendarContent = document.querySelector('.content');
// console.log(calendarBody)

const year = document.querySelector('.year');
const today = document.querySelector('.today');

const lastMonth = document.querySelector('.lastMonth');
const nextMonth = document.querySelector('.nextMonth');

lastMonth.addEventListener('click', () => {
  console.log('lastMonth')
});

nextMonth.addEventListener('click', () => {
  console.log('nextMonth');
})


calendarContent.addEventListener('click', (event) => {
  if(event.target.nodeName === 'LI') {
    console.log('Yea')
    event.target.classList.add('selected')
  }
})


// 获取当前时间
let now = new Date();

let currentYear = now.getFullYear();
let currentMonth = now.getMonth() + 1;
let currentDay = now.getDate();
console.log(currentYear, currentMonth, currentDay)

year.innerHTML = `${currentYear}年${currentMonth}月`;
today.innerHTML = `${currentDay}`;


// 判断年份是否为闰年
function isLeapYear(year) {
  let flag = false;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    flag = true;
  }
  return flag;
}

// 根据年份返回月数（闰年将二月天数改为 29 天）
function getMonthsInYear(year) {
  // 初始化各月天数
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 闰年二月特殊处理
  if (isLeapYear(year)) {
    months[1] = 29;
  }
  return months;
}

// 按当月天数生成月长数组
function getDaysInMonth(month) {
  const days = []; 
  // 获取当年月份
  const months = getMonthsInYear(currentYear);
  for(let i = 0; i < months[month - 1]; i ++) {
    days.push(i + 1);
  }
  return days;
}

// 按月长数组渲染日历
function rendercalendar() {
  const days = getDaysInMonth(currentMonth);

  // 找出 今天 的索引值
  let indexofToday = days.indexOf(currentDay);
  console.log(indexofToday)

  const _days = days.map((day, index) => {
    return indexofToday === index ? `<li class="current">${day}</li>` : `<li>${day}</li>`
  }).join('');

  calendarContent.innerHTML = _days;
}
rendercalendar();


// 非当月的天样式转为灰色
let daysNotInCurrentMonth;