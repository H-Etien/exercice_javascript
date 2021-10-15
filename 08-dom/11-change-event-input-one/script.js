/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("pass-one").addEventListener("keydown", function(eve){

        var word = document.getElementById("pass-one").value;
        var count_word = word.length;

        document.getElementById("counter").innerHTML = count_word + "/10";

        if(count_word > 9 && eve.key != "Backspace"){
            // document.getElementById("pass-one").disabled = true;
                eve.preventDefault();
        }
    })
})();
