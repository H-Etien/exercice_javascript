/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    if (localStorage.increment == undefined)
        localStorage.increment = 0;
    
    document.getElementById("target").innerHTML = localStorage.increment;
    
    document.getElementById("increment").addEventListener("click", function(){
        localStorage.increment = parseInt(localStorage.increment) + 1;
        document.getElementById("target").innerHTML = localStorage.increment;
    })
})();
