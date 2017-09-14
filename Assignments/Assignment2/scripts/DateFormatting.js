var d = new Date();
var time = d.toLocaleString([], { hour12: true });
var period = time.slice(-2);

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var monthName = new Array(12);
monthName[0] = "January";
monthName[1] = "February";
monthName[2] = "March";
monthName[3] = "April";
monthName[4] = "May";
monthName[5] = "June";
monthName[6] = "July";
monthName[7] = "August";
monthName[8] = "September";
monthName[9] = "October";
monthName[10] = "November";
monthName[11] = "December";

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

var DateFormatter = {
  seconds: addZero(d.getSeconds()),
  minutes: addZero(d.getMinutes()),
  hours: d.getHours(),
  day: d.getDay(),
  date: d.getDate(),
  month: d.getMonth() + 1,
  year: d.getFullYear(),
  getShortTime: function() {
    return ((this.hours + 11) % 12 + 1) + ":" + this.minutes;
  },
  getLongTime: function() {
    return ((this.hours + 11) % 12 + 1) + ":" + this.minutes + ":" + this.seconds;
  },
  getShortDate: function() {
    return this.month + "/" + this.date + "/" + this.year;
  },
  getLongDate: function() {
    return monthName[d.getMonth()] + " " + this.date + ", " + this.year;
  },
  getWeekDay: function() {
    return weekday[d.getDay()];
  }
};

var getWeekDay = DateFormatter.getWeekDay(d);

var getShortTime = DateFormatter.getShortTime(d);
console.log("Get Short Time " + getShortTime + " " + period);

var getLongTime = DateFormatter.getLongTime(d);
console.log("Get Long Time " + getLongTime + " " + period);

var getShortDate = DateFormatter.getShortDate(d);
console.log("Get Short Date " + getShortDate);

var getLongDate = DateFormatter.getLongDate(d);
console.log("Get Long Date " + getLongDate);

var getShortDateTime = getShortDate + " " + getShortTime;
console.log("Get Short Date Time " + getShortDateTime + " " + period);

var getLongDateTime = getLongDate + " " + getLongTime;
console.log("Get Long Date Time " + getLongDateTime + " " + period);

var getExtendedDateTime = getWeekDay + ", " + getLongDateTime;
console.log("Get Extended Date Time " + getExtendedDateTime + " " + period);
