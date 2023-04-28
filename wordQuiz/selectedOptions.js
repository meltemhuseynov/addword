const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';


const selectedTask=(option)=> {
  let answer = option.querySelector("span span").textContent;

  if (wordCardsQuiz.answerCheck(answer)) {
    wordCardsQuiz.countCorrectAnswer += 1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon);
    wordList[wordCardsQuiz.questionsIndex].status = "completed";
    setLocalStorage(wordList);
  } else {
    wordCardsQuiz.countWrongAnswer += 1;
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", incorrectIcon);
    wordList[wordCardsQuiz.questionsIndex].status = "pending";
    setLocalStorage(wordList);
  }
  for (let i = 0; i < quizUI.optionsList.children.length; i++) {
    quizUI.optionsList.children[i].classList.add("disable");
  }
  quizUI.next_btn.classList.add("show");
}