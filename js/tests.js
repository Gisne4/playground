$(function () {
  $(".dada").on("click", function () {
    dada = Math.random() * 100;
    e = Math.round(dada);
    $(".nana").find("h1").html(e);
    if (e >= 80) {
      $(".nana").find("p").html("참말로 자랑스럽구나!");
    } else if (e <= 60 && e > 40) {
      $(".nana").find("p").html("정상");
    } else if (e <= 40) {
      $(".nana").find("p").html("공부쫌 혀");
    }
  });
});
