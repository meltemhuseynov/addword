let filters = document.querySelectorAll(".filters span");

let filtersType = document.querySelectorAll("#filtersType li");

for (let span of filters) {
  span.addEventListener("click", () => {
    document.querySelector("span.active").classList.remove("active");
    span.classList.add("active");

    displayList(span.id, wordListUI.filtersTypeLi.firstChild.id);
  });
}

for (let tr of filtersType) {
  tr.firstChild.addEventListener("click", () => {
    displayList(wordListUI.SpanActive.id, tr.firstChild.id);
  });
}

function uptadeStatus(selectedTask) {

  let status;
  let tr = selectedTask.parentElement.parentElement;

  if (selectedTask.checked) {
    tr.classList.add("bg-success", "bg-opacity-10", "shadow-sm");
    status = "completed";
  } else {
    tr.classList.remove("bg-success", "bg-opacity-10", "shadow-sm");
    status = "pending";
  }

  for (let list of wordList) {
    if (list.id == selectedTask.id) {
      list.status = status;
    }
  }

  setLocalStorage(wordList);
  displayList(wordListUI.SpanActive.id, wordListUI.filtersTypeLi.firstChild.id);
}
