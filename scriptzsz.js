"use strict";
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const rolldice = document.querySelector(".btn--roll");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

// 准备工作数据清零
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
let currentScore = 0;
let activeplayer = 0;
let scores = [0, 0];
let playing = true;
// 随机产生分数
rolldice.addEventListener("click", function () {
  if (playing) {
    let number = Math.trunc(Math.random() * 6) + 1;
    console.log(number);
    dice.classList.remove("hidden");
    dice.src = `dice-${number}.png`;
    if (number != 1) {
      currentScore += number;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activeplayer}`).textContent = 0;
      currentScore = 0;
      activeplayer = activeplayer == 0 ? 1 : 0;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  }
});
const holdbtn = document.querySelector(".btn--hold");
holdbtn.addEventListener("click", function () {
  if (playing) {
    // 把总当前得分和已经得分相加
    scores[activeplayer] += currentScore;
    // 在页面上显示出来
    document.querySelector(`#score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 20) {
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add(`player--winner`);
      dice.classList.add("hidden");
      playing = false;
    } else {
      // 把当前得分清零
      currentScore = 0;
      // 在页面上显示出来
      document.querySelector(`#current--${activeplayer}`).textContent = 0;
      // 判断用户
      activeplayer = activeplayer == 0 ? 1 : 0;
      // 切换用户class以达到效果
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  }
  const newbtn = document.querySelector(".btn--new");
  newbtn.addEventListener("click", function () {
    playing = true;
    scores = [0, 0];
    score0.textContent = 0;
    score1.textContent = 0;
    dice.classList.add("hidden");
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove(`player--winner`);
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    currentScore = 0;
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    current0 = 0;
    current1 = 0;
  });
});
