// global variable start
const sekolah = 'https://instagram.com/official.smkwiraharapan?igshid=MzRlODBiNWFlZA==';
const grup = 'https://instagram.com/expors.ofc?igshid=MzRlODBiNWFlZA==';
// global variable end

// navbar script start
let nilai = 0;
const button = document.getElementById("button-nav");
const nav_menu = document.getElementById("nav-menu");
button.addEventListener("click", () => {
  nilai = (nilai + 1) % 2;
  button.setAttribute("src", `./assets/components/${nilai === 0 ? "menu" : "x"}.svg`)
  nav_menu.classList.toggle("interak");
});
// navbar script endb 

// home start
document.getElementById("visBtn").addEventListener("click", () => {
  window.open(`${grup}`);
});
// home end

// about start
document.getElementById("sekolah").addEventListener("click", () => {
  window.open(`${sekolah}`);
})

document.getElementById("groupN").addEventListener("click", () => {
  window.open(`${grup}`)
})
// about end