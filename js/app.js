/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const buttonElement = document.getElementById("btn__reset");
let game;

//starts new game and resets elements back to default value
buttonElement.addEventListener("click", (e) => {
  game = new Game();
  game.reset(e);
  game.startGame();
});

const button = document.getElementsByClassName("key");

for (let i = 0; i < button.length; i++) {
  const button = document.getElementsByClassName("key");
  button[i].addEventListener("click", (event) => {
    game.handleInteraction(event.target);
  });
}
