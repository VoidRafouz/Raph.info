document.addEventListener("DOMContentLoaded", function(event) { 
  
        let toggleMenu = document.querySelector(".btn_side");
        let sidenav = document.getElementById("mySidenav");
        let overlay = document.getElementById("overlay");
        let topnav = document.querySelector(".box1");
        const textElement = document.querySelector('.project');
        let mySearchBar = document.getElementById("projectSearch");
        let sticky = topnav.offsetTop;

         toggleMenu.addEventListener("click", function(e) {
         e.stopPropagation();
        sidenav.classList.toggle("mySidenav_open");
        overlay.classList.toggle("active");
    });

      document.body.addEventListener("click", function(e){
        if(e.target !== toggleMenu && sidenav.classList.contains("mySidenav_open")){
          sidenav.classList.remove("mySidenav_open");
          overlay.classList.remove("active");
        }
      });
      window.onscroll = function() {myFunction()};

  function myFunction() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky");
    mySearchBar.classList.add("sticky");
  } else {
    topnav.classList.remove("sticky");
    mySearchBar.classList.remove("sticky");
  }
}

// Search functionality for projects
const searchInput = document.getElementById('projectSearch');
const searchToggle = document.getElementById('searchToggle');
const projects = document.querySelectorAll('.project');

searchToggle.addEventListener('click', function() {
  if (searchInput.style.visibility === 'hidden') {
    searchInput.style.visibility = 'visible';
    searchInput.focus();
  } else {
    searchInput.style.visibility = 'hidden';
    searchInput.value = '';
    // Show all projects when hiding search
    projects.forEach(project => {
      project.style.display = 'block';
    });
  }
});

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const resultsList = document.getElementById('searchResults');
  
  if (searchTerm === '') {
    resultsList.style.display = 'none';
    return;
  }
  
  resultsList.innerHTML = '';
  let hasResults = false;
  
  projects.forEach((project, index) => {
    const title = project.querySelector('h3').textContent.toLowerCase();
    const description = project.querySelector('p').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      hasResults = true;
      const li = document.createElement('li');
      li.textContent = project.querySelector('h3').textContent;
      li.style.cssText = 'padding: 10px; cursor: pointer; hover: background #f0f0f0;';
      li.onclick = () => {
        project.scrollIntoView({ behavior: 'smooth' });
        searchInput.value = '';
        resultsList.style.display = 'none';
      };
      resultsList.appendChild(li);
    }
  });
  
  resultsList.style.display = hasResults ? 'block' : 'none';
});

const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

});