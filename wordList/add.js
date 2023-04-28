let editId;
let isEditTask;
const wordList = getLocalStorage();

btnAddNewWord.addEventListener("click", newTask);

wordListUI.meanInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
   wordListUI.meanInput.click();
    newTask(event)

  }
});

wordListUI.sentenceInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    wordListUI.sentenceInput.click();
    newTask(event)

  }
});


function newTask(event) {
  if (wordListUI.wordInput.value == "" || wordListUI.meanInput.value == "") {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    wordListUI.wordInput.classList.add("invalid", "is-invalid");
    wordListUI.meanInput.classList.add("invalid", "is-invalid");
  } else {
    if (isEditTask) {
      for (let list of wordList) {
        if (list.id == editId) {
          list.word = wordListUI.wordInput.value;
          list.description = wordListUI.meanInput.value;
          list.sentence = wordListUI.sentenceInput.value;
          list.type = wordListUI.typeInput.value;
        }
        isEditTask = false;
      }
    } else {
      nameError.classList.remove("visible");
      wordListUI.meanInput.classList.remove("invalid", "is-invalid");
      wordListUI.wordInput.classList.remove("invalid", "is-invalid");
      wordList.push({
        id: wordList.length + 1,
        word: wordListUI.wordInput.value,
        description: wordListUI.meanInput.value,
        sentence: wordListUI.sentenceInput.value,
        type: wordListUI.typeInput.value,
        status: "pending",
      });
    }
    wordListUI.wordInput.value = "";
    wordListUI.meanInput.value = "";
    wordListUI.sentenceInput.value = "";
    wordListUI.typeInput.value = "";

    setLocalStorage(wordList);
    element(totalPage, current_page);
 
  }
  event.preventDefault();
}

function editTask(taskId, taskWord, taskMean, taskSentence, taskType) {
  editId = taskId;
  isEditTask = true;
  wordListUI.wordInput.value = taskWord;
  wordListUI.meanInput.value = taskMean;
  wordListUI.sentenceInput.value = taskSentence;
  wordListUI.typeInput.value = taskType;
  wordListUI.wordInput.focus();
  wordListUI.meanInput.focus();
  wordListUI.sentenceInput.focus();
  wordListUI.typeInput.focus();
  wordListUI.wordInput.classList.add("active");
  wordListUI.meanInput.classList.add("active");
  wordListUI.sentenceInput.classList.add("active");
  wordListUI.typeInput.classList.add("active");
  wordListUI.displayPlus.classList.add("active");
}
let arrowUp=`<i class="fa-solid fa-arrow-up"></i>`;
let arrowDown= `<i class="fa-solid fa-arrow-down"></i>`

let btnPlus = document.querySelector(".btnPlus");


let j = 0;
btnPlus.addEventListener("click", () => {
  if (j == 0) {
    wordListUI.displayPlus.classList.add("active");
    btnPlus.innerHTML=arrowUp;

    j = 1;
  } else {
    btnPlus.innerHTML=arrowDown;



    wordListUI.displayPlus.classList.remove("active");
    j = 0;
  }
});
