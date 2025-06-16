$(function () {
  let mouseCursor = document.getElementById("cursor");

  document.addEventListener("mousemove", cursor);
  function cursor(e) {
    mouseCursor.style.top = e.pageY + document.body.scrollTop + "px";
    mouseCursor.style.left = e.pageX + document.body.scrollLeft + "px";
  }
  setInterval(function () {
    let rara = $(".con0 ul li:first-child()");
    $(".con0 ul")
      .stop()
      .animate(
        {
          top: "-80px",
        },
        2000,
        function () {
          $(".con0 ul").append(rara).css({ top: "0px" });
        }
      );
  }, 3000);
  let caca = 1;
  var kaka;
  $(".con1 .circleCon").mouseenter(function () {
    $(".con1 .circle").css({
      transform: "rotate( 360deg)",
      transition: "4s linear",
    });

    kaka = setInterval(function () {
      caca++;
      $(".con1 .circle").css({
        transform: "rotate(" + 360 * caca + "deg)",
      });
    }, 4000);
  });
  $(".con1 .circleCon").mouseleave(function () {
    caca = 1;
    clearInterval(kaka);
    $(".con1 .circle").css({
      transform: "rotate(" + caca + "deg)",
      transition: "0s",
    });
  });
  let tatasintervals = 1;
  //const tataparent = $(".con1 con1ImgContainer").children("img").length;
  //console.log(tataparent);

  let tata = setInterval(function () {
    $(
      ".con1 .con1ImgContainer img:nth-child(" + tatasintervals + ")"
    ).fadeOut();
    tatasintervals++;
    $(".con1 .con1ImgContainer img:nth-child(" + tatasintervals + ")").fadeIn();

    if (tatasintervals == 5) {
      $(".con1 .con1ImgContainer img:last-child").fadeOut();
      $(".con1 .con1ImgContainer img:first-child").fadeIn();
      tatasintervals = 1;
    }
  }, 2000);
  $(".con2 ul li").mouseenter(function () {
    let nana = $(this).index();
    $(".con2 ul li div").eq(nana).stop().animate({ width: "80%" }, 200);
    nana += 1;
    $(".con2img ul").append(
      "<li class='nothing' ><img src='/img/pic" +
        nana +
        ".jpg' /></li>" +
        "<li class='nothing' ><img src='/img/pic" +
        nana +
        ".jpg' /></li>" +
        "<li class='nothing' ><img src='/img/pic" +
        nana +
        ".jpg' /></li>" +
        "<li class='nothing' ><img src='/img/pic" +
        nana +
        ".jpg' /></li>"
    );
  });
  $(".con2 ul li").mouseleave(function () {
    let nana = $(this).index();
    $(".con2 ul li div").eq(nana).stop().animate({ width: "0%" });
    $(".con2img ul li").remove();
  });
  let v = 0;
  $(".con2 h1").on("click", function () {
    if (v == 0) {
      $(".con2_2").css({
        transform: "translate(0px)",
      });
      v = 1;
    } else {
      $(".con2_2").css({
        transform: "translate(-30vw)",
      });
      v = 0;
    }
  });

  $(".con2_2 ul li:nth-child(1) span").on("click", function () {
    $(".con2_2 ul li:nth-child(2)").slideToggle();
  });
  $(".con2_2 ul li:nth-child(4) span").on("click", function () {
    $(".con2_2 ul li:nth-child(5)").slideToggle();
  });
  //  var con2video = 1;
  //  setInterval(function () {
  //    con2video++;
  // $(".con2container video ").attr(
  //   "src",
  //   "/video/video_visual_0" + con2video + ".mp4"
  // );
  // if (con2video == 3) {
  //   con2video = 0;
  // }
  // }, 3000);
  setInterval(function () {
    let rara = $(".con3 ul li:first-child");
    $(".con3 ul li div").css({
      transform: "translate(0px)",
      transition: "1s",
      opacity: "0",
    });

    $(".con3 ul")
      .stop()
      .animate(
        {
          left: "-100vw",
        },
        1000,
        function () {
          $(".con3 ul li:nth-child(2) div").css({
            transform: "translate(-30px)",
            transition: "1s",
            opacity: "1",
          });
          $(".con3 ul").append(rara).css({ left: "0px" });
        }
      );
  }, 3000);
  let e = 0;
  let t = 0;
  pose = setInterval(function () {
    e++;

    $(".con3 h1 span").text(e);

    if (e == 70000000) {
      clearInterval(pose);
    }
  }, 20);
});
