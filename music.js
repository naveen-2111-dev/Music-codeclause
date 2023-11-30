const audio = document.getElementById("play");
const playPauseIcon = document.getElementById("right");
const rangeInput = document.querySelector('input[type="range"]');

function PlayControler() {
  if (audio.paused) {
    audio.play();
    playPauseIcon.classList.remove("fa-caret-right");
    playPauseIcon.classList.add("fa-pause");
  } else {
    audio.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-caret-right");
  }
}

audio.addEventListener("timeupdate", function () {
  const percentage = (audio.currentTime / audio.duration) * 100;
  rangeInput.value = percentage;
});

rangeInput.addEventListener("input", function () {
  const getTime = (rangeInput.value / 100) * audio.duration;
  audio.currentTime = getTime;
});

audio.addEventListener("ended", function () {
  playPauseIcon.classList.remove("fa-pause");
  playPauseIcon.classList.add("fa-caret-right");
  rangeInput.value = 0;
});//when song completes the icon will automatically change to play icon....

