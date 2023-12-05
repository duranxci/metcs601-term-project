const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get('playerName');
console.log(playerName);
document.querySelector('#wellcomeMsg').textContent = `Hello ${
  playerName ? playerName : 'there'
}. Wellcome to my website. My name is Jonathan Duran and I'm an aspiring game
developer. Hope you enjoy!`;
