/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// const { bodyParser } = require("json-server");

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var button_len = document.querySelectorAll("button").length;

    for(i=0; i<button_len; i++){
        // document.querySelectorAll("button")[i].addEventListener("click",function(){
        //     alert(document.querySelectorAll("button")[1].id);
        //     document.body.style.background = document.querySelectorAll("button")[2].id;
        // })

        document.querySelectorAll('button')
        .forEach(btn => 
          btn.addEventListener('click', () => document.body.style.background = btn.id)
        );
    }
})();
