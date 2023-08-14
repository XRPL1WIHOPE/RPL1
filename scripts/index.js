// global variable start
const sekolah = "https://smkwiraharapan.sch.id/ ";
const grup = "https://instagram.com/expors.ofc?igshid=MzRlODBiNWFlZA==";
const Pengurus = "./pages/information.html";
// global variable end

// navbar script start
let nilai = 0;
const button = document.getElementById("button-nav");
const nav_menu = document.getElementById("nav-menu");
button.addEventListener("click", () => {
  nilai = (nilai + 1) % 2;
  button.setAttribute(
    "src",
    `./assets/components/${nilai === 0 ? "menu" : "x"}.svg`
  );
  nav_menu.classList.toggle("interak");
});

// document.getElementById("game").addEventListener("click", function () {
//   alert("Game sedang tahap perbaikan..........");
// });
// navbar script end

// home start
document.getElementById("visBtn").addEventListener("click", () => {
  window.open(`${grup}`);
});
// home end

// about start
document.getElementById("sekolah").addEventListener("click", () => {
  window.open(`${sekolah}`);
});

document.getElementById("groupN").addEventListener("click", () => {
  window.open(`${grup}`);
});

document.getElementById("pengurus").setAttribute("href", Pengurus);
// about end
