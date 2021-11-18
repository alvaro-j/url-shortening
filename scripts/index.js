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
		input.style.borderColor = "#f46262";
		error.style.display = "block";
	} else {
		input.style.borderColor = "transparent";
		error.style.display = "none";

		const url = `https://api.shrtco.de/v2/shorten?url=${input.value}`;
		const res = await fetch(url);
		const data = await res.json();

		const short_link = data?.result?.short_link ?? "";

		const divLink = document.createElement("div");

		divLink.classList.add("div-link");

		const copySpan = document.createElement("span");
		const copyDiv = document.createElement("div");
		const copyInnerSpan = document.createElement("span");
		const copyButton = document.createElement("button");

		copySpan.innerText = input?.value ?? "";
		copyInnerSpan.innerText = short_link;
		copyButton.innerText = "Copy";

		copyButton.addEventListener("click", () => {
			navigator.clipboard.writeText(short_link);
			copyButton.style.backgroundColor = "#3b3054";
			copyButton.innerText = "Copied!";
			setTimeout(() => {
				copyButton.style.backgroundColor = "#2acfcf";
				copyButton.innerText = "Copy";
			}, 2000);
		});

		copyDiv.appendChild(copyInnerSpan);
		copyDiv.appendChild(copyButton);

		divLink.appendChild(copySpan);
		divLink.appendChild(copyDiv);

		wrapper.appendChild(divLink);
	}
};

btnShorten.addEventListener("click", handleShortenLink);
