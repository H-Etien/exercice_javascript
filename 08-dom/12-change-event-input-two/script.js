/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    tab_number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    document.getElementById("pass-one").addEventListener("keyup", function(event){
        var word = document.getElementById("pass-one").value;
        var word_count = word.length;

        if(word_count >= 8){
            nb_count = 0;
            for(i=0; i<word_count; i++){
                tab_number.forEach(function(element){
                    if (element == word[i]){
                        nb_count++;
                    }
                })
            }

            if(nb_count >= 2){
                document.getElementById("validity").innerHTML = "ok";
            }
            else{
                document.getElementById("validity").innerHTML = "Pas ok";
            }
        }
    })
})();
