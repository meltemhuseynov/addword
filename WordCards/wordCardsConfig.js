

const wordCards = new WordCards(questions);


const wordCardUI = new WordCardUI();

wordCardUI.btn_start.addEventListener("click", function () {
  wordCardUI.flip_card.classList.add("active");
  wordCardUI.btn_start.classList.add("inactive");
  wordCardUI.showQuestion(wordCards.bringQuestion());
  wordCardUI.showNumberQuestion(
    wordCards.questionsIndex + 1,
    wordCards.questions.length
  );
  wordList[wordCards.questionsIndex].status = "completed";
  setLocalStorage(wordList);
});

wordCardUI.btn_check_know.addEventListener("click", function () {
  if (wordCards.questions.length != wordCards.questionsIndex + 1) {
    wordCardUI.flip_card_front.classList.remove("correct");
    wordCardUI.flip_card_front.classList.add("correct");
    wordCardUI.flip_card_back.classList.remove("correct");
    wordCardUI.flip_card_back.classList.add("correct");

    setTimeout(() => {
      wordCardUI.flip_card_front.classList.remove("correct");
      wordCardUI.flip_card_back.classList.remove("correct");
      wordList[wordCards.questionsIndex].status = "completed";
      setLocalStorage(wordList);
      wordCards.questionsIndex += 1;
      wordCardUI.showQuestion(wordCards.bringQuestion());
      wordCardUI.showNumberQuestion(
        wordCards.questionsIndex + 1,
        wordCards.questions.length
      );
      wordCards.countCorrectAnswer+=1;
    }, 500);
  } else {
    wordCards.countCorrectAnswer+=1;
    wordCardUI.flip_card.classList.remove("active");
    document.querySelector(".score_box").classList.add("active");
    wordCardUI.showScore(
      wordCards.countWrongAnswer,
      wordCards.countCorrectAnswer
    );
    wordList[wordCards.questionsIndex].status = "completed";
    setLocalStorage(wordList);
  }
});

wordCardUI.btn_check_unknow.addEventListener("click", function () {
  if (wordCards.questions.length != wordCards.questionsIndex + 1) {
    wordCardUI.flip_card_front.classList.remove("incorrect");
    wordCardUI.flip_card_front.classList.add("incorrect");
    wordCardUI.flip_card_back.classList.remove("incorrect");
    wordCardUI.flip_card_back.classList.add("incorrect");

    setTimeout(() => {
      wordCardUI.flip_card_front.classList.remove("incorrect");
      wordCardUI.flip_card_back.classList.remove("incorrect");
      wordList[wordCards.questionsIndex].status = "pending";
      setLocalStorage(wordList);
      wordCards.questionsIndex += 1;
      wordCardUI.showQuestion(wordCards.bringQuestion());
      wordCardUI.showNumberQuestion(
        wordCards.questionsIndex + 1,
        wordCards.questions.length
      );
      wordCards.countWrongAnswer+=1;

    }, 500);
  } else {
    wordCards.countWrongAnswer+=1;
    wordCardUI.flip_card.classList.remove("active");
    document.querySelector(".score_box").classList.add("active");
    wordCardUI.showScore(
      wordCards.countWrongAnswer,
      wordCards.countCorrectAnswer
    );
    wordList[wordCards.questionsIndex].status = "pending";
    setLocalStorage(wordList);
  }
});

wordCardUI.btn_end.addEventListener("click", () => {
  window.location.reload();
});
wordCardUI.btn_replace.addEventListener("click", () => {
  wordCards.questionsIndex = 0;
  wordCards.countCorrectAnswer = 0;
  wordCards.countWrongAnswer = 0;
  wordCardUI.btn_start.click();
  wordCardUI.score_box.classList.remove("active");
});
