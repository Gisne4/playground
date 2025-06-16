$(function () {
  for (let index = 1; index < 5; index++) {
    $(".visual ul").append(`<li><img src="img/pic${index}.jpg" alt=""></li>`);
  }
  $(".visual ul li").mouseenter(function () {
    var a = $(this).index();
    $(".visual ul li")
      .eq(a)
      .find("img")
      .css({ transform: "rotateY(180deg)", transition: "1s" });
  });
  $(".visual ul li").mouseleave(function () {
    var a = $(this).index();
    $(".visual ul li").eq(a).find("img").css({ transform: "rotateY(0deg)" });
  });
  $(".visual ul li").on("click", function () {
    var a = $(this).index();
    var e = a + 1;

    $(".visual").append(`<div class="mama">
        <img src="img/pic${e}.jpg" alt="" />
        <div class="close">X</div>
      </div>`);
    $(`.visual .mama .close`).on("click", function () {
      $(`.visual .mama `).remove();
    });
  });
  const dada = [
    "url(../img/sagun/me.png)",
    "url(../img/sagun/lan.png)",
    "url(../img/sagun/guc.png)",
    "url(../img/sagun/juc.png)",
  ];
  const dodo = [
    "<h1>안녕하세요 </br>매화입니다</h1>",
    "<h1>안녕하세요 </br>매화친구 </br>난화입니다</h1>",
    "<h1>안녕하세요 </br>국화빵 </br>마시따</h1>",
    "<h1>죽</h1>",
  ];
  var tata = "translate(0px, 0px)";
  $(".con1_ul li").on("click", function () {
    var nana = $(this).index() - 1;
    $(".con1_ul li")
      .stop()
      .animate({ "font-size": "20px" }, 100, function () {
        $(".con1_ul li").eq(nana).stop().animate({ "font-size": "30px" }, 100);
      });
    $(".nana").css({ "background-image": dada[nana] });
    $(".caca").find("h1").remove();
    $(".caca").append(dodo[nana]);
    $(".caca h1").stop().animate({ opacity: 1, transform: tata });
  });
});
