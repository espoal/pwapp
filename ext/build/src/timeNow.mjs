const twoDigits = (n) => {
  if (n > 9) return parseInt(n)
  else return '0' + parseInt(n)
}


export const timeNow = (date = new Date()) =>
  (`${twoDigits(date.getHours())}:${twoDigits(date.getMinutes())}:${twoDigits(date.getSeconds())}`)
