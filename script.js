buildGrid(16);
function buildGrid(amount){
    let size = (800/amount);
    size = size -2; //accounts for border
    let sized = size + "px";
    let container = document.getElementById("gridContainer");
    for(row = 0; row < amount; row++){
        let currentRow = document.createElement("div");
        //currentRow.style.border = "1px solid red";
        //currentRow.style.height = sized;
        //currentRow.style.width = sized; 
        //currentRow.innerHTML = row;
        for(column = 0; column < amount; column++){
            let currentColumn = document.createElement("div");
            currentColumn.style.border = "1px solid blue";
            currentColumn.style.width = sized;
            currentColumn.style.height = sized;
            //currentColumn.style.width = "200px";
            //currentColumn.style.height = "200px";
            currentColumn.innerHTML = column;
            currentRow.appendChild(currentColumn);
        }
        container.appendChild(currentRow);
    }
}