const nigerPath = "img/niger.jpg";
const jackPath = "img/jack.jpg";
const zagadkaPath = "img/zagadka.png";
const monkePath = "img/monkey.jpg";

const niger = document.querySelector(".btn-niger");
const jack = document.querySelector(".btn-jack");
const zagadka = document.querySelector(".btn-zagadka");
const monke = document.querySelector(".btn-monke");
const img = document.querySelector(".mem-img");

const buttonCheck = (namePath, name) => {
	img.style.backgroundImage = `url("${namePath}")`;
	if (img.style.backgroundImage === `url("${namePath}")`) {
		name.style.background = "green";
	}
}

jack.addEventListener("click", () => {
	buttonCheck(jackPath, jack)
	niger.style.background = "red";
	monke.style.background = "red";
	zagadka.style.background = "red";
});

niger.addEventListener("click", () => {
	buttonCheck(nigerPath, niger)
	jack.style.background = "red";
	monke.style.background = "red";
	zagadka.style.background = "red";
});

zagadka.addEventListener("click", () => {
	buttonCheck(zagadkaPath, zagadka)
	niger.style.background = "red";
	monke.style.background = "red";
	jack.style.background = "red";
});

monke.addEventListener("click", () => {
	buttonCheck(monkePath, monke)
	niger.style.background = "red";
	jack.style.background = "red";
	zagadka.style.background = "red";
});

