$(".information").css({
  transform: "translate(0%)",
  transition: "1s",
});
$(document).scroll(function () {
  const scrollValue = $(this).scrollTop();
  // console.log(scrollValue);

  if (scrollValue >= 350) {
    $("img.s1").css({
      transform: "scale(1)",
      transition: "all 1s",
    });
    $(".s2").css({
      transform: "scale(1)",
      transition: "all 1s",
    });
  } else {
    $(".s1").css({
      transform: "scale(.1)",
      transition: "all 1s",
    });
    $(".s2").css({
      transform: "scale(.1)",
      transition: "all 1s",
    });
  }

  if (scrollValue >= 700) {
    $(".s3").css({
      transform: "scale(1)",
      transition: "all 1s",
    });
    $(".s4").css({
      transform: "scale(1)",
      transition: "all 1s",
    });
  } else {
    $(".s3").css({
      transform: "scale(.1)",
      transition: "all 1s",
    });
    $(".s4").css({
      transform: "scale(.1)",
      transition: "all 1s",
    });
  }
  if (scrollValue >= 1500) {
    $(".s5").css({
      transform: "scale(1)",
      transition: "all 1s",
    });
  } else {
    $(".s4").css({
      transform: "scale(.1)",
      transition: "all 1s",
    });
  }

  if (scrollValue >= 2230) {
    $(".logoExs").css({
      transform: "scale(1)",
      transition: "all 1s",
    });
  } else {
    $(".logoExs").css({
      transform: "scale(.1)",
      transition: "all 1s",
    });
  }
});
