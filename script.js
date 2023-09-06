//Funkcja odpowiadajaca za progress bar
const target = document.querySelector('.QualificationPage.MainPage');
let pBarsFilled = false; // Flaga śledząca, czy paski zostały już wypełnione

const observer = new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting && !pBarsFilled) {
    ResetBar();
    FillBarsSequentially();
    pBarsFilled = true; // Ustawienie flagi na true po wypełnieniu pasków
  }
}, { threshold: 0.5 });

observer.observe(target);

function FillBarsSequentially() {
  const totalBars = 4; // Ilość pasków do wypełnienia
  for (let i = 0; i < totalBars; i++) {
    setTimeout(() => {
      FillBar(i, 100);
      ResetBar();
    }, i * 2200); // Opóźnienie względem indeksu paska
  }  
}


function FillBar(x, procent) {
  const barfilled = document.getElementsByClassName('QualificationPageProgresBarUpdate')[0];
  const bartext = document.getElementsByClassName('QualificationPageProgresBarText')[0];

  const done = document.getElementsByClassName('QualificationContainerDoneImg')[x];
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

function ResetBar() {
  const bar = document.getElementsByClassName('QualificationPageProgresBarUpdate')[0];
  const texts = document.getElementsByClassName('QualificationPageProgresBarText')[0];
  bar.style.transition = "none";
  bar.style.width = '0%';
  texts.innerHTML = 'L O A D I N G';
}









////////////////////////////////////////////////////////////
//Funkcja odpowiadajaca za rozwiniecie menu dla wersji mobilnej strony
const hamburger = document.querySelector('.MENU');
const nav = document.querySelector('.BarLayerNavigation');
const handleClick = () => {
    hamburger.classList.toggle('MENU_CLICKED');
    nav.classList.toggle('BarLayerNavigation--active');
    if (nav.classList.contains('BarLayerNavigation--active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};
hamburger.addEventListener('click', handleClick);



////////////////////////////////////////////////////////////
















////////////////////////////////////////////////////////////
//Funkcja odpowiadajaca za nawigacje miedzy ekranami strony
//Ustawianie zadania dla przycisku o nazwie Strona glowna
function scrollToElement(className) {
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
const StronaGlowna = document.getElementsByClassName('BarButton')[0];
StronaGlowna.addEventListener('click', function() {
  scrollToElement('MainPage');
});
const Informacje = document.getElementsByClassName('BarButton')[1];
Informacje.addEventListener('click', function() {
  scrollToElement('InformationPage');
});
const Qualification = document.getElementsByClassName('BarButton')[2];
Qualification.addEventListener('click', function() {
  scrollToElement('QualificationPage');
});
const Project = document.getElementsByClassName('BarButton')[3];
Project.addEventListener('click', function() {
  scrollToElement('ProjectPage');
});






const StronaGlownaDeskop = document.getElementsByClassName('BarButtonDeskop')[0];
StronaGlownaDeskop.addEventListener('click', function() {
  scrollToElement('MainPage');
});
const InformacjeDeskop = document.getElementsByClassName('BarButtonDeskop')[1];
InformacjeDeskop.addEventListener('click', function() {
  scrollToElement('InformationPage');
});
const QualificationDeskop = document.getElementsByClassName('BarButtonDeskop')[2];
QualificationDeskop.addEventListener('click', function() {
  scrollToElement('QualificationPage');
});
const ProjectDeskop = document.getElementsByClassName('BarButtonDeskop')[3];
ProjectDeskop.addEventListener('click', function() {
  scrollToElement('ProjectPage');
});

const ScrollButton = document.getElementsByClassName('ScrollButton')[0];
ScrollButton.addEventListener('click', function() {
  scrollToElement('MainPage');
});
        
////////////////////////////////////////////////////////////
//Funkcja odpowiadajaca za wykrycie na jakim elemencie strony znajduje sie uzytkownik
//Ustawianie zadania dla przycisku o nazwie Strona glowna
function UserPosition() {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('.MainPage');
  let closestSection = null;
  let closestDistance = Infinity;

  // Iterujemy po elementach strony i szukamy najbliższego elementu do aktualnej pozycji przewinięcia
  sections.forEach((section, index) => {
    const distance = Math.abs(section.offsetTop - scrollPosition);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestSection = index;
    }
  });
  // Zwracamy nazwę sekcji dla najbliższego elementu
  const sectionNames = ['MainPageContainer', 'InformationPage', 'QualificationPage', 'ProjectPage'];
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


// 

//Zamiana tekstu 
document.addEventListener('DOMContentLoaded', function () {
  var projectPageOpenfotoText = document.getElementById("ProjectPageOpenfotoText");
  
  projectPageOpenfotoText.addEventListener('mouseover', function () {
      projectPageOpenfotoText.innerHTML = "OPEN";
  });
  
  projectPageOpenfotoText.addEventListener('mouseout', function () {
      projectPageOpenfotoText.innerHTML = "CLICK";
  });
});



























////////////////////////////////////////////////////////////
const border = document.getElementsByClassName('ProjectPageContainer')[0];
let Click = document.getElementsByClassName('ProjectPageOpenfoto')[0];
let Field = document.getElementsByClassName('field')[0];
let Check = document.getElementById('ProjectPageFieldButtonReturn');

Click.addEventListener('click', () => {
        Field.classList.add('activefield');
        console.log("done");

});

Check.addEventListener('click', () => {
    if (Field.classList.contains('activefield')){
        Field.classList.remove('activefield');
    }
});











///////
// Pobierz wszystkie kontenery ProjectPageFieldContainerName
function Elevator(className, i) {
  const element = document.querySelectorAll('.' + className)[i];
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const containers = document.querySelectorAll('.ProjectPageFieldContainerBoxInfo');
const lastelement = containers.length - 1;

containers.forEach((container, i) => {
  const buttonleft = container.parentElement.querySelector('.ProjectPageFieldContainerBoxLeft');
  const buttonright = container.parentElement.querySelector('.ProjectPageFieldContainerBoxRight');

  buttonright.addEventListener('click', () => {
    let id = i + 1;
    if (id > lastelement) {
      id = 0;
    }
    Elevator('ProjectPageFieldContainer', id);
  });

  buttonleft.addEventListener('click', () => {
    let id = i - 1;
    if (id < 0) {
      id = lastelement;
    }
    Elevator('ProjectPageFieldContainer', id);
  });
});




///////
// Pobierz wszystkie kontenery ProjectPageFieldContainerName
const container = document.querySelectorAll('.ProjectPageFieldContainer');

container.forEach(container => {
  const containerName = container.querySelector('#ProjectPageFieldContainerName');
  const description = container.querySelector('#ProjectPageFieldContainerDescription');
  
  const feld=document.getElementsByClassName('field')[0];

  feld.addEventListener('mouseenter', () => {
    description.style.right = '0%';
  });
  
  feld.addEventListener('mouseleave', () => {
    description.style.right = '100%';
  });
});