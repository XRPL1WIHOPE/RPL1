// Pesan selamat datang
alert(
  "Pilih OK untuk bermain Wir\nKlik pada layar untuk melompat\nKlik kiri pada mouse jika Anda menggunakan mouse\nSelamat bermain! - Kata Om Sugosa (Absen 9)"
);

// Mengambil elemen karakter dan blok
var character = document.getElementById("character");
var game = document.getElementById("game");
game.style.display = "none";

// Fungsi untuk mengatasi lompatan karakter
function jump() {
  if (!character.classList.contains("animate")) {
    character.classList.add("animate");
    setTimeout(function () {
      character.classList.remove("animate");
    }, 500);
  }

  // Mengupdate skor
  var skorElement = document.getElementById("skor");
  var skor = parseInt(skorElement.innerHTML) + 1;
  skorElement.innerHTML = skor;
}

// Variabel untuk menandai game dimulai
var gameStarted = false;

// Setelah 2 detik tunggu, mulai game
setTimeout(function () {
  gameStarted = true;
}, 2000);

// Cek tabrakan dan game over
var checkDead = setInterval(function () {
  if (gameStarted) {
    var characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    var blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );

    // Mengambil elemen skor
    var skorElement = document.getElementById("skor");

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
      block.style.animation = "none";
      block.style.display = "none";
      alert("GAME OVER - Skor Anda: " + skorElement.innerHTML);
      window.location.reload();
    }
  }
}, 10);
