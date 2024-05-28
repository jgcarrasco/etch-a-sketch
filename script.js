const container = document.querySelector(".container")

const length = 600 / 16;

for (let i = 0; i < 16*16; i++) {
    const div = document.createElement("div");
    div.classList.add("squarediv");
    div.style.width = `${length}px`;
    div.style.height = `${length}px`
    container.appendChild(div);
}

container.addEventListener("mouseover", (event) => {
    console.log(event.target);
    event.target.classList.add("painted");
});