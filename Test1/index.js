const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')
const regExp = /\d/g
let tik

const timer = (h, m, s) =>
  `${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    tik = setInterval(() => {
      let s = (seconds % 60).toString()
      let m = Math.floor((seconds / 60) % 60).toString()
      let h = Math.floor((seconds / 60 / 60) % 60).toString()
      timerEl.innerText = timer(h, m, s)
      if (seconds < 0) {
        clearTimeout(tik)
        timerEl.innerText = 'time is over'
      }
      seconds--
    }, 1000)
  }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const inputValue = e.target.value
  const inputNum = inputValue
    .split('')
    .filter((str) => str.match(regExp))
    .join('')
  inputEl.value = inputNum

  clearInterval(tik)
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value)

  animateTimer(seconds)

  inputEl.value = ''
})
