document.getElementById("btn_enter").onclick = function check_login() {
  login = document.getElementById("login").value;
  password = document.getElementById("password").value;
  if (login == "admin" && password == "admin") {
    window.location.href = "enter_index.html";
  } else {
    alert("Пользователь не найден");
  }
};
