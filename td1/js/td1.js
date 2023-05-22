'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('In onLoad() function…');
	defineHeading1();
	defineHeading2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	updateClock1();
	updateClock2();
	updateGraphicClock();
	initialiseImageEtAjouteEvent();
	// Your JavaScript code goes here !
}

function defineHeading1() {
	let newTitle = document.getElementById("title");
	document.title = newTitle.innerHTML;
}

function defineHeading2() {
	let newTitle2 = document.getElementsByTagName("h2");
	if (newTitle2.length != 0) {
		document.title = newTitle2[newTitle2.length - 1].innerHTML;
	}
}

function defineHeading3() {
	let newTitle2 = document.getElementsByTagName("h2");
	if (newTitle2.length == 0) {
		document.title = "GARCIA--GIMENEZ Matthieu";
	}
}

function defineHeading4() {
	let titles = document.getElementsByClassName("firstOrLast");
	if (titles.length != 0) {
		if (titles.length % 2 == 0) {
			document.title = titles[0].innerHTML;
		}
		else {
			document.title = titles[titles.length - 1].innerHTML;
		}
	}
	else {
		document.title = "GARCIA--GIMENEZ Matthieu";
	}
}

function swapInnerHTML() {
	let balisesP = document.getElementsByTagName("p");
	if (balisesP.length != 0 && balisesP.length > 1) {
		let tempoP = balisesP[0].innerHTML;
		balisesP[0].innerHTML = balisesP[1].innerHTML;
		balisesP[1].innerHTML = tempoP;
	}
}

function dateAlter() {
	let meta = document.getElementsByTagName("meta");
	let authors = [];
	for (let i = 0; i < meta.length; i++) {
		if (meta[i].getAttribute("name") == "author") {
			authors.push(meta[i].getAttribute("content"));
			break;
		}
	}
	let author = authors[0];
	let divDate = document.getElementById("update-date");
	let date = new Date();
	let numJour = date.getDay();
	let jour;
	switch (numJour) {
		case 0:
			jour = "Dimanche";
			break;

		case 1:
			jour = "Lundi";
			break;

		case 2:
			jour = "Mardi";
			break;

		case 3:
			jour = "Mercredi";
			break;

		case 4:
			jour = "Jeudi";
			break;

		case 5:
			jour = "Vendredi";
			break;

		case 6:
			jour = "Samedi";
			break;
	}
	let numMois = date.getMonth();
	let mois;
	switch (numMois) {
		case 0:
			mois = "Janvier";
			break;

		case 1:
			mois = "Février";
			break;

		case 2:
			mois = "Mars";
			break;

		case 3:
			mois = "Avril";
			break;

		case 4:
			mois = "Mai";
			break;

		case 5:
			mois = "Juin";
			break;

		case 6:
			mois = "Juillet";
			break;

		case 7:
			mois = "Août";
			break;

		case 8:
			mois = "Septembre";
			break;

		case 9:
			mois = "Octobre";
			break;

		case 10:
			mois = "Novembre";
			break;

		case 11:
			mois = "Décembre";
			break;
	}
	divDate.innerHTML = "Dernière modification : le " + jour + " " + date.getDate() + " " + mois + " " + date.getFullYear() + " par " + author;

}

document.getElementById("phraseJourRestants").addEventListener("click", getNbDays);

function getNbDays() {
	let date = new Date();
	let date2 = new Date(2023, 6, 19);
	let differenceMiliSec = date2.getTime() - date.getTime();
	let differenceJours = Math.floor(differenceMiliSec / (1000 * 3600 * 24));
	let jour;
	if (differenceJours > 1) {
		jour = "jours";
	}
	else {
		jour = "jour"
	}
	document.getElementById("phraseJourRestants").innerHTML = "Il reste " + differenceJours + " " + jour + " avant le 19 juillet 2023";
}

function updateClock1() {
	setInterval(modifieHeure, 1000);
}

function updateClock2() {
	setTimeout("updateClock2()", "1*1000");
	modifieHeure2();
}

