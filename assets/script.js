// Get the current year
var currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;


// Copy IP function
function copyIp() {
  var tempInput = document.createElement("input");
  tempInput.value = "anarchymc.ro";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  showFloatingMessage("Server IP copied");
}

function showFloatingMessage(message) {
  var floatingMessage = document.getElementById("floatingMessage");
  floatingMessage.innerText = message;
  document.addEventListener("mousemove", updatePosition);
  floatingMessage.style.display = "block";
  setTimeout(function() {
    floatingMessage.style.display = "none";
    document.removeEventListener("mousemove", updatePosition);
  }, 800);
}

function updatePosition(event) {
  var floatingMessage = document.getElementById("floatingMessage");
  floatingMessage.style.top = event.clientY-50 + "px";
  floatingMessage.style.left = event.clientX-60 + "px";
}

// Loading Screen
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('loading-overlay').style.display = 'flex';
  setTimeout(function () {
    document.getElementById('loading-overlay').style.display = 'none';
  }, 1000);
});

// Back-To-Top
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > window.innerHeight / 1 || document.documentElement.scrollTop > window.innerHeight / 1) {
      backToTopButton.style.opacity = '1';
      backToTopButton.style.pointerEvents = 'auto';
    } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.style.pointerEvents = 'none';
    }
  });
  backToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Context Menu Disable
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Prevent Ctrl+Key
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
});

// Prevent Ctrl+Shift+Key
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.shiftKey) {
    e.preventDefault();
  }
});

// Mobile-Nav
const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  hamburgerMenu.classList.toggle("active");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    navAnimation("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    navAnimation("in", "out");
  }
}

hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
