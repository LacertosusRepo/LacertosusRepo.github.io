import * as version from './version.js';

  //Get package identifier on load
window.addEventListener('load', () => {
  const packageIdentifier = getURLParameter('package');
  loadJSONForPackage(packageIdentifier);
}, false);

  /*
   * URL Parameter getter
   * https://stackoverflow.com/questions/22607150/getting-the-url-parameters-inside-the-html-page
   */

function getURLParameter(parameter) {
  let pageURL = window.location.search.substring(1);
  let pageURLVariables = pageURL.split('&');

  for (let i = 0; i < pageURLVariables.length; i++) {
    let parameterName = pageURLVariables[i].split('=');

    if (parameterName[0] == parameter) {
      return parameterName[1];
    }
  }
}

  //Load package info from JSON file
async function loadJSONForPackage(packageIdentifier) {
  if (!packageIdentifier) {
    return;
  }

  const packageJSON = '/depictions/&ID!/info.json'.replace('&ID!', packageIdentifier);  
  const JSONRequest = await fetch(packageJSON, {cache: 'reload'});
  const packageData = await JSONRequest.json();

  if (JSONRequest.ok && packageData) {
      //Set Page Name
    const DEFAULT_NAME = 'Package Depiction';
    document.getElementById('depiction-name').textContent = packageData.name || DEFAULT_NAME;
    
      //Set Package Descritpion
    const DEFAULT_DESCRIPTION = 'No package description provided.';
    document.getElementById('depiction-description').textContent = packageData.description || DEFAULT_DESCRIPTION;
    
      //Set bug report URL
    document.getElementById('depiction-report-bug').href = 'https://github.com/LacertosusRepo/LacertosusRepo.github.io/issues/new?assignees=LacertosusRepo&labels=bug&template=bug-report.md&title=%5BBUG%5D+' + packageData.name;

      //Set Source Code URL
    if (packageData.source) {
      document.getElementById('depiction-source-url').href = packageData.source;
      document.getElementById('depiction-source-url').classList.remove('hidden');
    }
    
      //Set Depiction Tint Color    
    if (packageData.tint) {
      document.body.style.setProperty('--tint-color', packageData.tint);
    }
    
      //Set Package Compatibility Info
    if (packageData.compatibility) {
      setPackageCompatibility(packageData.compatibility);
      document.getElementById('depiction-compatibility').classList.remove('hidden');
    }

      //Create Screenshot Elements
    if (packageData.screenshots) {
      setPackageScreenshots(packageIdentifier, packageData.screenshots);
    }

      //Create Changelog Elements
    if (packageData.changelog) {
      setPackageChangelog(packageData.changelog);
    }

      //Create Package Icon
    if (packageData.hasicon) {
      setPackageIcon(packageIdentifier);
    }

  } else {
    console.log(JSONRequest.status, JSONRequest.ok);
  }
}

function setPackageIcon(identifier) {
  const icon = '/depictions/&ID!/icon.png'.replace('&ID!', identifier);
  
  const iconElement = document.getElementById('package-icon');
  iconElement.src = icon;

  iconElement.classList.remove('hidden');
}

function setPackageScreenshots(identifier, count) {
  const screenshotElement = document.getElementById('depiction-screenshot-carousel');

    //Add click to zoom action
  if (count >= 3) {
    screenshotElement.addEventListener('click', toggleScreenshotZoom);
    screenshotElement.style.justifyContent = 'flex-start';
  }

    //Add screenshots in order of index
  for (let i = 0; i < count; i++) {
    const screenshotItemElement = document.createElement('img');
    screenshotItemElement.classList.add('item');
    screenshotItemElement.src = '/depictions/&ID!/screenshots/&INDEX!.jpg'.replace('&ID!', identifier).replace('&INDEX!', i + 1);

    screenshotElement.appendChild(screenshotItemElement);

    let itemWidth = (count <= 3) ? 95 / count : 35;
    screenshotItemElement.style.width = itemWidth + '%';
  }
}

function setPackageChangelog(changelog) {
  if (Object.keys(changelog)[0].length > 1) {
      //Short changelog
    let lastUpdateVersion = Object.keys(changelog)[0];

    const versionNumberElement = document.createElement('label');
    versionNumberElement.innerHTML = 'What\'s New in ' + lastUpdateVersion;

    document.getElementById('depiction-last-update').appendChild(versionNumberElement);

    changelog[lastUpdateVersion].forEach(item => {
      const changeLogItemElement = document.createElement('p');
      changeLogItemElement.innerHTML = item;

      document.getElementById('depiction-last-update').appendChild(changeLogItemElement);
    });

      //Long changelog
    for (let versionNumber in changelog) {
      const versionNumberElement = document.createElement('label');
      versionNumberElement.innerHTML = versionNumber;

      document.getElementById('depiction-changelog').appendChild(versionNumberElement);

      changelog[versionNumber].forEach(item => {
        const changeLogItemElement = document.createElement('p');
        changeLogItemElement.innerHTML = item;

        document.getElementById('depiction-changelog').appendChild(changeLogItemElement);
      });
    }

  } else {
    const noChangesElement = document.createElement('p');
    noChangesElement.innerHTML = 'No changes listed for this package';

    document.getElementById('depiction-changelog').appendChild(noChangesElement);
  }
}

