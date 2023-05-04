function getiOSVersion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    const version = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)];
    
  } else {
    return 0;
  }
}

/*
* Version Compare
* https://github.com/gabe0x02/version_compare
*/

function compare(versionOne, versionTwo, options) {
  function cropDash(s) {
    let idx = s.indexOf('-');
    if (idx !== -1) {
      s = s.substring(0, idx);
    }

    return s;
  }

  versionOne = cropDash(versionOne);
  versionTwo = cropDash(versionTwo);
  let lexicographical = options && options.lexicographical;
  let zeroExtend = options && options.zeroExtend;
  let versionOneParts = versionOne.split('.');
  let versionTwoParts = versionTwo.split('.');

  function isValidPart(x) {
    return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
  }

  if (!versionOneParts.every(isValidPart) || !versionTwoParts.every(isValidPart)) {
    return NaN;
  }

  if (zeroExtend) {
    while (versionOneParts.length < versionTwoParts.length) {
      versionOneParts.push('0');
    }

    while (versionTwoParts.length < versionOneParts.length) {
      versionTwoParts.push('0');
    }
  }

  if (!lexicographical) {
    versionOneParts = versionOneParts.map(Number);
    versionTwoParts = versionTwoParts.map(Number);
  }

  for (let i = 0; i < versionOneParts.length; i++) {
    if (versionTwoParts.length == i) {
      return 1;
    }

    if (versionOneParts[i] == versionTwoParts[i]) {
      continue;

    } else if (versionOneParts[i] > versionTwoParts[i]) {
      return 1;

    } else {
      return -1;
    }
  }

  if (versionOneParts.length != versionOneParts.length) {
    return -1;
  }

  return 0;
}

function isEqualTo(versionOne, versionTwo, options) {
  return compare(versionOne, versionTwo, options) === 0;
}

function isGreaterThan(versionOne, versionTwo, options) {
  return compare(versionOne, versionTwo, options) > 0;
}

function isGreaterThanOrEqualTo(versionOne, versionTwo, options) {
  return compare(versionOne, versionTwo, options) >= 0;
}

function isLessThan(versionOne, versionTwo, options) {
  return compare(versionOne, versionTwo, options) < 0;
}

function isLessThanOrEqualTo(versionOne, versionTwo, options) {
  return compare(versionOne, versionTwo, options) <= 0;
}

function isBetweenRange(versionMin, versionMax, version, options) {
  return (isGreaterThanOrEqualTo(version, versionMin, options) && isLessThanOrEqualTo(version, versionMax, options));
}

export { getiOSVersion, compare, isEqualTo, isGreaterThan, isGreaterThanOrEqualTo, isLessThan, isLessThanOrEqualTo, isBetweenRange };