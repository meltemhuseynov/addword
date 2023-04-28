class WordCards {
  constructor(questions) {
    this.questions = questions;
    this.questionsIndex = 0;
    this.countCorrectAnswer = 0;
    this.options = [];
    this.countWrongAnswer = 0;
    this.correctAnswer = 0;
  }
  bringQuestion() {
    return this.questions[this.questionsIndex];
  }

  getQuestionOptions(correctAnswer) {
    this.options = [];

    this.options.push(correctAnswer);

    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * wordList.length);

      if (this.options.includes(wordList[randomIndex].description)) {
        --i;
      } else {
        this.options.push(wordList[randomIndex].description);
      }
    }

    const randomSwapIndex = Math.floor(Math.random() * 4);

    const currentOption = this.options[randomSwapIndex];

    this.options[randomSwapIndex] = correctAnswer;

    this.options[0] = currentOption;
  }
  answerCheck(answer) {
    return answer === this.bringQuestion().description;
  }
  showNumberQuestion(questionLine, totalQuestion) {
    let tag = ` <span class="badge">${questionLine}/${totalQuestion}</span> `;
    document.querySelector(".question-index").innerHTML = tag;
  }
}
