(function () {
  let h1 = document.getElementById("title");
  h1.innerText = "New Account";
})();

const password = document.getElementById("password");

password.oninput = isValidPassword(Event);

function isValidPassword(event) {
  const pwPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  console.log(event.value);
  //console.log(event);
}
