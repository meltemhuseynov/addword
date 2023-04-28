class WordCardUI {
  knowWords = 0;
  unknowWords = 0;

  constructor() {
    (this.btn_start = document.querySelector(".btn_start")),
      (this.flip_card = document.querySelector(".flip-card")),
      (this.btn_check_know = document.querySelector(".btn_check_know")),
      (this.flip_card_front = document.querySelector(".flip-card-front")),
      (this.flip_card_back = document.querySelector(".flip-card-back")),
      (this.btn_check_unknow = document.querySelector(".btn_check_unknow")),
      (this.btn_replace = document.querySelector(".btn_replace")),
      (this.btn_end = document.querySelector(".btn_end")),
      (this.score_box = document.querySelector(".score_box")),
      (this.question_index = document.querySelector(".question-index"));
  }

  showQuestion(questions) {
    let ques = ` <h3>${questions.word}</h3>`;
    let answer = ` <h3>${questions.description}</h3>`;
    this.flip_card_front.innerHTML = ques;
    this.flip_card_back.innerHTML = answer;
  }

  showNumberQuestion(questionLine, totalQuestion) {
    let tag = ` <span class="badge">${questionLine}/${totalQuestion}</span> `;
    document.querySelector(".question-index").innerHTML = tag;
  }

  showScore(knowWords, unknowWords) {
    let tag = `<span><b>Learned words:</b> ${knowWords}</span> <br><br> <span><b>Unlearned words:</b> ${unknowWords}</span>`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
  }
}
