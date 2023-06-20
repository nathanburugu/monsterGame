let statusBar1 = document.getElementById("myhealthbar__value");
let statusBar2 = document.getElementById("monsterhealthbar__value");
let clickCount = 0;

function updateStatusBars() {
  let randomNumber1 = Math.random() * 4 + 8;
  let randomNumber2 = Math.random() * 3 + 12;

  let currentWidth1 = statusBar1.offsetWidth;
  let currentWidth2 = statusBar2.offsetWidth;

  statusBar1.style.width = currentWidth1 - randomNumber1 + "px";
  statusBar2.style.width = currentWidth2 - randomNumber2 + "px";
  clickCount++;

  if (clickCount === 3) {
    let randomNumber3 = Math.random() * 5 + 20;
    statusBar1.style.width = currentWidth1 - randomNumber3 + "px";
    clickCount = 0;
  }

  if (currentWidth1 <= 0) {
    alert("You win the game!");
  }
}

updateStatusBars();

function specialattack() {
  let randomNumber3 = Math.random() * 5 + 20;
  let currentWidth1 = statusBar1.offsetWidth;
  statusBar1.style.width = currentWidth1 - randomNumber3 + "px";
}

function heal() {
  let randomNumber4 = Math.random() * 10 + 30;
  let currentWidth1 = statusBar1.offsetWidth;
  statusBar2.style.width = currentWidth1 + randomNumber4 + "px";
  //   prevent the health bar from going over 100%
  /*  if (currentWidth1 >= 100) {
    statusBar2.style.width = 100 + "px";
  } */
}
