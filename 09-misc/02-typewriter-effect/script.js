/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target = document.getElementById("target");
    var msg = target.innerHTML;

    new_msg = "";
    var i = 0;

    var delay = 200;

    // setInterval(() => {
    //     new_msg += msg[i];
    //     i++;

    //     target.innerHTML = new_msg;
    // }, 20);

    function apparition_lettre (){

        delay = Math.floor(Math.random() * 300 + 50);
        
        new_msg += msg[i];
        target.innerHTML = new_msg;

        i++;

        if(i<msg.length)
            setTimeout(apparition_lettre, delay);
    }

    

    apparition_lettre ()

    console.log("last" + i);
    console.log("last" + i);

})();
