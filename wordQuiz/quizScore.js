
const quizshowScore=(knowWords, unknowWords) =>{
    let tag = `<span><b>Words learned:</b> ${knowWords}</span> <br><br> <span><b>Unlearned words:</b> ${unknowWords}</span>`;
    quizUI.score_text.innerHTML = tag;
  }
  
