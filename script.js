const container = document.querySelector(".container")


function generate_grid(grid_size) {
    container.textContent = "";

    const length = 600 / grid_size;

    for (let i = 0; i < grid_size*grid_size; i++) {
        const div = document.createElement("div");
        div.classList.add("squarediv");
        div.style.width = `${length}px`;
        div.style.height = `${length}px`
        container.appendChild(div);
    }
}

generate_grid(16);

container.addEventListener("mouseover", (event) => {
    event.target.classList.add("painted");
});

// Popup
const gridbutton = document.querySelector("#grid-button");
const popup = document.querySelector(".full-screen");
const submitbutton = document.querySelector("#submit-button");
const gridinput = document.querySelector("input");

gridbutton.addEventListener("click", () => {
    popup.classList.remove("hidden");
    gridinput.focus();
});


submitbutton.addEventListener("click", () => {
    const grid_size = gridinput.value;
    const popup_window = document.querySelector(".popup");

    console.log(grid_size);
    if ((grid_size > 100) || (grid_size < 1)) {
        if (!document.querySelector("#popup-error")){
            const content = document.createElement("div");
            content.id = "popup-error";
            content.style.color = "red";
            content.appendChild(document.createTextNode("Enter a valid number between 1-100"));
            popup_window.appendChild(content);
        }
    } else {
        generate_grid(grid_size);
        popup.classList.add("hidden");
        const content = document.querySelector("#popup-error");
        if (content){
            popup_window.removeChild(content);
        }
    }
})