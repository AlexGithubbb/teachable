
document.querySelector('.setTimer').addEventListener('click', startTimer)
document.querySelector('.clearTimer').addEventListener('click', clearTimer)

let timer;

function startTimer(){
  timer = setInterval(() => {
    console.log(new Date().getSeconds());
  }, 1000);
}

function clearTimer(){
  clearTimeout(timer)
}




