(function () {
  document.querySelectorAll('.jbb-lookbook-wrap').forEach(function (wrap) {
    var btn = wrap.querySelector('.jbb-lookbook-fs');
    if (!btn) return;
    btn.addEventListener('click', function () {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (wrap.requestFullscreen) {
        wrap.requestFullscreen();
      } else {
        // iOS Safari fallback
        wrap.classList.toggle('is-fullscreen');
      }
    });
  });
})();