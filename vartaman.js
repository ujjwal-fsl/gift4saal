const circle = document.getElementById('circle');
const audio = document.getElementById('audio');

circle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});
