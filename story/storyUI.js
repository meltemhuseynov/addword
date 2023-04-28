class StoryUI {
  constructor() {
    this.prev = document.querySelector(".controls_button #prev");
    this.play = document.querySelector(".controls #play");
    this.next = document.querySelector(".controls_button #next");
    this.audio = document.querySelector(".controls .audio");
    this.storyControls = document.querySelector(".storyControls");
    this.card_body = document.querySelector("#story_body");
    this.title = document.querySelector(".title");
    this.duration = document.querySelector("#duration");
    this.current_time = document.querySelector("#current-time");
    this.progressBar = document.querySelector("#progress-bar");
    this.volume_bar = document.querySelector("#volume-bar");
    this.volume = document.querySelector("#volume");
    this.list = document.querySelector("#list");
  }
}
