const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const aria = document.querySelector("aria-expanded");

// When someone clicks the hambuger menu
navToggle.addEventListener("click", () => {
	const visiblity = nav.getAttribute("data-visible");
	// If the nav if closed, open it
	if (visiblity === "false") {
		nav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
		// if the nav is open, close it
	} else {
		nav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
});
