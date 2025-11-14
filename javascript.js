

const divPaiDeTodos = document.querySelector(".container");

for (let i = 0;i < 16;i++) {
    const divColumn = document.createElement("div");

    for (let j = 0;j < 16;j++) {
        const divRow = document.createElement("div");
        divColumn.appendChild(divRow);
    }

    divPaiDeTodos.appendChild(divColumn);
}

const divsGrid = document.querySelectorAll(".container div div")

// Colocar o eventListener individualmente em cada elemento

divsGrid.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add("hover-black");
    });
});
