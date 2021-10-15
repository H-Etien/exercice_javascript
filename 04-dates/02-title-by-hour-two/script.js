/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    
    const d = new Date;

    if(d.getHours >= 18)
        document.getElementById("target").innerHTML = "Bonsoir";
    else if(d.getHours == 17 && d.getMinutes >= 30)
        document.getElementById("target").innerHTML = "Bonsoir";
    else
        document.getElementById("target").innerHTML = "Bonjour";
})();
