let tempData = [];

const wordListUI = new WordListUI();

const showWordItem = (listItem, completed, checked) => {
  return ` 
    <tr id="tableList" class="${completed}">
      <th for="${listItem.id}"  scope="row">
      <input type="checkbox" ${checked}  onclick="uptadeStatus(this)" id="${listItem.id}" role="switch" class="form-check-input me-3 mt-3"> </th>
      </th>
      <td><label for="${listItem.id}">${listItem.word}</label></td>
      <td><label   for="${listItem.id}">${listItem.description}</label></td>
      <td class="tableResposive"><label for="${listItem.id}">${listItem.sentence}</label></td>
      <td class="tableResposive"><label for="${listItem.id}">${listItem.type}</label></td>
      <td class="closeOpen" > <i class="fa-solid fa-chevron-down"></i> </td>

      <td> 
        <div class="dropdown float-end">
          <button class="btn btn-link float-end dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a onclick='editTask(${listItem.id},"${listItem.word}","${listItem.description}","${listItem.sentence}","${listItem.type}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
            <li><a onclick="deleteTask(${listItem.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
          </ul>
        </div>
      </td>
   
    </tr> 

      <tr class="openList">
        <th scope="row"> <b>Sentence:</b> </th>
        <td colspan="5"> ${listItem.sentence}</td> 
      </tr>
      <tr class="openList">
      <th scope="row"><b>Type:</b></th>
      <td colspan="5">  ${listItem.type} </td>
      </tr>

    `;
};

const displayList = (filter, typeFilter) => {
  const wordList = getLocalStorage();
  wordListUI.taskList.innerHTML = "";
  if (wordList.length == 0) {
    wordListUI.taskList.innerHTML = "<p class='p-3 m-0'>Empty.</p>";
  } else {
    let wordListFilter = wordList;

    if (tempData.length > 0) {
      wordListFilter = tempData;
    }
    for (let listItem of wordListFilter) {
      const completed =
        listItem.status == "completed"
          ? "bg-success bg-opacity-10 shadow-sm"
          : "";

      const checked = listItem.status == "completed" ? "checked" : "";

      if (filter == listItem.status || filter == "all") {
        if (
          typeFilter.toLowerCase() == listItem.type.toLowerCase() ||
          typeFilter == "all"
        ) {
          wordListUI.taskList.insertAdjacentHTML(
            "beforeend",
            showWordItem(listItem, completed, checked)
          );
        }
      }
    }
  }

  tempData = [];
  let tableList = wordListUI.taskList.querySelectorAll("#tableList");
  for (let tableListItem of tableList) {
    tableListItem.lastElementChild.previousElementSibling.setAttribute("onclick", "selectedOpenTask(this)");
    
  }
};
let down=`<i class="fa-solid fa-chevron-down"></i> `;
let up=`<i class="fa-solid fa-chevron-up"></i> `;


let i = 0;
function selectedOpenTask(tableList) {
  if (i == 0) {
    tableList.parentElement.nextElementSibling.classList.add("active");
    tableList.parentElement.nextElementSibling.nextElementSibling.classList.add("active");
    tableList.innerHTML=up;
    i = 1;
  } else {
    tableList.parentElement.nextElementSibling.classList.remove("active");
    tableList.parentElement.nextElementSibling.nextElementSibling.classList.remove("active");
    tableList.innerHTML=down;

    ;

    i = 0;
  }
}
