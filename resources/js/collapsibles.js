window.addEventListener('load', () => {
  setupEventListeners();
}, false);

const collapsibleElements = document.getElementsByClassName('collapsible');

function setupEventListeners() {
  let i;

  for (i = 0; i < collapsibleElements.length; i++) {
    collapsibleElements[i].addEventListener('click', toggleCollapsible);
  }
}

function toggleCollapsible() {
  this.classList.toggle('collapsible-open');

  let content = this.nextElementSibling;
  content.style.maxHeight = (content.style.maxHeight) ? null : content.scrollHeight + 'px';
}