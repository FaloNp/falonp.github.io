///////////////////////////////////////////////////////////////////////////////////////
//Bar: Funkcja odpowiadajaca za nawigacje miedzy ekranami strony
const StronaGlownaDeskop = document.getElementsByClassName('BarButtonDeskop')[0];
StronaGlownaDeskop.addEventListener('click', function() {
scrollToElement('HomePageNav');
});
const InformacjeDeskop = document.getElementsByClassName('BarButtonDeskop')[1];
InformacjeDeskop.addEventListener('click', function() {
scrollToElement('AboutPageNav');
});
const QualificationDeskop = document.getElementsByClassName('BarButtonDeskop')[2];
QualificationDeskop.addEventListener('click', function() {
scrollToElement('InformationPageNav');
});
const ProjectDeskop = document.getElementsByClassName('BarButtonDeskop')[3];
ProjectDeskop.addEventListener('click', function() {
scrollToElement('ProjectsPageNav');
});
const ScrollButton = document.getElementsByClassName('ScrollButton')[0];
ScrollButton.addEventListener('click', function() {
scrollToElement('HomePageNav');
});

///////////////////////////////////////////////////////////////////////////////////////
//Information: Funkcja odpowiedzialna za wypelnienie pasków postępu
const target = document.querySelector('.BackPanel.InformationPage');
let pBarsFilled = false; // Flaga śledząca, czy paski zostały już wypełnione

const observer = new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting && !pBarsFilled) {
    ResetBar();
    FillBarsSequentially();
    pBarsFilled = true; // Ustawienie flagi na true po wypełnieniu pasków
  }
}, { threshold: 0.5 });

observer.observe(target);

//Projects: Funkcja odpowiadająca za przewijanie nastepnych projektow
const containers = document.querySelectorAll('.FieldPageContainer');
const lastelement = containers.length - 1;
containers.forEach((container, i) => {
  const buttonleft = container.parentElement.querySelector('.FieldPageContainerLeft');
  const buttonright = container.parentElement.querySelector('.FieldPageContainerRight');
  buttonright.addEventListener('click', () => {
    let id = i + 1;
    if (id > lastelement) {
      id = 0;
    }
    Elevator('FieldBlock', id);
  });
  buttonleft.addEventListener('click', () => {
    let id = i - 1;
    if (id < 0) {
      id = lastelement;
    }
    Elevator('FieldBlock', id);
  });
});

//Rozsuwanie informacji o danym projekcie
const container = document.querySelectorAll('.FieldPageContainer');
container.forEach(container => {
  const description = container.querySelector('#FieldPageContainerDescription');
  
  const feld=document.getElementsByClassName('Field')[0];

  feld.addEventListener('mouseenter', () => {
    description.style.right = '0%';
  });
});

document.addEventListener('DOMContentLoaded', initializeProjects);
document.addEventListener('DOMContentLoaded', CloseProjects);

