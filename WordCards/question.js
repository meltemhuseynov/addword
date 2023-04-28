const wordList = getLocalStorage();

class Question {
  constructor(id, word, description, status) {
    this.id = id;
    this.word = word;
    this.description = description;
    this.status = status;
  }
}

let index = 0;
let questions = [];
var question;

for (index in wordList) {
  const { id, word, description, status } = wordList[index];
  question = new Question(id, word, description, status);
  questions.push(question);
}
