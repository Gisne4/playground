$(function () {
  Splitting();

  setTimeout(() => {
    $("#header").addClass("motion");
  }, 500);

  setTimeout(() => {
    const text = "생각의 틈을 발굴하고 확장하는 웹디자인 서유라입니다"; // 타이핑할 문구
    let index = 0;
    let speed = 100; // 글자 타이핑 속도 (밀리초 단위)

    function typeWriter() {
      if (index < text.length) {
        document.getElementById("text").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  }, 1500);

  /*con02*/
  //   gsap.registerPlugin(ScrollTrigger);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "0% 90%",
        end: "80% 0%",
        scrub: 2,
        // markers: true,
      },
    })
    .fromTo(
      ".circle",
      { width: 0, height: 0, duration: 10, top: "3%" },
      { width: "2500px", height: "2500px", duration: 10, top: "40%" }
    );

  //.con02 .text

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02 .text",
        start: "0% 80%",
        end: "100% 50%",
        scrub: 2,
        // markers: true,
      },
    })
    .fromTo(
      ".text",
      { top: "20%", opacity: 0, duration: 15 },
      { top: "10%", opacity: 1, duration: 15 }
    );

  /*con03*/
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con03",
        start: "0% 100%",
        end: "0% 20%",
        scrub: 2,
        // markers: true,
      },
    })
    .fromTo(
      ".con03 .my",
      { x: "-100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    )
    .fromTo(
      ".con03 .work",
      { x: "100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    );
  //body 배경색 검정, 글자색 흰색,  title고정
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "0% 100%",
        end: "0% 100%",
        scrub: 2,
        // markers: true,
      },
    })
    .to(
      "body",
      { backgroundColor: "#000", color: "#fff", ease: "none", duration: 5 },
      0
    )
    .to(
      ".con03 .title",
      {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        ease: "none",
        duration: 5,
      },
      0
    );

  //workList 끝날때  title글자가 화면 밖으로 사라지도록

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "100% 50%",
        end: "100% 0%",
        scrub: 2,
        markers: true,
      },
    })
    .to(
      ".con03 .my",

      { x: "-100%", ease: "none", duration: 5 },
      0
    )
    .to(
      ".con03 .work",

      { x: "100%", ease: "none", duration: 5 },
      0
    );

  /*con04*/
  $(function () {
    $(".con04 .list").simplyScroll({
      speed: 4,
      pauseOnHover: false,
      pauseOnTouch: false,
    });
    // $(".menuOpen").on("click", function () {
    //   $(".gnb").toggleClass("on");
    //   $(this).toggleClass("on");
    //   $("body").toggleClass("on");
    // });
  });
});
