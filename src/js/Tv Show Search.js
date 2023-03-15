const form = document.querySelector("#tvShows");
const para = document.querySelector("#para");
const loading = document.querySelector("#loading");

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const search = form.elements.query.value;
	const config = { params: { q: search } };
	const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
	addImages(res.data);
	form.elements.query.value = "";
	// document.body.append(img);
});

const addImages = (shows) => {
	for (let result of shows) {
		if (result.show.image) {
			const img = document.createElement("img");
			img.src = result.show.image.medium;
			img.classList.add("img", "para");
			para.append(img);
		}
	}
};

// For Single/First Image Output //
// res.data[0].show.image.medium //
