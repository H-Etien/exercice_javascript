/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var number_guess = Math.floor(Math.random()*100+1);
    var number;
    var nb_input = 0;
    
    do{
        number = prompt("quel est votre nombre ?");
        if(number > number_guess)
            alert("plus petit");

        if(number < number_guess)
            alert("plus grand");

        nb_input++;

    }while(number != number_guess)

    alert("bien joué, réussi en " + nb_input.toString() + " fois");
})();
