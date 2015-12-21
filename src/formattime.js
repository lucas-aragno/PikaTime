export default function formatTime (time) {
  var formatHour = function (hour) {
    var hourInt = parseInt(hour)
    return hourInt >= 24 ? '00'
      : hourInt > 0 ? hourInt.toString()
        : hourInt === 0 ? '00'
          : null
  }

  var formatMinutes = function (minutes) {
    var minutesInt = parseInt(minutes)
    return minutesInt > 59 ? '00'
      : minutesInt > 0 ? minutesInt.toString()
        : minutesInt === 0 ? '00'
          : null
  }

  if (time.indexOf(':') > -1) {
    var timeParts = time.split(':')
    return formatHour(timeParts[0]) + ':' + formatMinutes(timeParts[1])
  } else if (time.length <= 2) {
    return time + ':00'
  } else {
    return formatTime(time.substr(0, 2) + ':' + time.substr(2))
  }
}
