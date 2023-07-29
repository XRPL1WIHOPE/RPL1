// navbar script start
let nilai = 0;
const button = document.getElementById("button-nav");
const nav_menu = document.getElementById("nav-menu");
button.addEventListener("click", () => {
  nilai = (nilai + 1) % 2;
  button.setAttribute("src", `./assets/components/${nilai === 0 ? "menu" : "x"}.svg`)
  nav_menu.classList.toggle("interak");
})
// navbar script end


// home start
document.getElementById("visBtn").addEventListener("click", () => {
  window.open("https://instagram.com/expors.ofc?igshid=MzRlODBiNWFlZA==");
});
// home end

// about start
document.getElementById("sekolah").addEventListener("click", () => {
  window.open("https://instagram.com/official.smkwiraharapan?igshid=MzRlODBiNWFlZA==");
})
// about end