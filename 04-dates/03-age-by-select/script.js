/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function(){
        var anniv_jour = document.getElementById("dob-day").value;
        var anniv_mois = document.getElementById("dob-month").value;
        var anniv_an = document.getElementById("dob-year").value;
        const d = new Date;

        var age = d.getFullYear() - anniv_an;
        if(d.getMonth()+1 < anniv_mois || (d.getMonth()+1 == anniv_mois && d.getDate() < anniv_jour ))
            age -= 1;
            
        alert(age);
    })
    
})();
