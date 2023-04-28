getLocalStorage();

const wordCardsQuiz = new WordCards(questions);

let line_width = 0;

quizUI.btnTest.addEventListener("click", function () {
  quizUI.quizbox.classList.add("active");
  quizUI.btnTest.classList.add("inactive");
  line_width = 0;
  quizUI.question_line.style.width = line_width + "px";
  questionDisplay();
  quizUI.next_btn.classList.remove("show");
  wordCardsQuiz.showNumberQuestion(
    wordCardsQuiz.questionsIndex + 1,
    wordCardsQuiz.questions.length
  );
});

quizUI.next_btn.addEventListener("click", function () {

  if (wordCardsQuiz.questions.length - 1 == wordCardsQuiz.questionsIndex+1 ) {
    let finish = `Finish`;
    quizUI.next_btn.innerHTML = finish;

  } 

    if (wordCardsQuiz.questions.length != wordCardsQuiz.questionsIndex + 1) {
      wordCardsQuiz.questionsIndex += 1;
      startQuestionLine();
      questionDisplay();
      quizUI.next_btn.classList.remove("show");
      wordCardsQuiz.showNumberQuestion(
        wordCardsQuiz.questionsIndex + 1,
        wordCardsQuiz.questions.length
      );
    } else {
      startQuestionLine();
      quizUI.quizbox.classList.remove("active");
      quizUI.score_box.classList.add("active");
      quizshowScore(
        wordCardsQuiz.countCorrectAnswer,
        wordCardsQuiz.countWrongAnswer
      );
    }
  
});


  quizUI.btn_end.addEventListener("click", () => {
    window.location.reload();
  });

  quizUI.btn_replace.addEventListener("click", () => {
    wordCardsQuiz.questionsIndex = 0;
    wordCardsQuiz.countCorrectAnswer = 0;
    wordCardsQuiz.countWrongAnswer = 0;
    quizUI.btn_test.click();
    quizUI.score_box.classList.remove("active");
  });


