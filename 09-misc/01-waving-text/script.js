/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target = document.getElementById("target");
    var msg = target.innerHTML;
    // on va stocker tout le contenu du msg dans un tableau

    var new_msg = "";

    var i = 0;
    lettre = "";
    size_letter = 1;
    sens_vague=true;

    for(i; i<msg.length; i++){
        lettre = msg[i];    
        
        if(size_letter == 1)
            sens_vague = true;
        
        if(size_letter == 5)
            sens_vague = false;

        if(sens_vague)
            size_letter++;

        if(sens_vague == false)
            size_letter--;

        new_msg += '<span style="font-size:'+ size_letter + 'em">' + lettre + '</span>';

        target.innerHTML = new_msg;
    }

    // setInterval(function() {
    //     new_msg = '<span style="font-size:'+ size_letter + 'em"> 1 </span>';
    //     size_letter += 1;

    //     target.innerHTML = new_msg;
    // }, 1000);
    




    

    

    // target.innerHTML = target.innerHTML.replace('o', '<span style="font-size:5em">o</span>');

})();
