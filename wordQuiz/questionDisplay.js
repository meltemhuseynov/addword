const questionDisplay=()=> {
    wordCardsQuiz.getQuestionOptions(wordCardsQuiz.bringQuestion().description);
  
    let tag = `<span>${wordCardsQuiz.bringQuestion().word}</span>`;
  
    const chooses = ["a", "b", "c ", "d"];
    let option = "";
    for (let i = 0; i < 4; i++) {
      option += `  <div class="option">
                    <span><b>${chooses[i]}:</b> <span>${wordCardsQuiz.options[i]}</span> </span>
                 </div>`;
  
      quizUI.optionsList.innerHTML = option;
    }
    quizUI.question_text.innerHTML = tag;
  
    const options = quizUI.optionsList.querySelectorAll(".option");
  
    for (opt of options) {
      opt.setAttribute("onclick", "selectedTask(this)");
    }
  }