/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",function(){
        var tab = [];
        var int_max;
        var int_min;
        var somme;
        var moy_nb;

        for(i=1; i<11; i++){
            random_nb = Math.floor(Math.random() * 100 + 1); // *100 pour un nombre entre 0 et 99 et +1 pour nombre entre 1 et 100
            tab[i-1] = random_nb;
            document.getElementById(`n-${i}`).innerHTML = random_nb;
        }
        int_max = tab[0];
        int_min = tab[0];
        somme = 0;

        
        for(i=0; i<10; i++){
            if(tab[i] < int_min)
                int_min = tab[i];
            
            if(tab[i] > int_max)
                int_max = tab[i];

            somme += tab[i];
        }
        moy_nb = somme / 10;

        document.getElementById("min").innerHTML = int_min;
        document.getElementById("max").innerHTML = int_max;
        document.getElementById("sum").innerHTML = somme;
        document.getElementById("average").innerHTML = moy_nb;


        
        
    })
})();
