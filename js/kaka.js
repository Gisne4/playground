$(function () {
  $(".icon i").mouseenter(function () {
    $(this).css({ color: "yellow" });
    $("body").css({ "background-color": "black", color: "white" });
  });
  $(".icon i").mouseleave(function () {
    $(this).css({ color: "black" });
    $("body").css({ "background-color": "white", color: "black" });
  });
  $(".visuals li").mouseenter(function () {
    var i = $(this).index();
    $("img:eq(" + i + ")").css({
      transform: "translate(0px)",
      transition: "1s",
    });
    $(".visuals li").mouseleave(function () {
      var i = $(this).index();
      $("img:eq(" + i + ")").css({
        transform: "translate(300px)",
        transition: "1s",
      });
    });
  });
  $(".con1_right").mouseenter(function () {
    $(".con1_right h2").toggle();
  });
  $(".con1_right").mouseleave(function () {
    $(".con1_right h2").toggle();
  });
  $("#fxk").on("click", function () {
    for (let x = 4; x > 0; x--) {
      $(".con2 ul ").prepend(
        "<li><div><img src='/img/pic" +
          x +
          ".jpg' /></div><h3>lorem</h3><p>ipsome</p></li>"
      );
    }
    $(".con2 li").mouseenter(function () {
      var i = $(this).index();
      $(".con2 li div").eq(i).children("img").css({
        transform: "scale(1.5)",
        transition: "1s",
      });
      console.log(i);
    });
    $(".con2 li").mouseleave(function () {
      var i = $(this).index();
      $(".con2 li div").eq(i).children("img").css({
        transform: "scale(1)",
        transition: "1s",
      });
      console.log(i);
    });
  });
  $("#mfxk").on("click", function () {
    $(".con2 li").mouseenter(function () {
      var i = $(this).index();
      $(".con2 li div").eq(i).children("img").css({
        transform: "scale(1.5)",
        transition: "1s",
      });
      console.log(i);
    });
    $(".con2 li").mouseleave(function () {
      var i = $(this).index();
      $(".con2 li div").eq(i).children("img").css({
        transform: "scale(1)",
        transition: "1s",
      });
      console.log(i);
    });
    for (let x = 1; x < 5; x++) {
      $(".con2 ul ").append(
        "<li><div><img src='/img/pic" +
          x +
          ".jpg' /></div><h3>lorem</h3><p>ipsome</p></li>"
      );
    }
  });

  $(".con2 li").mouseenter(function () {
    var i = $(this).index();
    $(".con2 li div").eq(i).children("img").css({
      transform: "scale(1.5)",
      transition: "1s",
    });
    console.log(i);
  });
  $(".con2 li").mouseleave(function () {
    var i = $(this).index();
    $(".con2 li div").eq(i).children("img").css({
      transform: "scale(1)",
      transition: "1s",
    });
    console.log(i);
  });
  $(".con3 li").mouseenter(function () {
    $(this).children("div").css({
      transform: "translate(0%)",
      transition: "1s",
    });
  });
  $(".con3 li").mouseleave(function () {
    $(".con3 li div").eq(0).css({
      transform: "translate(-100%)",
      transition: "1s",
    });
    $(".con3 li div").eq(1).css({
      transform: "translate(-100%, 100%)",
      transition: "1s",
    });
    $(".con3 li div").eq(2).css({
      transform: "translate(100% , 100%)",
      transition: "1s",
    });
    $(".con3 li div").eq(3).css({
      transform: "translate(100%)",
      transition: "1s",
    });
  });
  $(".con4 button").mouseenter(function () {
    $(".con4 img").css({ transform: "translate(0px)", transition: "1s" });
    $(".con4 h2").css({
      color: "aliceblue",
      "-webkit-text-stroke": "black 2px",
      transition: "1s",
    });
  });
  $(".con4 button").mouseleave(function () {
    $(".con4 img").css({ transform: "translate(-500px)", transition: "1s" });
    $(".con4 h2").css({
      color: "black",
      "-webkit-text-stroke": "unset",
      transition: "1s",
    });
  });
  $(".con5 button").mouseenter(function () {
    $(".con5 div").css({
      transform: "translate(0px, 400px)",
      transition: "1s",
    });
    $(".con5 h1").css({
      color: "aliceblue",
      "-webkit-text-stroke": "black 2px",
      transition: "1s",
    });
  });
  $(".con5 button").mouseleave(function () {
    $(".con5 div").css({ transform: "translate(0px)", transition: "1s" });
    $(".con5 h1").css({
      color: "black",
      "-webkit-text-stroke": "unset",
      transition: "1s",
    });
  });
  $(".con6 button").mouseenter(function () {
    $(".con6 img").css({
      transform: "scale(1)",
      transition: "1s",
    });
    $(".con6 i").css({
      color: "aliceblue",
      "-webkit-text-stroke": "black 2px",
      transition: "1s",
    });
  });
  $(".con6 button").mouseleave(function () {
    $(".con6 img").css({ transform: "scale(0)", transition: "1s" });
    $(".con6 i").css({
      color: "black",
      "-webkit-text-stroke": "unset",
      transition: "1s",
    });
  });

  let i = 10;
  let e = 0;
  for (i; i > e; --i) {
    if (i % 2 == 1) {
      $(".con7 .1st").append("<h1> 당근Butter" + i + "</h1>");
    }
  }
  let sum = 0;
  for (e; e <= 4; e++) {
    sum += e * 450;
    $(".con7 .2st").append("<h1> 저금이는 조금저금" + sum + "</h1>");
  }
  $(".con7 .2st").append("<h3> 저금이는 조금저금으로 담배값을 벌었다!</h3>");

  let m = 0;
  let sub = 0;
  for (m; m <= 20; m++) {
    sub += m;
  }
  $(".con7 .3st").append("<h1>" + sub + " 입니다</h1><br>");
  $(".con7 .3st").append("<h1> 구해야 될께 왤케 많어 </h1>");
  let t = 0;
  let suv = 0;
  for (t; t <= 100; t++) {
    if (t % 2 == 0) {
      suv += t;
    }
  }
  $(".con7 .3st").append(
    "<h1>1부터 100까지 짝수만 더하면 <br><br>" + suv + " 입니다</h1>"
  );

  let y = 1;
  for (y; y <= 4; y++) {
    $(".con7 .4st ul").append(
      "<li><img src='/img/consub_" + y + ".png' /></li>"
    );
  }
  $(".con7 li").hover(
    function () {
      // over

      $(".con7 li").css({ transform: "translate(-800px)", transition: "5s" });
    },
    function () {
      // out
      $(".con7 li").css({ transform: "translate(0px)", transition: "5s" });
    }
  );
  $(".con8 #front").on("click", function () {
    $(".con8 p").append("Im Lovely Frontend dev");
  });
  $(".con8 #fxkingBackEnd").on("click", function () {
    $(".con8 p").prepend("Die Mother Fxker Die!!!");
  });
  let tata = 0;

  setInterval(function () {
    console.log(tata);
    var $some = $(".con9 ul li ul li:first-child()");
    var list = $(".con9 ul li ul li");
    tata += 1;
    list.css({
      transform: "translate(0px, -" + 100 * tata + "%)",
      transition: "1s",
    });
    if (tata == 3) {
      tata = 0;
      list.css({
        transform: "translate(0px, -" + 100 * tata + "%)",
        transition: "0s",
      });
    }
  }, 2000);
  setInterval(function () {
    $(".con9 ul li ul").append($some);
  }, 2000);

  // con10
  for (let v = 1; v <= 4; v++) {
    $(".con10 ul").append("<li><img src='/img/pic" + v + ".jpg'></li>");
  }
  setInterval(function () {
    var nana = $(".con10 div ul li:first-child()");
    var dada = $(".con10 div ul");
    dada.stop().animate({ "margin-left": "-200px" }, 1000, function () {
      nana.appendTo(dada);
      dada.css({ "margin-left": "0px" });
    });
  }, 4000);
  $(".con10 div .left").on("click", function () {
    var nana = $(".con10 div ul li:first-child()");
    var dada = $(".con10 div ul");
    dada.stop().animate({ "margin-left": "-200px" }, 1000, function () {
      nana.appendTo(dada);
      dada.css({ "margin-left": "0px" });
    });
  });
  $(".con10 div .right").on("click", function () {
    var nana = $(".con10 div ul li:last-child()");
    var dada = $(".con10 div ul");
    dada.stop().animate({ "margin-left": "200px" }, 1000, function () {
      dada.prepend(nana);
      dada.css({ "margin-left": "0px" });
    });
  });
});
