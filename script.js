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

// NOTE: All the functionality below could be made easier with the prompt
// method! I did it manually because I didn't know about it (lol).
// Popup
const gridbutton = document.querySelector("#grid-button");
const popup = document.querySelector(".full-screen");
const submitbutton = document.querySelector("#submit-button");
const gridinput = document.querySelector("input");
const popup_window = document.querySelector(".popup");

gridbutton.addEventListener("click", () => {
    popup.classList.remove("hidden");
    gridinput.focus();
});

function close_popup() {
    popup.classList.add("hidden");
    gridinput.value = null;
    // Remove the previous error popup (if present)
    const content = document.querySelector("#popup-error");
    if (content){
        popup_window.removeChild(content);
    }   
}        

// change grid size
function change_grid_size() {
    const grid_size = gridinput.value;

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
        close_popup();
    }
}  

submitbutton.addEventListener("click", change_grid_size);
gridinput.addEventListener("keypress", (e) => {
    if ((document.activeElement === gridinput) & (e.key === "Enter")) {
        change_grid_size();
    }
});

// exit popup when clicking outside
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        close_popup();
    }
}); 


