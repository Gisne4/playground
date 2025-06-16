$(function () {
  let b = $(".content>div").length;
  let tete = [];

  $(window).on("scroll", function () {
    nana = $(this).scrollTop();
    $(".prograss li").find("p").css({ height: "0px" });
    for (let index = 0; index < b; index++) {
      tete[index] = $(".content>div").eq(index).offset().top;
      if (nana >= tete[index]) {
        $(".prograss li").eq(index).find("p").css({ height: "80px" });
      }
    }
  });
  $(".header  li").on("click", function () {
    var dada = $(this).index();
    var tot = $(`.con${dada + 1}`).offset().top;
    $("body, html").stop().animate({ scrollTop: tot }, 500);
  });
});
