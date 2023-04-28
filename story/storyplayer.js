class StoryChapterPlayer {
  constructor(chapterList) {
    this.chapterList = chapterList;
    this.index = 0;
  }

  getChapter() {
    return this.chapterList[this.index];
  }
  

  next() {

    if (this.index + 1 < this.chapterList.length) {
      this.index++;

      document.querySelector(".controls_button").innerHTML

    } 
    if(this.index  == this.chapterList.length-1) {
      document.querySelector(".controls_button").lastElementChild.remove()
  }
 

  }

  prev() {
    if(this.index == 0) {
      document.querySelector(".controls_button").firstElementChild.remove()
  }
    if (this.index != 0) {
      this.index--;
    } 
  
  }

}


