$(function () {
  var i = 1;
  function momo() {
    if (i > 3) {
      i = 0;
    } else if (i < 0) {
      i = 3;
    }
    $(".vwrap li").fadeOut(10);
    $(".mowrap li").fadeOut(10);
    $(".prograss").css({
      width: `calc(100% / 4  * ${i + 1})`,
      transition: "1s",
    });
    $(".vwrap li").eq(i).fadeIn(1000);
    $(".mowrap li").eq(i).fadeIn(1000);
  }
  function dada() {
    momo();
    i++;
  }
  mama = setInterval(dada, 5000);
  $(".visual_btn img:eq(1)").on("click", function () {
    clearInterval(mama);
    momo();
    i++;
  });
  $(".visual_btn img:eq(0)").on("click", function () {
    clearInterval(mama);
    i--;
    momo();
  });
  setInterval(dada, 10000);
});
