let text = document.createElement("h1");
text.innerHTML = "Welcome";
const div = document.querySelector("div");
div.insertBefore(text, div.children[0]);
