function ChangeText() {
  var name = document.querySelector("#name");
  var img = document.querySelector("#img");
  name.innerText = "Abd Alrahman R";
  img.src = "images/Abd.jpg";
}

function accept(id) {
  var element = document.querySelector(id);
  var reqSpan = document.querySelector("#req-num");
  var conSpan = document.querySelector("#con-num");
  element.remove();
  reqSpan.innerText--;
  conSpan.innerText++;
}
function reject(id) {
  var reqSpan = document.querySelector("#req-num");
  var element = document.querySelector(id);
  element.remove();
  reqSpan.innerText--;
}
