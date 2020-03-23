/* -----------------------
    Switch to GIF when mouse hover project's image
  -----------------------*/
let mq = window.matchMedia('(min-width: 1248px)');
const images = document.querySelectorAll('.project-images');

//last is gif
let isMatch = !mq.matches;

function handleResize() {
  if (isMatch === mq.matches) {
    //Avoid repeatedly calling this function
    return;
  }
  isMatch = mq.matches;

  if (mq.matches) {
    for (let i = 0; i !== images.length; i += 1) {
      images[i].lastElementChild.classList.remove('dt-inline');
      images[i].firstElementChild.classList.remove('dt-hide');
    }
  }
}

for (let i = 0; i !== images.length; i += 1) {
  images[i].addEventListener('mouseover', () => {
    images[i].lastElementChild.classList.add('dt-inline');
    images[i].firstElementChild.classList.add('dt-hide');
  });
  images[i].addEventListener('mouseout', () => {
    images[i].lastElementChild.classList.remove('dt-inline');
    images[i].firstElementChild.classList.remove('dt-hide');
  });
}

handleResize();
window.addEventListener('resize', handleResize);

/* -----------------------
   Allow buttons to filter based on tags
  -----------------------*/
class Project {
  constructor(handle, searchString) {
    this.handle = handle;
    this.searchString = searchString;
  }
}

// Build a collection of project handle + searchString
let projectCollections = [];

const projectCards = document.querySelectorAll('.project-card');

for (let i = 0; i != projectCards.length; i += 1) {
  const obj = new Project(projectCards[i], projectCards[i].querySelector('.tag').innerHTML);
  projectCollections.push(obj);
}

// add filter functionality
function filterProject(searchString) {
  projectCollections.map(project => {
    if (project.searchString.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {
      project.handle.classList.remove('hide');
    } else {
      project.handle.classList.add('hide');
    }
  });
}

// Add event to filter buttons

const filters = document.querySelector('.project-filter');
const filterButtons = filters.querySelectorAll('button');
for (let i = 0; i != filterButtons.length; i += 1) {
  filterButtons[i].addEventListener('click', e => {
    if (filterButtons[i].value === 'All') {
      filterProject('');
    } else {
      filterProject(filterButtons[i].value);
    }
  });
}
