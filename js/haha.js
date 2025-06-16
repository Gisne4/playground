$(function () {
  $(".con1 div").mouseenter(function () {
    $(this).css({
      "background-color": "orangered",
      transform: "scale(1.5, 1.5)",
      transition: "0.8s",
    });
    $(this).children("h1").css({
      "background-color": "orange",
      transform: "scale(1.5, 1.5)",
      transition: "0.8s",
    });
    $(this).children("h2").addClass("active");
  });
  $(".con1 div").mouseleave(function () {
    $(this).css({
      "background-color": "orange",
      transform: "scale(1, 1)",
    });
    $(this).children("h1").css({
      transform: "scale(1, 1)",
    });
    $(this).children("h2").removeClass("active");
  });
  $(".con2 header .menubut").on("click", function () {
    $(".con2 header .menubut").css({
      transform: "rotate(-45deg)",
      transition: "1s",
    });
    $(".con2 header div").slideToggle();
    $(this).toggle(800);
    $(".con2 header .xbut").show(1000);
  });
  $(".con2 header .xbut").on("click", function () {
    $(".con2 header .xbut").toggle();
    $(".con2 header div").slideToggle(100);
    $(".con2 header .menubut").toggle();
    $(".con2 header .menubut").css({
      transform: "rotate(0deg)",
      transition: "1s",
    });
  });
});
