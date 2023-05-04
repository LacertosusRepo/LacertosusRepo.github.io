window.addEventListener('load', () => {
  let pageURL = window.location.search.substring(1);
  if (pageURL.includes('com.lacertosusrepo.')) {
    redirectOldDepiction(pageURL);
  }
}, false);

function redirectOldDepiction(url) {
  let packageIdentifier = url.split('com.lacertosusrepo.')[1].replace('/', '');
  window.open('https://lacertosusrepo.github.io/resources/depiction.html?package=' + packageIdentifier, '_self');
}