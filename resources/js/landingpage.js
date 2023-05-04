window.addEventListener('load', () => {
    //Copy function setup
  document.getElementById('copyRepoURL').addEventListener('click', copyRepoURL, false);

    //Header animation setup
  setInterval(switchHandle, 7500);
}, false);

  /*
   * Copy Repo URL Function
   */

function copyRepoURL() {
  navigator.clipboard.writeText('https://LacertosusRepo.github.io/');
}

  /*
   * Animate Header Handle
   */

  const handles = ["@LacertosusDeus", "LacertosusRepo", "The Confused One"];
  let currentIndex = 0;

    //Animation Variables (ms)
  const handleDuration = 500;
  const handleDelay = handleDuration + 100;
  const handleOpacity = 0.9;

function switchHandle() {
  const handleElement = document.getElementById('handle-subtitle');
  const newHandle = handles[currentIndex];
  currentIndex = (currentIndex + 1) % handles.length;

  _animateOut(handleElement, handleDuration, handleDelay, handleOpacity, function block() {
    handleElement.innerText = newHandle;
    
    _animateIn(handleElement, handleDuration, 0, handleOpacity, null);
  });
}

function _animateOut(element, duration, delay, startOpacity, callback) {
  element.animate([
    {
      opacity: startOpacity,
      transform: 'translateX(0%)'
    },
    {
      opacity: '0.0',
      transform: 'translateX(100%)'
    }
  ], {
    duration: duration,
    easing: 'ease-in',
    fill: 'both'
  });

  if (callback) {
    setTimeout(callback, delay);
  }
}

function _animateIn(element, duration, delay, endOpacity, callback) {
  element.animate([
    {
      opacity: '0.0',
      transform: 'translateX(-100%)'
    },
    {
      opacity: endOpacity,
      transform: 'translateX(0%)'
    }
  ], {
    duration: duration,
    easing: 'ease-out',
    fill: 'both'
  });

  if (callback) {
    setTimeout(callback, delay);
  }
}