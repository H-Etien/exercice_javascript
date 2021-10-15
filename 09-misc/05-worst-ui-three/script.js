/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    function target(id_cible){
        return document.getElementById(id_cible);
    }

    function min_value(id_cible){
        return document.getElementById(id_cible).getAttribute("data-min");
    }

    function max_value(id_cible){
        return document.getElementById(id_cible).getAttribute("data-max");
    }

    function current_value(id_cible){
        return document.getElementById(id_cible).getAttribute("value");
    }

    // function casino_slot(min, max, show_value){
    //     show_value++;

    //     if(show_value > max)
    //         show_value = min;

    //     setTimeout(casino_slot(min, max, show_value), 1000);
    //     console.log(show_value);
    //     console.log(min);
    // }

    


    var part_1 = "part-one";

    function casino(value){
        value++;
        if(value == 480)
            value = 460;
        
        console.log("valeur : " + value);
        setTimeout(casino(value), 10000);
    }

    casino(parseInt(current_value(part_1)));
    

    // casino_slot(parseInt(min_value(part_1)), parseInt(max_value(part_1)),c));
    // document.getElementById("fix-part-one").addEventListener("click", casino_slot(parseInt(min_value(part_1)), parseInt(max_value(part_1)),parseInt(current_value(part_1))));



})();
