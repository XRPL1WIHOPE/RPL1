const scrollValue = $(this).scrollTop();
const tinggiDokumen = $(document).height();
const tinggiJendela = $(window).height();

const persScroll = (scrollValue / (tinggiDokumen - tinggiJendela)) * 100;

// navbar start
const nav = $(".container-nav");
const cNavbar = $(".container-navigation-bar");

$(".show").click(function () {
  nav.css({
    transform: "translate(0%)",
  });
  cNavbar.css({
    transform: "translateY(-100%)",
  });
  $(".f-container-body").css({
    filter: "blur(6px)"
  });
});

$(".hide").click(function () {
  nav.css({
    transform: "translate(-110%)",
  });
  cNavbar.css({
    transform: "translateY(0%)",
  });
  $(".f-container-body").css({
    filter: "blur(0px)"
  });
});

// navbar end

// home start
$(document).ready(function () {
  $(".container-contain-home").css({
    transform: "scale(1)",
  });
});
// home end

// gallery start
const img = $(".slider-img");
let counter = 1;
const J = 5;
$(".left").click(function () {
  counter = counter - 1;
  if (counter < 1) {
    counter = J;
  }
  img.attr("src", `./assets/images/${counter}.jpg`);
});

$(".right").click(function () {
  counter = counter + 1;
  if (counter > J) {
    counter = 1;
  }
  img.attr("src", `./assets/images/${counter}.jpg`);
});
// gallery end

$(document).scroll(function () {
  const scrollValue = $(this).scrollTop();
  const tinggiDokumen = $(document).height();
  const tinggiJendela = $(window).height();

  const persScroll = (scrollValue / (tinggiDokumen - tinggiJendela)) * 100;
  console.log(persScroll);
  //navbar start
  if (persScroll >= 1) {
    $(".container-navigation-bar").css({
      borderBottom: "1px solid #fff",
    });
  } else {
    $(".container-navigation-bar").css({
      borderBottom: "1px solid rgba(255, 255, 255, 0)",
    });
  }
  //navbar start

  // information start
  // information end
});