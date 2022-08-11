document.getElementById("btn_enter").onclick = function get_login() {
  let login = document.getElementsByid("login").value;
  let password = document.getElementsByid("password").value;
  if (login == "admin" && password == "admin") {
    let url = "http://localhost:3000/";
    document.location.href = url.value;
    alert("есть");
  } else {
    alert("Такой пользователь не найден");
  }
};
