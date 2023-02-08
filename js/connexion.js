let showPassword = document.querySelector("#show-password");
let password = document.querySelector("#password");

showPassword.addEventListener("click", (e) => {
  if (password.type === "password") {
    password.type = "text";
    showPassword.innerHTML = '<iconify-icon icon="zmdi:eye"></iconify-icon>';
  } else {
    password.type = "password";
    showPassword.innerHTML =
      '<iconify-icon icon="zmdi:eye-off"></iconify-icon>';
  }
});
