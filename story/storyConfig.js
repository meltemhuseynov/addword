

const player = new StoryChapterPlayer(chapterList);

const storyUI= new StoryUI();

window.addEventListener("load", () => {
  const StoryName = player.getChapter();
  display(StoryName);
  storyUI.play.classList = "fa-solid fa-play me-3 mt-1";
  storyUI.progressBar.value = 0;
  displayStoryList(player.chapterList);
  isPlaying();
  

});

const display = (StoryName) => {
  storyUI.audio.src = StoryName.storyVoice.voice;

  storyUI.card_body.innerHTML = StoryName.chapters.chapter;
  let tag = `<h5>${StoryName.chapterNames.chapterName}</h5>`;

  storyUI.title.innerHTML = tag;
};

storyUI.prev.addEventListener("click", () => {
  prevVoice();
  storyUI.play.classList = "fa-solid fa-play  me-3 mt-1";
  storyUI. progressBar.value = 0;
});

const prevVoice = () => {
  player.prev();
 
  const StoryName = player.getChapter();
  display(StoryName);
  isPlaying();

};

storyUI.next.addEventListener("click", () => {
  nextVoice();
  storyUI.play.classList = "fa-solid fa-play me-3 mt-1";
  storyUI.progressBar.value = 0;
});

const nextVoice = () => {
  player.next();
  const StoryName = player.getChapter();
  display(StoryName);
  isPlaying();

};

storyUI.play.addEventListener("click", () => {
  const isVoicePlay = storyUI.storyControls.classList.contains("playing");
  isVoicePlay ? pauseVoice() : playVoice();
});

const pauseVoice = () => {
  storyUI.storyControls.classList.remove("playing");
  storyUI.play.classList = "fa-solid fa-play  me-3 mt-1";
  storyUI.audio.pause();
};

const playVoice = () => {
  storyUI.storyControls.classList.add("playing");
  storyUI.play.classList = "fa-solid fa-pause  me-3 mt-1";

  storyUI.audio.play();
};

const calculateTime = (totalSecond) => {
  const minute = Math.floor(totalSecond / 60);
  const second = Math.floor(totalSecond % 60);
  const updateSecond = second < 10 ? `0${second}` : `${second}`;
  const result = `${minute}: ${updateSecond}`;
  return result;
};

storyUI.audio.addEventListener("loadedmetadata", () => {
  storyUI.duration.textContent = calculateTime(storyUI.audio.duration);
  storyUI.progressBar.max = Math.floor(storyUI.audio.duration);
});

storyUI.audio.addEventListener("timeupdate", () => {
  storyUI.progressBar.value = Math.floor(storyUI.audio.currentTime);
  storyUI.current_time.textContent = calculateTime(storyUI.progressBar.value);
});

storyUI.progressBar.addEventListener("input", () => {
  storyUI.current_time.textContent = calculateTime( storyUI.progressBar.value);

  storyUI.audio.currentTime =  storyUI.progressBar.value;
});

let volumeStade = "unmute";

storyUI.volume_bar.addEventListener("input", (e) => {
  const value = e.target.value;
  storyUI.audio.volume = value / 100;
  if (value == 0) {
    storyUI.audio.muted = true;
    volumeStade = "mute";
    storyUI.volume.classList = "fa-solid fa-volume-xmark me-2";
  } else {
    storyUI.audio.muted = false;
    volumeStade = "unmute";
    storyUI.volume.classList = "fa-solid fa-volume-high me-2";
  }
});

storyUI.volume.addEventListener("click", () => {
  if (volumeStade === "unmute") {
    storyUI.audio.muted = true;
    volumeStade = "mute";
    storyUI.volume.classList = "fa-solid fa-volume-xmark me-2";
    storyUI.volume_bar.value = 0;
  } else {
    storyUI.audio.muted = false;
    volumeStade = "unmute";
    storyUI.volume.classList = "fa-solid fa-volume-high me-2";
    storyUI.volume_bar.value = 100;
  }
});

const displayStoryList = (listChapter) => {
  for (i = 0; i < listChapter.length; i++) {
    let liTag = `   
        <li li-index='${i}' onclick="selectedChapter(this)" class="list-group-item">
          <span>${listChapter[i].getName()}</span>
          </li>`;

          storyUI.list.insertAdjacentHTML("beforeend", liTag);
  }
};

const selectedChapter = (li) => {
  player.index = li.getAttribute("li-index");
  display(player.getChapter());
  playVoice();
  isPlaying();
};

const isPlaying = () => {
  for (let li of list.querySelectorAll("li")) {
    if (li.classList.contains("playing")) {
      li.classList.remove("playing");
    }
    if (li.getAttribute("li-index") == player.index) {
      li.classList.add("playing");
    }
  }
};


