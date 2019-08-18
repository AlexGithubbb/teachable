
document.querySelector('.setTimer').addEventListener('click', startTimer)
document.querySelector('.clearTimer').addEventListener('click', clearTimer)

const startTimer = () => {
  setTimeout(() => {
    let second = new Date().getSeconds;
    console.log(second)
  }, 1000);
}


const clearTimer = () => {
  clearTimeout(startTimer)
}




