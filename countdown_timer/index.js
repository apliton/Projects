const newYears = `1 Jan ${new Date().getFullYear() + 1}`
const numbers = document.querySelectorAll('[data-number')

function countdown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()
  const difference = (newYearsDate - currentDate) / 1000
  const seconds = Math.floor(difference) % 60
  const minutes = Math.floor(difference / 60) % 60
  const hours = Math.floor(difference / 3600) % 24
  const days = Math.floor(difference / 3600 / 24)

  numbers[0].innerText = formatTime(days)
  numbers[1].innerText = formatTime(hours)
  numbers[2].innerText = formatTime(minutes)
  numbers[3].innerText = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time
}


setInterval(countdown, 1000)