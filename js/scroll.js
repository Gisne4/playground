$(function () {
  var templateIMG = [
    "img/template/avatar_hat.jpg",
    "img/template/boy.jpg",
    "img/template/closegirl.jpg",
    "img/template/girl_mountain.jpg",
    "img/template/girl_train.jpg",
    "img/template/girl.jpg",
    "img/template/man_bench.jpg",
    "img/template/natureboy.jpg",
    "img/template/girl_train.jpg",
  ];
  //var img = [];
  for (let index = 0; index < templateIMG.length; index++) {
    // img[index] = new Image();
    // img[index].src = templateIMG[index];
    // var element = img[index];
    // console.log(element);
    // document.body.appendChild(element);
    $(".con1 ul").append(`<li><img src='${templateIMG[index]}'></li>`);
    console.log(templateIMG[index]);
  }
  var fs = require("fs");
  fs.readdir("../img", (err, file_list) => {
    console.log(file_list);
  });
});
