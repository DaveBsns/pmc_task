function showInputForm() {

    document.getElementById("add-an-animal-btn").style.display = "none";
    document.getElementById("input-form").style.display = "block";
}

function createEntry(){
    aName = document.getElementById("aName");
    aWeight = document.getElementById("aWeight").value;
    aPower = document.getElementById("aPower").value;
    aDate = document.getElementById("aDate").value;

    var formInput = document.querySelectorAll("aName, aWeight, aPower, aDate").value

    console.log(formInput[0])
}

    
    // get the reference for the body
    //table = document.getElementsById("table");

    //reference to the inputfields

    //rowField = document.getElementById("rowField").value;
    //columnField = document.getElementById("columnField").value;
    /*
    document.getElementById("rowField").style.display = "none";
    document.getElementById("columnField").style.display = "none";
    document.getElementById("createTbl").style.display = "none";
    document.getElementById("insertRowAbove").style.display = "flex";
    document.getElementById("insertRowBelow").style.display = "flex";
    document.getElementById("insertColumnLeft").style.display = "flex";
    document.getElementById("insertColumnRight").style.display = "flex";
    document.getElementById("reset").style.display = "flex";

    // get the reference for the body
    body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    tbl = document.createElement("table");
    tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i < rowField; i++) {
        // creates a table row
        row = document.createElement("tr");
        rows.push(row);

        for (var j = 0; j < columnField; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            cell = document.createElement("td");
            var cellText = document.createTextNode("cell in row " + i + ", column " + j);
            cell.appendChild(cellText);
            row.appendChild(cell);

            //pushing just the number of cells as the value of the columnfield into the array
            if(cols.length < columnField){
                cols.push(cell);
            }
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "1");
}




//insert a row on the bottom of the table
function RowBelow(){

    // Insert a row at the end of table
    var rowBelow = tblBody.insertRow(-1);
    rows.push(rowBelow);

    // Insert a cell for every column of the table
    for(i = 0; i < cols.length; i++){

        // Insert a cell at the end of the row
        var cellBelow = rowBelow.insertCell();

        // Append a text node to the cell
        var newText = document.createTextNode('new row '+rows.length);
        cellBelow.appendChild(newText);
    }*/