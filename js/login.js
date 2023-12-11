const f = document.forms.loginForm;

var playerNameIsValid = false;
var secreteCodeIsValid = false;

// Event listernes for validation
f.playerName.addEventListener('input', function () {
  playerNameIsValid = validName(this.value);
  validateLoginForm();
});

f.secreteCode.addEventListener('input', function () {
  secreteCodeIsValid = this.value.length > 4;
  validateLoginForm();
});

// is player name and secrete code is valid then enable logign button
function validateLoginForm() {
  if (playerNameIsValid && secreteCodeIsValid) {
    submitButton = document.querySelector('#submitButton');
    submitButton.style.backgroundColor = '#4caf50';
    submitButton.classList.add('active');
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.style.backgroundColor = '';
    submitButton.classList.remove('active');
    submitButton.setAttribute('disabled', 'disabled');
  }
}

//helper function
function validName(name) {
  var alphaRegex = /^[a-zA-Z]+$/;
  return alphaRegex.test(name) && name.length >= 2;
}
