let e = 1;
setInterval(function () {
  $(".con1 ul li").hide();
  e++;
  $(".con1 ul li:nth-child(" + e + ")").show();
  if (e == 4) {
    e = 0;
  }
}, 2000);
$(function () {
  let num;
  $(".con2_container2 li").on("click", function () {
    num = $(this).index();
    $(".con2_container ul li").hide();
    $(".con2_container ul li").eq(num).show();
  });
  $(".con3 .bu_1").on("click", function () {
    $(".con3 .nana").css({ display: "block" });
  });
  $(".con3 .nana").on("click", function () {
    $(".con3 .nana").css({ display: "none" });
  });

  $(".con4").mouseenter(function () {
    $(".con4 ul li span").css({ display: "block" });
  });
  $(".con4").mouseleave(function () {
    $(".con4 ul li span").css({ display: "none" });
  });
  $(".kaka button").on("click", function () {
    $(".kaka .mama").toggle();
  });

  //toggle 쓰기 자존심 상하고 animate 더 찰지게 쓰기 위해서 만든 코드
  $(".con5 ul li").on("click", function () {
    let v = $(this).index();

    //리스트의 현제 높이 저장
    var fiheight = $(".con5 ul li").eq(v).height();

    // 리스트의 높이 임시적으로 fit-content로 저장
    $(".con5 ul li").eq(v).css("height", "fit-content");

    //변수로 height 의 fit-content 라는 변수를 저장
    var fitheight = $(".con5 ul li").eq(v).height();

    //h1 높이 측정 단위는 long 인듯하다
    var h1height = $(".con5 ul li").eq(v).find("h1").height();

    //현제 높이와 임시 저장된 높이가 같다면 h1높이로 줄여버림
    if (fiheight == fitheight) {
      $(".con5 ul li")
        .eq(v)
        .stop()
        .animate({ height: h1height + "px" });
      $(".con5 ul li").eq(v).find("i").css({ transform: "rotate(0deg)" });
    } else {
      //animate에 변수를 넣어서, 문자열로 높이 수치를 측정한뒤 강제적으로 넣어서 animate 를 문자열로 사용할수 있게함.
      $(".con5 ul li").eq(v).height(fiheight).animate({ height: fitheight });
      $(".con5 ul li")
        .eq(v)
        .find("i")
        .css({ transform: "rotate(180deg)", transition: "0.5s" });
    }
  });

  $(".con6 ul li ul li:first-child").on("click", function () {
    var a = $(this).parent().parent().index();
    console.log(a);
    $(".con6 ul li ul")
      .find("li")
      .not($(".con6 ul li ul li:first-child"))
      .slideToggle();
  });

  let imoji = 1;
  setInterval(function () {
    $(".con7 ul li").not($(".con7 ul li").eq(imoji)).fadeOut(1500);
    $(".con7 ul li").eq(imoji).fadeIn(1000);
    imoji++;
    $(".con7 ul li h1").fadeToggle();
    if (imoji == 6) {
      imoji = 0;
    }
  }, 2000);
  for (let index = 1; index < 7; index++) {
    $(".con8 ul").append(
      "<li><img src='/img/jacomo/best_product0" +
        index +
        ".jpg' ><img class='second' src='/img/jacomo/best_product0" +
        index +
        "_on.jpg' ></li>"
    );
  }
  $(".con8 ul li").mouseenter(function () {
    let ma = $(this).index();
    $(".con8 ul li").eq(ma).find(".second").fadeIn();
  });
  $(".con8 ul li").mouseleave(function () {
    let ma = $(this).index();
    $(".con8 ul li").eq(ma).find(".second").fadeOut();
  });
  setInterval(function () {
    $(".con8 ul")
      .stop()
      .animate({ "margin-left": "-80vw" }, 1000, function () {
        $(".con8 ul").delay(5000).animate({ "margin-left": "10vw" }, 1000);
      });
  }, 10000);

  $(".con9 div h1").draggable({ axis: "x", containment: ".con9" });

  $(".con10").on("click", function () {
    dada = $(".line1").css("transform");
    $(".line1").css({
      transform: "rotate(-45deg) translate(-5px, 3.5px)",
      transition: "0.5s",
    });
    $(".line2").css({
      transform: "rotate(45deg) translate(-5px, -3.5px)",
      transition: "0.5s",
    });
    if (
      dada ==
      "matrix(0.707107, -0.707107, 0.707107, 0.707107, -1.06066, 6.01041)"
    ) {
      $(".line1").css({
        transform: "rotate(0deg) translate(0px, 0px)",
        transition: "0.5s",
      });
      $(".line2").css({
        transform: "rotate(0deg) translate(0px, 0px)",
        transition: "0.5s",
      });
    }
  });
});
