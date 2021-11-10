const btnMobile = document.querySelector("#btn-mobile");
const toggleMenu = () => {
	const menu = document.querySelector("#menu");
	menu.classList.toggle("active");
};
btnMobile.addEventListener("click", toggleMenu);

let btnShorten = document.querySelector("#btn-shorten");
let input = document.querySelector("#input-shorten-link");
let error = document.querySelector("#error");
const handleShortenLink = async () => {
	if (input.value === "") {
		console.log("input vazio");
		input.style.borderColor = "#f46262";
		error.style.display = "block";
	} else {
		input.style.borderColor = "transparent";
		error.style.display = "none";
		const url = `https://api.shrtco.de/v2/shorten?url=${input.value}`;
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
	}
};
btnShorten.addEventListener("click", handleShortenLink);
