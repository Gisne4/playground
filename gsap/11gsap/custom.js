$(function () {
  gsap.utils.toArray("section").forEach((section) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    });
  });
});
