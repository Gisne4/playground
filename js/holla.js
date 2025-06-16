$(".btn1").on("click", function () {
  $(".mainImg").css({ transform: "scale(1.5,1)", transition: "1s" });
});
$(".btn2").on("click", function () {
  $(".mainImg").css({ transform: "scale(1,1.5)", transition: "1s" });
});
$(".btn3").on("click", function () {
  $(".mainImg").css({ border: "5px black solid", "box-sizing": "border-box" });
});
$(".btn4").on("click", function () {
  $(".mainImg").css({
    transform: "translate(10em)",
    transition: "1s",
  });
});
$(".btn5").on("click", function () {
  $(".mainImg").css({ transform: "rotate(3600deg)", transition: "1s" });
});
$(".btn6").on("click", function () {
  $(".mainImg").css({ opacity: "0.3", transition: "1s" });
});
$(".btn7").on("click", function () {
  $(".mainImg").css({
    transform: "scale(1,1)",
    transform: "translate(0em)",
    border: "none",
    opacity: "1",
    transition: "2s",
  });
});

$(".hover button").hover(
  function () {
    // over

    $(".hover button").css({
      "border-radius": "0px 0px",
      width: "200px",
      "text-wrap": "nowrap",
      "box-shadow": "2px 2px 2px black",
    });
    $(".hover button").append("<i id='haha' class='fa-solid fa-heart'></i>");
  },
  function () {
    // out
    $("#haha").remove();
    $(".hover button").css({
      "text-wrap": "wrap",
      "border-radius": "0px 30px",
      "box-shadow": "none",
      width: "100px",
      transition: "0.3s",
    });
  }
);
$(".start").on("click", function () {
  $(".box1 img").animate(
    { width: "80%", height: "80%", "margin-inline": "10%" },
    1200,
    function () {
      $(".box1 .start").animate({ width: "30%" }, 1200);
    }
  );
});
$(".reset").on("click", function () {
  $(".box1 img").animate(
    { width: "100%", height: "100%", "margin-inline": "0%" },
    1200,
    function () {
      $(".box1 .start").animate({ width: "10%" }, 1200);
    }
  );
});

$(".box1").mouseenter(function () {
  $(".box1 img").css({ opacity: 0.6 });
  $(".box1 .papa").append(
    "<h2 class='never' >never mind that's ok, just plz do not give up</h2>"
  );
  var container = $(".box1 .papa").css("display");
  if (container == "none") {
    $(".box1 .papa").slideDown(100);
  }
});
$(".box1").mouseleave(function () {
  $(".box1 img").css({ opacity: 1 });
  $(".never").remove();
  var container = $(".box1 .papa").css("display");
  if (container == "block") {
    $(".box1 .papa").slideUp(100);
  }
});
// $(".box1 img").hover(

//   function () {
//     // over
//     var container = $(".box1 .papa").css("display");
//     if (container == "none") {
//       $(".box1 .papa").slideDown();
//     }
//   },
//   function () {
//     // out
//     var container = $(".box1 .papa").css("display");
//     if (container == "block") {
//       $(".box1 .papa").slideUp();
//     }
//   }
// );
$("#glob").mouseenter(function () {
  $(".lang").slideDown();
  $(".lang").animate({ "margin-top": "20px" });
  $(".lang").animate({ "border-radius": "20px" });
});
$(".box2 ul").mouseleave(function () {
  $(".lang").animate({ "border-radius": "0px" });
  $(".lang").slideUp();
  $(".lang").animate({ "margin-top": "0px" });
});
$(".lang .kor button").on("click", function () {
  $(".lang li").remove();
  $(".lang").append(
    "<li class='kor'><button>한국어</button></li>",
    "<li class='eng'><button>영어</button></li>",
    "<li class='chi'><button>중국어</button></li>",
    "<li class='olla'><button>블라</button></li>"
  );
});
$(".lang .eng button").on("click", function () {
  $(".lang li").remove();
  $(".lang").append(
    "<li class='kor'><button>korean</button></li>",
    "<li class='eng'><button>english</button></li>",
    "<li class='chi'><button>china</button></li>",
    "<li class='olla'><button>블라</button></li>"
  );
});
$(".lang .chi button").on("click", function () {
  $(".lang li").remove();
  $(".lang").append(
    "<li class='kor'><button>韓語</button></li>",
    "<li class='eng'><button>英語</button></li>",
    "<li class='chi'><button>漢語</button></li>",
    "<li class='olla'><button>블라</button></li>"
  );
});
$(".lang .olla button").on("click", function () {
  $(".lang li").remove();
  $(".lang").append(
    "<li class='kor'><button><i class='fa-solid fa-earth-asia'></i></button></li>",
    "<li class='eng'><button><i class='fa-solid fa-earth-africa'></i></button></li>",
    "<li class='chi'><button><i class='fa-solid fa-earth-europe'></i></button></li>",
    "<li class='olla'><button>블라</button></li>"
  );
});
