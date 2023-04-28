class WordListUI {
  constructor() {
    this.wordInput = document.querySelector("#wordTaskName");
    this.meanInput = document.querySelector("#meanTaskName");
    this.sentenceInput = document.querySelector("#sentenceTaskName");
    this.typeInput = document.querySelector("#typeTask");
    this.filters = document.querySelectorAll(".filters span");
    this.filtersType = document.querySelectorAll("#filtersType li");
    this.taskList = document.getElementById("task-list");
    this.ulTag = document.querySelector(".paginationUl");
    this.btnAddNewWord = document.querySelector("#btnAddNewWord");
    this.SpanActive = document.querySelector("span.active");
    this.filtersTypeLi = document.querySelector("#filtersType li");
    this.displayPlus = document.querySelector("#displayPlus");
  }
}
