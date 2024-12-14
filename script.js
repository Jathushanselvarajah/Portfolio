function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var icone = document.getElementById("icone");

icone.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icone.src = "assets/soleil.png";
  } else {
    icone.src = "assets/lune.png";
  }
};

// Ajouter un gestionnaire d'événements pour les téléphones
icone.addEventListener("touchstart", function () {
  // Vérifier si le périphérique est un téléphone
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Effectuer le même changement de thème que pour le clic
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      icone.src = "assets/soleil.png";
    } else {
      icone.src = "assets/lune.png";
    }
  }
});

// Fonction pour changer les icônes en fonction du thème
function changeIconsForTheme() {
  var icons = document.getElementsByClassName("icon");
  var isDarkTheme = document.body.classList.contains("dark-theme");

  if (isDarkTheme) {
    icons[0].src = "assets/link2.png"; // Deuxième icône - LinkedIn
    icons[1].src = "assets/git2.png"; // Premier icône - GitHub
    icons[2].src = "assets/contact2.png"; // Troisième icône - contact
    icons[3].src = "assets/location2.png"; // Quatrième icône - Localisation
    icons[4].src = "assets/email2.png";
    icons[5].src = "assets/link2.png";
  } else {
    icons[0].src = "assets/linkedin.png"; // Deuxième icône - LinkedIn
    icons[1].src = "assets/github.png"; // Premier icône - GitHub
    icons[2].src = "assets/contact.png"; // Troisième icône - contact
    icons[3].src = "assets/location.png"; // Quatrième icône - Localisation
    icons[4].src = "assets/email.png";
    icons[5].src = "assets/linkedin.png";
  }
}

// Observer pour détecter les changements de classe sur le body
var observer = new MutationObserver(function (mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      // Si la classe du body change, met à jour les icônes
      changeIconsForTheme();
      break;
    }
  }
});

// Configuration de l'observation sur le body
var targetNode = document.body;
var config = { attributes: true, attributeFilter: ["class"] };
observer.observe(targetNode, config);

// Appel initial pour ajuster les icônes lors du chargement de la page
changeIconsForTheme();

/* Script pour le scroll reveal */

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  // reset: true, // Animations repeat
});

sr.reveal(`.section__pic-container`, { origin: "right" });
sr.reveal(`.section__text`, { origin: "left" });
