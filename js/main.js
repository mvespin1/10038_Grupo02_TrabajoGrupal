$('.carousel').carousel({
	interval: 3000,
	pause: "hover"
})
//EJEMPLO XMLHttpRequest
function loadCatImage() {
	const catUrl = "https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat";
	const catContainer = document.getElementById("cat-container");
	catContainer.innerHTML = `
	  <img src="${catUrl}" alt="Cat Image">
	  <button type="button" onclick="loadCatImage()">Get Another Cat Image</button>
	`;
  }