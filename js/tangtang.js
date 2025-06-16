$(function () {
  $(".menu").click(function (e) {
    dada = $(".line1").css("transform");
    $(".line1").css({
      transform: "rotate(-45deg) translate(-15px, 15px)",
      transition: "0.5s",
    });
    $(".line2").css({
      transform: "rotate(45deg) translate(-15px, -15px)",
      transition: "0.5s",
    });
    $(".nana").css({ transform: "translate(0px)" });
    $(".baba")
      .css({ opacity: "0" })
      .attr("src", "img/logo.svg")
      .animate({ opacity: "1" });
    if (dada == "matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 21.2132)") {
      $(".line1").css({
        transform: "rotate(0deg) translate(0px, 0px)",
        transition: "0.5s",
      });
      $(".line2").css({
        transform: "rotate(0deg) translate(0px, 0px)",
        transition: "0.5s",
      });
      $(".nana").css({ transform: "translate(100vw)" });
      $(".baba")
        .css({ opacity: "0" })
        .attr("src", "img/new_mouse-cursor.png")
        .animate({ opacity: "1" });
    }
  });

  $(".dada li").mouseenter(function () {
    dadad = $(this).index();
    $(".dada li")
      .eq(dadad)
      .find(".img_wrap")
      .css({ height: "300px", transition: "0.5s" });
    $(".dada li").eq(dadad).css({ width: "50%", transition: "0.5s" });
    $(".dada li").eq(dadad).find(".daad").show();
    if (dadad == 1) {
      $(".dada").css({ "background-color": " black", transition: "0.5s" });
    } else {
      $(".dada").css({ "background-color": " aquamarine", transition: "0.5s" });
    }
  });
  $(".dada li").mouseleave(function () {
    dadad = $(this).index();
    $(".dada li")
      .eq(dadad)
      .find(".img_wrap")
      .css({ height: "600px", width: "100%", transition: "0.5s" });
    $(".dada li")
      .eq(dadad)
      .css({ width: "calc(100% / 3 - 20px)", transition: "0.5s" });
    $(".dada li").eq(dadad).find(".daad").hide();
  });
});
