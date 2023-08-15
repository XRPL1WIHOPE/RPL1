alert(
  "pilih ok untuk main Wir\nclick pada layar untuk loncat\nklik kiri pada mouse jika anda menggunakan mouse\nselamat bermain kata om sugosa absen 9"
);

var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);

  document.getElementById("skor").innerHTML =
    parseInt(document.getElementById("skor").innerHTML) + 1;
}

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("GAME OVER");
    const val = prompt("Apakah Anda mau kembali ke halaman utama? (ya/tidak)");

    if (val === "ya" || val === true) {
      window.location.href = "https://xrpl1wihope.github.io/XRPL1/";
    } else {
      window.location.reload();
    }
  }
}, 10);
