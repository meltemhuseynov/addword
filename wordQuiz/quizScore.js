
const quizshowScore=(knowWords, unknowWords) =>{
    let tag = `<span><b>Bilinen kelimeler:</b> ${knowWords}</span> <br><br> <span><b>Öğrenilmeye devam edilen kelimeler:</b> ${unknowWords}</span>`;
    quizUI.score_text.innerHTML = tag;
  }
  