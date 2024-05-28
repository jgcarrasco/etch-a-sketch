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
    console.log(event.target);
    event.target.classList.add("painted");
});

// Popup
const gridbutton = document.querySelector("#grid-button");
const popup = document.querySelector(".full-screen")

gridbutton.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

const submitbutton = document.querySelector("#submit-button");

submitbutton.addEventListener("click", () => {
    const grid_size = document.querySelector("input").value;
    generate_grid(grid_size);
    popup.classList.add("hidden");
})