///////////////////////////////////////////////////////////////////////////////////////
//Bar

//Funkcja odpowiadajaca za nawigacje miedzy ekranami strony
function scrollToElement(className) {
  const element = document.getElementsByClassName(className)[0];
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

//Otwieranie menu MOBILE
function initializeMenu() {
  const menuIcon = document.querySelector(".menu_button");
  const menu = document.querySelector(".menu");
  const bars = document.querySelectorAll(".menu_bar");

  let isMenuOpen = false;

  menuIcon.addEventListener('click', function () {
    isMenuOpen = !isMenuOpen;

    // Tutaj zmieniaj zachowanie hideElement w zależności od isMenuOpen
    if (isMenuOpen) {
      hideElement(".InformationPageProgresBarText", 0);
    } else {
      hideElement(".InformationPageProgresBarText", 1);
    }

    menu.classList.toggle("active", isMenuOpen);

    bars.forEach((bar, index) => {
      if (index !== 1) {
        bar.classList.toggle("hidden", isMenuOpen);
      }
    });
  });
}


//Zamykanie menu MOBILE
function CloseMenu() {
  const menu = document.querySelector(".menu");
  const bars = document.querySelectorAll(".menu_bar");

  menu.classList.remove("active");
  hideElement(".InformationPageProgresBarText",1);
  bars.forEach((bar, index) => {
    if (index !== 1) {
        bar.classList.remove("hidden");
    }
});
}

//Ukrywanie elementu podczas otwartego menu
function hideElement(selector,n) {
  var element = document.querySelector(selector);
  if (element) {
    if(n==0){
      element.style.display = "none";
    }
    else{
      element.style.display = "flex";
    }
  } else {
    console.log("Element not found");
  }
}

const HomePage = document.querySelector('.HomePagePortfolio');
const BarLayer = document.querySelector('.BarLayer');

const PositionChecker = new IntersectionObserver((entries, PositionChecker) => {
  if (entries[0].isIntersecting) {
    console.log("set");
    hideElement(".ScrollButton", 0);
    BarLayer.classList.add("BarHomePage");
  }
  else{
    console.log("unset");
    hideElement(".ScrollButton", 1);
    BarLayer.classList.remove("BarHomePage");
  }
},);

PositionChecker.observe(HomePage);




///////////////////////////////////////////////////////////////////////////////////////
//Information

//Funkcja odpowiedzialna za wypelnienie pasków postępu
function FillBarsSequentially() {
  const totalBars = 4;
  for (let i = 0; i < totalBars; i++) {
    setTimeout(() => {
      FillBar(i, 100);
      ResetBar();
    }, i * 2200); 
  }  
}

//Funkcja odpowiedzialna za wypelnienie konkretnego paska postępu
function FillBar(x, procent) {
  const barfilled = document.getElementsByClassName('InformationPageProgresBarUpdate')[0];
  const bartext = document.getElementsByClassName('InformationPageProgresBarText')[0];

  const done = document.getElementsByClassName('InformationContainerDoneImg')[x];
  barfilled.style.transition = "width 2s ease-out 200ms";
  let progress = 0;
  const interval = setInterval(() => {
    if (progress <= procent) {
      const length = progress + "%";
      barfilled.style.width = length;
      if (progress === procent) {
        bartext.innerHTML = 'DONE';
        done.style.width="50px";
        console.log("done");
      }
      progress++;
    } else {
      clearInterval(interval);
    }
  }, 0);
}

//Information: Funkcja odpowiedzialna za wypelnienie pasków postępu
const target = document.querySelector('.InformationPageProgresBarUpdate');
let pBarsFilled = false; // Flaga śledząca, czy paski zostały już wypełnione

const observer = new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting && !pBarsFilled) {
    ResetBar();
    FillBarsSequentially();
    pBarsFilled = true; // Ustawienie flagi na true po wypełnieniu pasków
  }
}, { threshold: 0.5 });

observer.observe(target);

//Resetowanie pasków postępu
function ResetBar() {
  const bar = document.getElementsByClassName('InformationPageProgresBarUpdate')[0];
  const texts = document.getElementsByClassName('InformationPageProgresBarText')[0];
  bar.style.transition = "none";
  bar.style.width = '0%';
  texts.innerHTML = 'L O A D I N G';
}

///////////////////////////////////////////////////////////////////////////////////////
//Projects: 

//Funkcja odpowiadająca za przewijanie nastepnych projektow
function Elevator(className, i) {
  const element = document.querySelectorAll('.' + className)[i];
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

//Funkcja odpowiadajaca za zmiane tekstu 
function changeTextOnHover(elementId, text) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }
  element.addEventListener('mouseover', function () {
    element.innerHTML = text;
  });
  element.addEventListener('mouseout', function () {
    element.innerHTML = "CLICK";
  });
}

//Otwieranie elementu w którym zawarte są projekty
function initializeProjects() {
  
  const menuIcon = document.querySelector(".ProjectsPageButton");
  const menu = document.querySelector(".Field");

  let isMenuOpen = false;

  menuIcon.addEventListener('click', function () {
    isMenuOpen = !isMenuOpen;
    menu.classList.toggle("active", isMenuOpen);
   
  });
}

//Zamykanie elementu w którym zawarte są projekty
function CloseProjects() {
  const menuIcons = document.querySelectorAll(".FieldPageButtonReturn");
  const menu = document.querySelector(".Field");
  
  menuIcons.forEach(menuIcon => {
    menuIcon.addEventListener('click', function () {
      menu.classList.remove("active");
    });
  });
}

//Rozsuwanie informacji o danym projekcie













//Funkcje testowe
//Funkcja odpowiadajaca za wykrycie na jakim elemencie strony znajduje sie uzytkownik
//Ustawianie zadania dla przycisku o nazwie Strona glowna

/*
function UserPosition() {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('.HomePage');
  let closestSection = null;
  let closestDistance = Infinity;
  sections.forEach((section, index) => {
    const distance = Math.abs(section.offsetTop - scrollPosition);
    // Iterujemy po elementach strony i szukamy najbliższego elementu do aktualnej pozycji przewinięcia
    if (distance < closestDistance) {
      closestDistance = distance;
      closestSection = index;
    }
  });
  
  //Zwracamy nazwę sekcji dla najbliższego elementu
  const sectionNames = ['HomePageContainer', 'AboutPage', 'InformationPage', 'ProjectsPage'];
  if (ScrollDirection()===11){
    closestSection=closestSection+1
    console.log("11");
  }
  if(ScrollDirection()===1 && closestDistance!==0){
    closestSection=closestSection-1
    console.log("1");
  } 
  const where=sectionNames[closestSection]
}

function ScrollDirection() {
  let lastScrollPos = 0;

  return function() {
    let currentScrollPos = window.pageYOffset;
    let direction = 1;
    if (currentScrollPos > lastScrollPos) {
      direction = 11;
    }
    lastScrollPos = currentScrollPos;
    return direction;
  };
}
window.onscroll = function() {
  const userPosition = UserPosition();
  //console.log('Użytkownik znajduje się na sekcji:', userPosition);
};












// Obserwuj element .ProjectsPageOpenfoto
// Obserwuj element .ProjectsPageOpenfoto
const targetProject = document.querySelector('.ProjectsPageOpenfoto');
const targetProjectText = document.querySelector('.ProjectsPageOpenfotoText');
const observerProject = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
        targetProject.style.setProperty('--before-width', '100%');
        targetProjectText.innerHTML = "OPEN";
    }
}, { threshold: 0.5 });

observerProject.observe(targetProject);
*/