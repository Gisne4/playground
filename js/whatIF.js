$(function () {
  $(".caca").on("click", function () {
    let v = 10000 * Math.random();
    let p = Math.round(v);
    $(".dada, .dodo").html("");
    var ta = $(".tata").offset().top;
    $("html,body")
      .stop()
      .animate({ scrollTop: ta }, 500, function () {
        $("html,body").delay(1000).animate({ scrollTop: 0 }, 500);
        $(".dada").html(`나의 잔고는! :${p}원`);
        if (4300 > p && p >= 2300) {
          $(".dodo").html(`${p}원 있네! 몬스터 마셔야지!`);
        } else if (6800 > p && p >= 4300) {
          $(".dodo").html(`${p}원 있네! 몬스터 하나랑 보름달 하나 가자!`);
        } else if (p >= 6800) {
          $(".dodo").html(`${p}원 있네! 몬스터 랑 담타!`);
        } else if (p < 2300) {
          $(".dodo").html(`${p}원 있네! 오늘은 정수기로 배 채운다!`);
        }
      });
  });
  var mamaH = $(".mama").height();
  var cocoH = $(".coco").height();
  var dada = cocoH / 2;
  var ququH = mamaH - cocoH - dada;
  console.log(`sk${cocoH}랑 ${mamaH}`);
  $(window).scroll(function () {
    var clcl = $(this).scrollTop();
    if (clcl >= ququH) {
      $(".coco ul").css({
        transform: "translate(0px, 0px)",
        transition: "1s",
      });
    } else {
      $(".coco ul").css({
        transform: "translate(0px, 400px)",
        transition: "1s",
      });
    }
  });
});
