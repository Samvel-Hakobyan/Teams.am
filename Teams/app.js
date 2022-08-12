let text = document.createElement("h1");
text.innerHTML = "Welcome";
let div = document.querySelector("div");
div.insertBefore(text, div.children[0]);
