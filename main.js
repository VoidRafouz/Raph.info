document.addEventListener("DOMContentLoaded", function(event) { 
  
        let toggleMenu = document.querySelector(".btn_side");
        let sidenav = document.getElementById("mySidenav");
        let overlay = document.getElementById("overlay");
        let topnav = document.querySelector(".top-navbar") || document.querySelector(".box1");
        const textElement = document.querySelector('.project');
        let mySearchBar = document.getElementById("projectSearch");
        let sticky = topnav ? topnav.offsetTop : 0;

        if (toggleMenu && sidenav && overlay) {
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
        }
      window.onscroll = function() {myFunction()};

  function myFunction() {
  if (!topnav) return;
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky");
    if (mySearchBar) mySearchBar.classList.add("sticky");
  } else {
    topnav.classList.remove("sticky");
    if (mySearchBar) mySearchBar.classList.remove("sticky");
  }
}

// Search functionality for nav links
const searchInput = document.getElementById('projectSearch');
const searchToggle = document.getElementById('searchToggle');
const navLinks = document.querySelectorAll('.nav-scroll .nav-link');
const projects = document.querySelectorAll('.project');

if (searchInput) {
  if (searchToggle) {
    searchToggle.addEventListener('click', function() {
      if (searchInput.style.visibility === 'hidden' || searchInput.style.visibility === '') {
        searchInput.style.visibility = 'visible';
        searchInput.focus();
      } else {
        searchInput.style.visibility = 'hidden';
        searchInput.value = '';
        navLinks.forEach(link => { link.style.display = ''; });
      }
    });
  }

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const resultsList = document.getElementById('searchResults');

    navLinks.forEach((link) => {
      const text = link.textContent.toLowerCase();
      const matches = searchTerm === '' || text.includes(searchTerm);
      link.style.display = matches ? '' : 'none';
    });

    if (resultsList) {
      resultsList.style.display = 'none';
    }
  });
}

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

// Convert vertical wheel to horizontal scroll for nav-scroll
document.addEventListener('DOMContentLoaded', () => {
  const navScroll = document.querySelector('.nav-scroll');
  if (navScroll) {
    navScroll.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        navScroll.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }
});