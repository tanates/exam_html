document.getElementById("btn_enter").onclick = function check_login() {
  login = document.getElementById("login").value;
  password = document.getElementById("password").value;
  if (login == "admin" && password == "admin") {
    window.location.href = "enter_index.html";
  } else {
    alert("Пользователь не найден");
  }
};

function img_timer() {
  var total_img = 2;
  var interval = 10000;
  var time_out = 1;
  var i = 0;
  var timeout;
  var opacity = 100;
  opacity--;
  var k = i + 1;
  var image_now = "flower_" + i;
  if (i == total_img) {
    k = 1;
  }
  document.getElementById(image_now).style.opacity = opacity / 100;
  document.getElementById(image_now).style.filter =
    "alpha(opacity=" + opacity + ")";
  document.getElementById(image_next).style.opacity = (100 - opacity) / 100;
  document.getElementById(image_next).style.filter =
    "alpha(opacity=" + (100 - opacity) + ")";
  if (opacity == 1) {
    opacity = 100;
    clearTimeout(timeout);
  }
  setInterval(function () {
    i++;
    if (i > total_pics_num) i = 1;
    fade_to_next();
  }, interval);
}