function setPackageCompatibility(compatibility) {
    //iOS Support Element
  let miniOS = compatibility.miniOSVersion;
  let maxiOS = compatibility.maxiOSVersion;
  if (miniOS || maxiOS) {
    if ((miniOS && maxiOS) && version.isLessThan(miniOS, maxiOS)) {
      deviceSupportsiOSRange(miniOS, maxiOS);

    } else {
      console.log("Min iOS and/or max iOS invalid. Min/Max: " + miniOS + "/" + maxiOS);
    }

    let iOSSupportString = getiOSSupportString(miniOS, maxiOS);

    const iOSSupportElement = document.createElement('label');
    iOSSupportElement.classList.add('item');
    iOSSupportElement.innerHTML = iOSSupportString;

    document.getElementById('depiction-compatibility').appendChild(iOSSupportElement);
  }

    //App Support Element
  if (compatibility.appName) {
    let appSupportString = getAppSupportString(compatibility.appName, compatibility.appVersion);

    const appSupportElement = document.createElement('label');
    appSupportElement.classList.add('item');
    appSupportElement.innerHTML = appSupportString;

    document.getElementById('depiction-compatibility').appendChild(appSupportElement);
  }
}

  //Get string with supported iOS range
function getiOSSupportString(miniOS, maxiOS) {
  const COMPAT_IOS_RANGE = 'Supports iOS <strong>&MIN! - &MAX!</strong>.';
  const COMPAT_IOS_MIN = 'Requires iOS <strong>&MIN!</strong> or higher.';
  const COMPAT_IOS_MAX = 'Requires iOS <strong>&MAX!</strong> or lower.';
  const COMPAT_IOS_UNSPECIFIED = 'Unknown iOS compatibility. <strong>Use at your own risk.</strong>';

  if (miniOS && maxiOS) {
    return COMPAT_IOS_RANGE.replace('&MIN!', miniOS).replace('&MAX!', maxiOS);
  }

  if (miniOS && !maxiOS) {
    return COMPAT_IOS_MIN.replace('&MIN!', miniOS);
  }

  if (!miniOS && maxiOS) {
    return COMPAT_IOS_MAX.replace('&MAX!', maxiOS);
  }
    
  return COMPAT_IOS_UNSPECIFIED;
}

function getAppSupportString(name, version) {
  const COMPAT_APP_VERSION = 'Supports &APPNAME! <strong>v&APPVERSION!</strong>. Other versions may also be supported.';
  const COMPAT_APP = 'Supports &APPNAME!. Unknown version compatibility.';

  if (name && version) {
    return COMPAT_APP_VERSION.replace('&APPNAME!', name).replace('&APPVERSION!', version);
  }

  return COMPAT_APP.replace('&APPNAME!', name);
}

  /*
   * Device Support
   */

function deviceSupportsiOSRange(miniOS, maxiOS) {
  const iOSVersion = version.getiOSVersion();

  if (iOSVersion != 0) {
    let iOSVersionString = String(iOSVersion.join('.'));
    let deviceIsSupported = getIsDeviceSupported(miniOS, maxiOS, iOSVersionString);
    let deviceSupportString = (deviceIsSupported) ? 'Your device is supported!' : 'Your device is not supported!';

    const deviceIsCompatibleElement = document.createElement('label');
    deviceIsCompatibleElement.classList.add('item', 'device-support');
    deviceIsCompatibleElement.innerHTML = deviceSupportString;

    const deviceSupportColor = (deviceIsSupported) ? '#088851' : '#D8322F';
    deviceIsCompatibleElement.style.setProperty('color', deviceSupportColor);

    document.getElementById('depiction-compatibility').appendChild(deviceIsCompatibleElement);
  }
}

function getIsDeviceSupported(miniOS, maxiOS, deviceiOS) {
    //Both min & max iOS provided
  if (miniOS && maxiOS && deviceiOS) {
    if (version.isBetweenRange(miniOS, maxiOS, deviceiOS)) {
      return true;

    } else {
      return false;
    }
  }

    //Only one constraining iOS provided
  if (miniOS || maxiOS && deviceiOS) {
    if (version.isGreaterThanOrEqualTo(deviceiOS, miniOS) || version.isLessThanOrEqualTo(deviceiOS, maxiOS)) {
      return true;

    } else {
      return true;
    }
  }  

  return false;
}

  /*
   * Toggle Screenshot Size
   */

function toggleScreenshotZoom() {
  const screenshotElements = document.getElementById('depiction-screenshot-carousel').children;

  for (let i = 0; i < screenshotElements.length; i++) {
    let childClassList = screenshotElements[i].classList;
    childClassList.toggle('item-zoom');
  }
}