let cardRotation = 0;

let flipCard= (select)=> {
  let status = select;

  if (cardRotation == 0) {
    status.classList.remove("incorrect");
    status.classList.add("correct");

    cardRotation = 1;
  } else {
    status.classList.remove("correct");
    status.classList.add("incorrect");
    cardRotation = 0;
  }
}
