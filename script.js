let Check = document.getElementById('ProjectPageFieldButtonReturn');
let Click = document.getElementsByClassName('ProjectPageOpenfoto')[0];
let Field = document.getElementsByClassName('field')[0];


////////////////////////////////////////////////////////////
//Funkcja odpowiadajaca za progress bar
const target = document.querySelector('.QualificationPage.MainPage');

// Tworzymy instancję obiektu IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  // Jeśli element jest widoczny na stronie, to wywołujemy funkcję
  if (entries[0].isIntersecting) {
    FillBar(100);
  } else {
    FillBar(0);
  }
}, { threshold: 0.5 }); // Określamy, kiedy element ma być uznany za widoczny

// Rozpoczynamy obserwowanie elementu
observer.observe(target);

function FillBar(x){
  let barfilled = document.getElementsByClassName('QualificationPageProgresBarUpdate');

  for (var i = 0; i < barfilled.length; i++) {
      var length = x + "%";
      barfilled[i].style.width = length;
  }
}


// tutaj kod, który zwiększa szerokość elementu ".QualificationPageProgresBarUpdate" wraz z załadowaniem strony lub wykonaniem innych działań


////////////////////////////////////////////////////////////










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
  //scrollToElement(where);
  //console.log(where);
  //return closestSection !== null ? sectionNames[closestSection] : null;
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


























////////////////////////////////////////////////////////////


Click.addEventListener('click', () => {
        Field.classList.add('activefield');

});

Check.addEventListener('click', () => {
    if (Field.classList.contains('activefield')){
        Field.classList.remove('activefield');
    }
});

