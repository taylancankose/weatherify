function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  var day = days[a.getDay()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = day + ' ' + '\n' + hour + ':' + min;
  return time;
}

export default timeConverter;