function modifieHeure() {
	let str = new Date().toLocaleString('fr-FR');
	document.getElementById('clock').innerHTML = "Il est " + str.split(" ")[1];
}

function modifieHeure2() {
	let str = new Date().toLocaleString('fr-FR');
	document.getElementById('clock2').innerHTML = "Il est " + str.split(" ")[1];
}

function updateGraphicClock() {
	setInterval(updateImages, 1000);
}


function updateImages() {
	let laDate = new Date();
	let heures = laDate.getHours().toString();
	let minutes = laDate.getMinutes().toString();
	let secondes = laDate.getSeconds().toString();
	if (heures.length == 1) {
		heures = "0" + heures;
	}
	if (minutes.length == 1) {
		minutes = "0" + minutes;
	}
	if (secondes.length == 1) {
		secondes = "0" + secondes;
	}
	document.getElementById("graphic-clock").innerHTML = "<img src='./../assets/images/" + heures[0] + ".gif'><img src='./../assets/images/" + heures[1] + ".gif'>:<img src='./../assets/images/" + minutes[0] + ".gif'><img src='./../assets/images/" + minutes[1] + ".gif'>:<img src='./../assets/images/" + secondes[0] + ".gif'><img src='./../assets/images/" + secondes[1] + ".gif'>";
}

document.getElementById("champTexte").addEventListener("input", verifieContenuInput);

function verifieContenuInput() {
	var contenu = document.getElementById("champTexte");
	var tabChiffres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	if (contenu.value != null) {
		if (contenu.value.length == 0) {
			contenu.classList.remove(contenu.classList);
			contenu.classList.add("white");
		} else {
			var queChiffres = true;
			for (var i = 0; i < contenu.value.length && queChiffres == true; i++) {
				if (!tabChiffres.includes(contenu.value[i])) {
					queChiffres = false;
				}
			}
			if (queChiffres) {
				contenu.classList.remove(contenu.classList);
				contenu.classList.add("green");
			}
			else {
				contenu.classList.remove(contenu.classList);
				contenu.classList.add("red");
			}
		}
	}
	else {
		contenu.classList.remove(contenu.classList);
		contenu.classList.add("white");
	}
}

function initialiseImageEtAjouteEvent() {
	var titresMenu = document.getElementsByClassName("titresMenu");
	for (var i = 0; i < titresMenu.length; i++) {
		var imagePlus = document.createElement("img");
		imagePlus.src = "./../assets/images/plus.gif";
		titresMenu[i].insertBefore(imagePlus, titresMenu[i].firstChild);
	}
	var listesMenu = document.getElementsByClassName("listesMenu");
	for (var i = 0; i < listesMenu.length; i++) {
		listesMenu[i].style.display = "none";
	}
	for (var i = 0; i < titresMenu.length; i++) {
		titresMenu[i].addEventListener("click", function () {
			var listeMenu = this.nextElementSibling;
			var imageTitre = this.getElementsByTagName("img");
			if (listeMenu.style.display === "none") {
				listeMenu.style.display = "block";
				imageTitre[0].src = "./../assets/images/minus.gif";
				this.style.borderRadius = "5px 5px 0 0";
			} else {
				listeMenu.style.display = "none";
				imageTitre[0].src = "./../assets/images/plus.gif";
				this.style.borderRadius = "5px";
			}
		});
	}

	let savedPage = null;


	//Une fois que la recherche est faite, on ne peut plus ouvrir le menu et je ne comprends pas pourquoi
	function search() {
		var inputRecherche = document.getElementById("inputRecherche");
		var searchTerm = inputRecherche.value;
		if (!savedPage) {
			savedPage = document.body.innerHTML;
		} else {
			document.body.innerHTML = savedPage;
		}
		var regex = new RegExp(searchTerm, "gi");
		var bodyHtml = document.body.innerHTML;
		var highlightedHtml = bodyHtml.replace(regex, match => `<span class="select">${match}</span>`);
		document.body.innerHTML = highlightedHtml;
	}

	var boutonRecherche = document.getElementById("boutonRecherche");
	boutonRecherche.addEventListener("click", search);










}



