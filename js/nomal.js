document.addEventListener("DOMContentLoaded", function () {
  let nono;
  let dada;
  //정규식 이라고 부르는 친구들 범위 체크해주심 감사하신 분들임
  let num = /[0-9]/;
  let eng = /[a-zA-Z]/;
  let kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  let spe = /[~!@#\#$%<>^&*?]/;

  document.getElementById(`hell`).addEventListener(`input`, function () {
    nono = this.value;
  });
  document.getElementById(`submit`).addEventListener(`click`, function () {
    document.getElementById(`dada`).innerHTML = nono;
  });
  document.getElementById(`holl`).addEventListener(`input`, function () {
    dada = this.value;
  });
  document.getElementById(`sum`).addEventListener(`click`, function () {
    const cacae = document.getElementById(`caca`);
    cacae.innerHTML = "";
    if (num.test(dada)) {
      cacae.append(` 숫자 들어감 수고~`);
    }
    if (kor.test(dada)) {
      cacae.append(` 한글 들어감`);
    }
    if (eng.test(dada)) {
      cacae.append(` 영어도 쓸줄알어?`);
    }
    if (spe.test(dada)) {
      cacae.append(` 특수 문자 남발은 괜츈`);
    }
  });
});
