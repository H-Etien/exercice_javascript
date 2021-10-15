/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    var tab =[];
    i_max = fruits.length;

document.getElementById("run").addEventListener("click", function(){
    i=0;
    while(i < i_max){
        need_add = true;

        tab.forEach(function(item_tab){

            if(item_tab == fruits[i]){
                fruits.splice(i,1);
                need_add = false;
            }
        })

        if(need_add){
            tab.push(fruits[i]);
            i++;
        }
        else{
            i_max--;
        }

    }
    console.log(fruits);
})
})();
