let current_page = 1;
let rows = 15;

function displayPagination(items, rows_page, page) {
  page--;

  let start = rows_page * page;
  let end = start + rows_page;
  let paginationItems = items.slice(start, end);

  tempData = paginationItems;

  displayList(wordListUI.SpanActive.id, wordListUI.filtersTypeLi.firstChild.id);
}

let totalPage = 0;

function element(totalPage, page) {
  const wordList = getLocalStorage();

  totalPage = Math.ceil(wordList.length / rows);

  if (page > totalPage) {
    page--;
  }

  let liTag = "";
  let activeLi;
  let beforePages = page > 1 ? page - 1 : page;
  let afterPages = totalPage == page ? page : page + 1;

  if (page > 1) {
    liTag += `<li class="btn prev " onclick="element(totalPage,${
      page - 1
    })"> <i class="fas fa-angle-left mx-2"></i><span> Prev</span></li>`;
  }

  if (page > 5) {
    liTag += `<li class="numb"onclick="element(totalPage,1)"><span>1</span></li>`;
    if (page > 6) {
      liTag += `<li class="numb"><span>...</span></li>`;
    }
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalPage) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    if (page == pageLength) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" onclick="element(totalPage,${pageLength})"><span>${pageLength}</span></li>`;
  }
  if (page < totalPage - 1) {
    if (page < totalPage - 2) {
      liTag += `<li class="numb"><span>...</span></li>`;
    }
    liTag += `<li class="numb"onclick="element(totalPage, ${totalPage})"><span> ${totalPage}</span></li>`;
  }

  if (page < totalPage) {
    liTag += `<li class="btn next" onclick="element(totalPage,${
      page + 1
    })"><span>Next</span> <i class="fas fa-angle-right mx-2"></i></li>`;
  }

  wordListUI.ulTag.innerHTML = liTag;
  current_page = page;
  displayPagination(wordList, rows, page);
}

element(totalPage, current_page);
