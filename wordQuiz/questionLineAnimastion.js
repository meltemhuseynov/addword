const quizUI = new QuizUI();

const startQuestionLine=()=> {
  if(window.innerWidth<768){
    line_width += 349 / wordCardsQuiz.questions.length;
    quizUI.question_line.style.width = line_width + "px";

  }else{
    line_width += 549 / wordCardsQuiz.questions.length;
    quizUI.question_line.style.width = line_width + "px";

  }
   

  
  }
  