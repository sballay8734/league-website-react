// Get the container element
const btnContainer = document.getElementById("btn-group");
// Get all buttons with class="btn" inside the container
const btns = btnContainer.getElementsByClassName("btn");
// Loop through the buttons and add the active class to the current/clicked button
for(var i = 0; i < btns.length; i++)btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
});

//# sourceMappingURL=index.f68744d1.js.map
