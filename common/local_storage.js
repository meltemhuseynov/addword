function setLocalStorage(newWordList) {
  localStorage.setItem("wordList", JSON.stringify(newWordList));
}

function getLocalStorage() {
  if (localStorage.getItem("wordList") !== null) {
    return JSON.parse(localStorage.getItem("wordList"));
  }

  return [];
}
