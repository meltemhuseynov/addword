function deleteTask(id) {
  const wordList = getLocalStorage();

  let deletedId;
  for (index in wordList) {
    if (wordList[index].id == id) {
      deletedId = index;
      console.log(id);
    }
  }
  wordList.splice(deletedId, 1);
  setLocalStorage(wordList);
  element(totalPage, current_page);
}
