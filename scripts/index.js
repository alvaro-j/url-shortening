const btnMobile = document.querySelector("#btn-mobile");
const toggleMenu = () => {
	const menu = document.querySelector("#menu");
	menu.classList.toggle("active");
};
btnMobile.addEventListener("click", toggleMenu);

let btnShorten = document.querySelector("#btn-shorten");
let input = document.querySelector("#input-shorten-link");
let error = document.querySelector("#error");
let wrapper = document.querySelector("#purpleBg-wrapper");

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
		const link = `
			<div class="div-link">
			<span>${input.value}</span>
			<div>
				<span>${data.result.short_link}</span>
				<button>Copy</button>
			</div>
		</div>`;
		wrapper.innerHTML += link;
	}
};
btnShorten.addEventListener("click", handleShortenLink);
