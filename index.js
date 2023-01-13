function countHours(year, holidays) {
  let extra = 0
  for (let i = 0; i < holidays.length; i++){
    const month = Number(holidays[i].match(/^\d{2}/gim)[0])-1
    const day = Number(holidays[i].match(/\d{2}$/gim)[0])
    const date = new Date(year, month, day)
    if (date.getDay() >= 1 && date.getDay() <= 5){
      extra += 2
    }
  }
  return extra
}

module.exports = { countHours }
