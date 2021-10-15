/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    document.getElementById("run").addEventListener("click", function(){
        var array_mix = keys.map(function (valeur_mix , index){
            return [valeur_mix, values[index]];
        }) // fonction pour combiner les 2 array en array avec par index 2 valeurs

        var obj = Object.fromEntries(array_mix);
        
        console.log(obj);
        
    })
})();
