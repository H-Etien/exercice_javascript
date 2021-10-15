/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    const d = new Date;

    const tab_jour = [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
    ];

    const tab_mois = [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
    ];

    var date_fr = tab_jour[d.getDay()] + " " 
                    + d.getDate().toString() + " " 
                    + tab_mois[d.getMonth()] + " " 
                    + d.getFullYear().toString() + ", "
                    + d.getHours().toString() + "h" 
                    + d.getMinutes().toString();

    document.getElementById("target").innerHTML = date_fr;
})();
