/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    do{
        var age = prompt("Quel est ton âge ?");
        var sexe = prompt("Homme ou femme ?");
        var ville = prompt("La ville où tu habites ?");
        var msg = (
            "Ton âge est " + age  + "\n" +
            "Ton sexe est " + sexe  + "\n" +
            "Ta ville est " + ville + "\n" 
        );
        var confirmation = confirm(msg + "Confirmes-tu tout ce que tu as écris ?");
    }while(confirmation == false);
})();
