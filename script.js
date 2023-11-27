document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box');
  let currentAudio = null;

  boxes.forEach(box => {
      box.addEventListener('click', function () {
          const audioSrc = this.getAttribute('data-src');
          playAudio(audioSrc);
      });
  });

  function playAudio(src) {
      if (currentAudio) {
          currentAudio.pause();
      }

      const audio = new Audio(src);
      audio.play();
      currentAudio = audio;
  }
});
