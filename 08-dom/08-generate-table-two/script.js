/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var cible = document.getElementById("target");

    table = document.createElement("table");
    tablebody = document.createElement("tbody");

    var row = document.createElement("tr");
    var cell = document.createElement("td");

    for(i=1; i<11; i++){
        row = document.createElement("tr");
        for(n=1; n<11; n++){
            cell = document.createElement("td");
            texte = document.createTextNode(i*n);
            cell.appendChild(texte);
            row.appendChild(cell);
        }
        tablebody.appendChild(row);
    }
    table.appendChild(tablebody);

    cible.appendChild(table);


})();
