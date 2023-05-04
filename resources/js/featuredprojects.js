window.addEventListener('load', () => {
  loadJSONForFeaturedProjects();
}, false);

async function loadJSONForFeaturedProjects() {
  const featuredProjectsJSON = '/resources/featuredprojects.json';
  const JSONRequest = await fetch(featuredProjectsJSON, {cache: 'reload'});
  const featuredProjectsData = await JSONRequest.json();
  
  if (JSONRequest.ok && featuredProjectsData) {
    const featuredProjectsArray = featuredProjectsData.projects;

    featuredProjectsArray.forEach(async project => {
        //Reduce, reuse, recycle. Attempt to grab any information from the existing depiction page based on the package identifier
      if (project.packageidentifier) {
        let packageData = await getInforForIdentifier(project.packageidentifier);
 
        if (packageData) {
          project.name = (!project.name) ? packageData.name : project.name;
          project.description = (!project.description) ? packageData.description : project.description;
          project.link = (!project.link) ? packageData.source : project.link;
          project.tint = (!project.tint) ? packageData.tint : project.tint;
          project.preview = (!project.preview) ? packageData.preview : project.preview;

          if (packageData.hasicon) {
            const existingIcon = '/depictions/&ID!/icon.png'.replace('&ID!', project.packageidentifier);
            project.icon = existingIcon;
          }
        }
      }

      let projectFieldset = document.createElement('fieldset');
      document.getElementById('featured-projects').appendChild(projectFieldset);

      let accentElement = document.createElement('div');
      accentElement.classList.add('accent');
      accentElement.style.setProperty('background-color', project.tint);
      projectFieldset.appendChild(accentElement);

      let headerElement = document.createElement('label');
      headerElement.classList.add('heading');
      headerElement.innerHTML = project.name;
      headerElement.style.setProperty('background-color', project.tint);
      projectFieldset.appendChild(headerElement);

      if (project.preview) {
        let previewElement = document.createElement('img');
        previewElement.classList.add('preview');
        previewElement.src = project.preview;
        projectFieldset.appendChild(previewElement);
      }

      let descriptionElement = document.createElement('p');
      descriptionElement.innerHTML = project.description;
      projectFieldset.appendChild(descriptionElement);

      if (!project.preview) {
        descriptionElement.style.marginTop = '44px';
      }

      let buttonCellElement = createButtonCellElement(project.icon, project.link, project.tint, project.buttonTitle);
      projectFieldset.appendChild(buttonCellElement);
    });

  } else {
    console.log(JSONRequest.status, JSONRequest.ok);
  }
}

async function getInforForIdentifier(identifier) {
  let packageJSON = '/depictions/&ID!/info.json'.replace('&ID!', identifier);
  let JSONRequest = await fetch(packageJSON, { cache: 'reload' });
  let packageData = await JSONRequest.json();

  if (JSONRequest.ok) {
    return packageData;
  }
}

function createButtonCellElement(icon, link, tint, buttonTitle) {
  const cellElement = document.createElement('a');
  cellElement.href = link;
  cellElement.rel = 'noopener noreferrer';
  
  const cellDivSubelement = document.createElement('div');
  cellDivSubelement.classList.add('cell');
  cellElement.appendChild(cellDivSubelement);

  const cellArrowSubelement = document.createElement('img');
  cellArrowSubelement.classList.add('arrow');
  cellDivSubelement.appendChild(cellArrowSubelement);

  if (icon) {
    const cellIconSubelement = document.createElement('img');
    cellIconSubelement.classList.add('icon');
    cellIconSubelement.src = icon;
    cellDivSubelement.appendChild(cellIconSubelement);
  }

  const cellLabelSubelement = document.createElement('label');
  cellLabelSubelement.innerHTML = buttonTitle || 'Check it out!';
  cellDivSubelement.appendChild(cellLabelSubelement);

  return cellElement;
}
