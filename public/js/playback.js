$(document).ready(() => {
  var video = $("#bg_video");
  
  function setPlaybackRate() {
    video.playbackRate = 2;
    console.log(video.playbackRate);
  }

  setPlaybackRate();
})