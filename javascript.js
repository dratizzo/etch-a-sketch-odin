const btnGrid = document.querySelector(".btn-grid-size");

let gridSize;



// Rodar o event listener com um valor padrão?
btnGrid.addEventListener('click', () => {
    do {
        gridSize = Number(prompt("Insira um valor de até 100 para o tamanho do grid")); 
    }
    while (gridSize < 1 || gridSize > 100 || typeof(gridSize) != "number" || Number.isNaN(gridSize));

    const divPaiDeTodos = document.querySelector(".container");

    while (divPaiDeTodos.lastChild) {
        divPaiDeTodos.removeChild(divPaiDeTodos.lastChild);
    }

    // Cria o grid
    for (let i = 0;i < gridSize;i++) {
    const divColumn = document.createElement("div");

        for (let j = 0;j < gridSize;j++) {
            const divRow = document.createElement("div");
            divColumn.appendChild(divRow);
    }

    function randomColor() {
        return ( Math.floor(Math.random() * 255) + 1 );
    }



    divPaiDeTodos.appendChild(divColumn);
    }

    const quadradosGrid = document.querySelectorAll(".container div div");
    // Colocar o eventListener individualmente em cada elemento
    quadradosGrid.forEach((item) => {
        item.addEventListener('mouseover', () => {
            /** item.classList.add("hover-black"); **/
            item.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        });
    });

});
