$(function () {
  $(".nanaho li").mouseenter(function () {
    var i = $(this).index();
    $("img:eq(" + i + ")").css({
      transform: "translate(0px) ",
      transition: "1s",
    });
    $(this).css({
      color: "rgb(173, 165, 165)",
      "box-shadow":
        "rgba(0, 0, 0, 0.25) 0px 14px 28px" +
        "," +
        "rgba(0, 0, 0, 0.22) 0px 10px 10px",
      transition: "0.8s",
      "background-color": "rgb(3, 22, 56)",
    });
  });
  $(".nanaho li").mouseleave(function () {
    var i = $(this).index();
    $("img:eq(" + i + ")").css({
      transform: "translate(300px)",
      transition: "1s",
    });
    $(this).css({
      color: "black",
      "box-shadow":
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px" +
        "," +
        "rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      "background-color": "rgba(255, 255, 255, 0.75)",
    });
  });
  $(".papa li").mouseenter(function () {
    var i = $(this).index();
    console.log(i);
    $(".leftTop").mouseenter(function () {
      $("img:eq(" + i + 4 + ")").css({
        transition: "0.5s",
        transform: "skew(5deg, 5deg)",
      });
    });
    $(".rightTop").mouseenter(function () {
      $("img:eq(" + i + 4 + ")").css({
        transition: "0.5s",
        transform: "skew(-5deg, -5deg)",
      });
    });
    $(".leftBottom").mouseenter(function () {
      $("img:eq(" + i + 4 + ")").css({
        transition: "0.5s",
        transform: "skew(0deg, -5deg)",
      });
    });
    $(".rightBottom").mouseenter(function () {
      $("img:eq(" + i + 4 + ")").css({
        transition: "0.5s",
        transform: "skew(0deg, 5deg)",
      });
    });
  });
});
