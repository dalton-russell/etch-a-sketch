buildGrid(64);
listen();

function buildGrid(amount){
    let size = (800/amount);
    size = size -2; //accounts for border
    let sized = size + "px";
    let container = document.getElementById("gridContainer");
    for(column = 0; column < amount; column++){
        let currentRow = document.createElement("div");
        for(row = 0; row < amount; row++){
            let currentColumn = document.createElement("div");
            currentColumn.style.border = "1px solid black";
            currentColumn.style.width = sized;
            currentColumn.style.height = sized;
            currentColumn.id = 'cell';
            currentRow.appendChild(currentColumn);
        }
        container.appendChild(currentRow);
    }
}

function listen(){
    const cells = document.querySelectorAll('[id=cell]');
    
    cells.forEach((cell) => {
        
            cell.addEventListener('mouseover', () =>
            {
                cell.style.backgroundColor = "black";  
            });
        });
    
}