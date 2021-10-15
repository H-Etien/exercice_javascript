/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function(){

        var annee_choisi = document.getElementById("year").value;

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

        const d = new Date;
        var msg = "";

        for(i=0; i<12; i++){
            d.setFullYear(annee_choisi, i, 13);
            if(d.getDay() == 5)
                msg += tab_mois[d.getMonth()] + "\n";
        }

        alert(msg);
    })
})();
