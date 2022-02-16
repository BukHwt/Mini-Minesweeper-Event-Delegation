"use strict";

const blackBody = document.querySelector("body");
const cellContainer = document.querySelector("main");
const cellArray = document.querySelectorAll(".cell");
cellArray[Math.floor(Math.random() * cellArray.length)].id = "it";

const clicked = (e) => {
  if (e.target.id === "it") {
    e.target.classList.add("red");
    blackBody.classList.add("black");
    e.target.textContent = "it";
    document.getElementById("it").removeEventListener("click", e);
    cellContainer.removeEventListener("click", clicked);
  } else if (e.target.classList.contains("cell")) {
    e.target.classList.add("green");
  }
};

cellContainer.addEventListener("click", clicked);
