//==================Elevator script=============================== 
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navigation-link a');
  const panels = document.querySelectorAll('.panel');
  
  const menu_panel = document.querySelector('.navigation-bar'); //To dla wersji mobilnej -> zamyka menu

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.dataset.target;
      const Id = `#${targetId}`

      panels.forEach(panel => panel.classList.remove('active'));

      const target = document.getElementById(targetId);
      if (target) {
        target.classList.add('active');
        scrollToElement(Id); //To dla wersji mobilnej -> scrolluje do wybranego miejsca
        menu_panel.classList.remove('active');
      }
    });
  });
  document.getElementById('panel-1').classList.add('active');
});

//==================Information Panel===============================
document.addEventListener("DOMContentLoaded", () => {
  //Generowanie układu
  const technologies = ["HTML", "CSS", "JS", "GIT"];
  const container = document.getElementById("information__panel-container");
  const template = document.getElementById("information__panel-template");
  const blocks = technologies.map((tech) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector("h5").textContent = tech;
    container.appendChild(clone);
    return container.lastElementChild;
  });
  const photo = container.getElementsByClassName("information__photo");
  const text = container.getElementsByClassName('loading-bar-text');
  // Funkcja animująca paski po kolei
  function animateBar(index) {
    if (index >= blocks.length) return;

    const rows = container.querySelectorAll(".row");
    const barContainer = rows[index * 2 + 1].querySelector(".loading-bar");

    // Reset szerokości i animacja
    barContainer.style.width = "0%";

    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        photo[index].style.backgroundImage = "url('../../resource/photo/icons/check.png')";
        text[index].classList.add("hidden");
        animateBar(index + 1); // po zakończeniu animacji tego paska zaczynamy następny
      } else {
        width++;
        barContainer.style.width = width + "%";
      }
    }, 20); // tu szybkość animacji (20ms * 100 = 2 sekundy)
  }

  animateBar(0); // start animacji od pierwszego paska
});
//==================Project Panel===============================
document.addEventListener("DOMContentLoaded", () => {
open_button = document.getElementsByClassName("special-button-fg")[0];
exit_button = document.getElementById("panel-exit");
project_panel = document.querySelector(".projects__panel");

//Rozwijanie panelu z projektami
open_button.addEventListener('click', e => {
  e.preventDefault();
  project_panel.classList.add('active');
});
//Zwijanie panelu z projektami
exit_button.addEventListener('click', e => {
  e.preventDefault();
  project_panel.classList.remove('active');
});

});

//Generowanie zawartości
document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "DEPOT",
            tags: "Java, Swing",
            description: "Warehouse management tool.",
            video: `<iframe width="100%" height="200" src="resource/filmy/menager.mp4" frameborder="0" allowfullscreen></iframe>`
        },
        {
            title: "BOT",
            tags: "Python",
            description: "Tool for automating activities.",
            video: `<iframe width="100%" height="200" src="resource/filmy/bot.mp4" frameborder="0" allowfullscreen></iframe>`
        },
        {
            title: "PLANNER",
            tags: "Kotlin, Java",
            description: "This is app for planning.",
            video: `<iframe width="100%" height="200" src="resource/filmy/planner.mp4" frameborder="0" allowfullscreen></iframe>`
        },
        {
            title: "QUARE",
            tags: "Kotlin, Java",
            description: "Puzzle game written for Android.",
            video: `<iframe width="100%" height="200" src="resource/filmy/quare.mp4" frameborder="0" allowfullscreen></iframe>`
        }
    ];

    const container = document.getElementById("projects__panel-box");
    const template = document.getElementById("projects__panel-template");

    projects.forEach(project => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".project-title").textContent = project.title;
        clone.querySelector(".project-tags").textContent = project.tags;
        clone.querySelector(".project-description").textContent = project.description;
        clone.querySelector(".project-video").innerHTML = project.video;

        container.appendChild(clone);
    });
});

//Obsługa windy dla projects__panel
let currentProjectIndex = 0;
function updateProjectPanelPosition() {
  const projectList = document.querySelector('.projects__panel-list');
  const panels = document.querySelectorAll('.projects__panel-list .panel-content');
  if (projectList && panels.length) {
    projectList.style.transform = `translateY(-${currentProjectIndex * 100}%)`;
  }
}
document.getElementById('prev-panel').addEventListener('click', () => {
  const panels = document.querySelectorAll('.projects__panel-list .panel-content');
  if (currentProjectIndex > 0) {
    currentProjectIndex--;
  } else {
    currentProjectIndex = panels.length - 1; 
  }
  updateProjectPanelPosition();
});

document.getElementById('next-panel').addEventListener('click', () => {
  const panels = document.querySelectorAll('.projects__panel-list .panel-content');
  if (currentProjectIndex < panels.length - 1) {
    currentProjectIndex++;
  } else {
    currentProjectIndex = 0;
  }
  updateProjectPanelPosition();
});
//Ladowanie grafik svg
function loadSvgSymbols(path) {
  fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Błąd ładowania ${path}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      const div = document.createElement('div');
      div.style.display = 'none';
      div.innerHTML = data;
      document.body.prepend(div);
    })
    .catch(error => {
      console.error('Nie udało się załadować SVG:', error);
    });
}
document.addEventListener('DOMContentLoaded', () => {
  //loadSvgSymbols('../resource/file/svg/graphic.svg');
});
//==============================================================
//==================MOBILE VERSION SCRIPT=======================
//==============================================================
//==================PRZEWIJANIE STRONY==========================
function scrollToElement(className) {
  const element = document.querySelector(className);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

//==================PRZYCISK POWROTU==========================
document.addEventListener('DOMContentLoaded', () => {
  const return_button = document.querySelector('#return_button');

    window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      return_button.classList.add('show');
    } else {
      return_button.classList.remove('show');
    }
  });

  return_button.addEventListener('click', e => {
    e.preventDefault();
    scrollToElement('.main-container');
  });
});


//==================ROZWIJANE MENU HAMBURGER====================
document.addEventListener('DOMContentLoaded', () => {
  const menu_button = document.querySelector('#menu_button');
  const menu_panel = document.querySelector('.navigation-bar');
  menu_button.addEventListener('click', e => {
    e.preventDefault();
    menu_panel.classList.toggle('active');
    menu_button.classList.toggle('active');
  });
});










//==============================================================
//HARD DEVELOPMENT
//==============================================================

/*
window.addEventListener('resize', () => {
  console.log("Zmieniona szerokość strony: " + window.innerWidth + "px");
});
*/

/*
function checkVisibility(A,B) {
  const elementA = document.querySelector(A);
  const elementB = document.querySelector(B);
  function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  if (!isElementVisible(elementA)) {
    elementB.classList.add('active');
  } else {
    elementB.classList.remove('active');
  }
}

window.addEventListener('scroll', checkVisibility('#panel-1','.return-button'));
window.addEventListener('resize', checkVisibility('#panel-1','.return-button'));
window.addEventListener('load', checkVisibility('#panel-1','.return-button'));
*/





