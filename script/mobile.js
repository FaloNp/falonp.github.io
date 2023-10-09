///////////////////////////////////////////////////////////////////////////////////////
//Bar: Funkcja odpowiadajaca za nawigacje miedzy ekranami strony
const StronaGlowna = document.getElementsByClassName('BarButton')[0];
StronaGlowna.addEventListener('click', function() {
  scrollToElement('HomePageNav');
  CloseMenu();
});
const Informacje = document.getElementsByClassName('BarButton')[1];
Informacje.addEventListener('click', function() {
  scrollToElement('AboutPageNav');
  CloseMenu();
});
const Qualification = document.getElementsByClassName('BarButton')[2];
Qualification.addEventListener('click', function() {
  scrollToElement('InformationPageNav');
  CloseMenu();
});
const Project = document.getElementsByClassName('BarButton')[3];
Project.addEventListener('click', function() {
  scrollToElement('ProjectsPageNav');
  CloseMenu();
});

//rozwieniecie menu
document.addEventListener('DOMContentLoaded', initializeMenu);
document.addEventListener('DOMContentLoaded', initializeProjects);
document.addEventListener('DOMContentLoaded', CloseProjects);
///////////////////////////////////////////////////////////////////////////////////////

