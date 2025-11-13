const divPaiDeTodos = document.querySelector(".container");

for (let i = 0;i < 16;i++) {
    const divColumn = document.createElement("div");

    for (let j = 0;j < 16;j++) {
        const divRow = document.createElement("div");
        divColumn.appendChild(divRow);
    }

    divPaiDeTodos.appendChild(divColumn);
}
