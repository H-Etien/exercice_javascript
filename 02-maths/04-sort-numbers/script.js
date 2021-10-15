/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value


    document.getElementById("run").addEventListener("click", () => {
    var number = document.getElementById("numbers").value;
    var tab = number.split(", ");


    var is_sorted = false;

    for(i=0; i<tab.length; i++){
        tab[i] = parseInt(tab[i]);
    }

    while(is_sorted == false){

        is_sorted = true;

        for(var i=0; i<tab.length-1; i++){
            if(tab[i] > tab[i+1]){
                let inter = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = inter;

                is_sorted = false;
            }
        }
    }

    alert(tab);
    

    // alert( parseInt(document.getElementById("numbers").value));
    
    });
})();
