const root = document.querySelector(":root");
const rootValues = getComputedStyle(root);

function changeTheme(root, rootValues) {
	if (rootValues.getPropertyValue("--textColor") == "black") {
		root.style.setProperty("--textColor", "white");
		root.style.setProperty("--bgColor", "black");
	} else {
		root.style.setProperty("--textColor", "black");
		root.style.setProperty("--bgColor", "white");
	}
}
