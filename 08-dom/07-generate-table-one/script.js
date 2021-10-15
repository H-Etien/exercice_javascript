/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // var body = document.getElementById("target");

    // // création des éléments <table> et <tbody>
    // table     = document.createElement("table");
    // tablebody = document.createElement("tbody");
    
    // // création des cellules
    // for(var j = 0; j < 10; j++) {
    //     // création d'un élément <tr>
    //     row = document.createElement("tr");
    
    //     for(var i = 0; i < 2; i++) {
    //         // création d'un élément <td>
    //         cell = document.createElement("td");
    //         // création d'un nœud texte
    //         texte = document.createTextNode("la cellule est ligne " + j + ", colonne " + i);
    //         // ajoute le nœud texte créé à la cellule <td>
    //         cell.appendChild(texte);
    //         // ajoute la cellule <td> à la ligne <tr>
    //         row.appendChild(cell);
    //     }
    //     // ajoute la ligne <tr> à l'élément <tbody>
    //     tablebody.appendChild(row);
    // }
    
    // // ajoute <tbody> à l'élément <table>
    // table.appendChild(tablebody);
    // // ajoute <table> à l'élément <body>
    // body.appendChild(table);

    create_table = document.createElement("table");
    table_body = document.createElement("tbody");

    var row = document.createElement("tr");
    var cell = document.createElement("td");

    for(i=0; i<10; i++){
        row = document.createElement("tr");
        cell = document.createElement("td");
        row.appendChild(cell);
        table_body.appendChild(row);
    }
    
    create_table.appendChild(table_body);

    var test = document.getElementById("target").appendChild(create_table);
})();
