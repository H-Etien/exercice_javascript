/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var obj_button_value = {
        button_value_1 : "460",
        button_value_2 : "00",
        button_value_3 : "00",
        button_value_4 : "00"
    }

    function update_value(){
        document.getElementById("target").innerHTML = 
        "+" + 
        obj_button_value.button_value_1 +
        obj_button_value.button_value_2 +
        obj_button_value.button_value_3 +
        obj_button_value.button_value_4 ;
    }

    function change_range(min , max, current){
        current++;
        if(current > max)
            current = min;
        return current;
    }

    function bouton (id_cible){
        return document.getElementById(`${id_cible}`);
    }

    //data-min
    function min_bouton(id_cible){
        return document.getElementById(`${id_cible}`).getAttribute("data-min");
    }

    //data-max
    function max_bouton(id_cible){
        return document.getElementById(`${id_cible}`).getAttribute("data-max");
    }

    button_name = "part-one";
    bouton(button_name).addEventListener("click", function(){
        var button_name = "part-one"
        bouton(button_name).innerHTML = change_range(min_bouton(button_name), max_bouton(button_name), parseInt(bouton(button_name).innerHTML));

        obj_button_value.button_value_1 = bouton(button_name).innerHTML;
        

        update_value();
        //update l'objet_value pour pouvoir l'afficher
    })

    button_name_2 = "part-two";
    bouton(button_name_2).addEventListener("click", function(){
        bouton(button_name_2).innerHTML = change_range(min_bouton(button_name_2), max_bouton(button_name_2), parseInt(bouton(button_name_2).innerHTML));
        //incrémente la vleur du bouton

        obj_button_value.button_value_2 = bouton(button_name_2).innerHTML;
        //assigne la valeur dans l'objet_valeur
        
        if(obj_button_value.button_value_2.length == 1)
            obj_button_value.button_value_2 = "0" + obj_button_value.button_value_2;
            // rajoute 0 à au value à un chiffre
        update_value();
    })

    button_name_3 = "part-three";
    bouton(button_name_3).addEventListener("click", function(){
        bouton(button_name_3).innerHTML = change_range(min_bouton(button_name_3), max_bouton(button_name_3), parseInt(bouton(button_name_3).innerHTML));

        obj_button_value.button_value_3 = bouton(button_name_3).innerHTML;

        if(obj_button_value.button_value_3.length == 1)
            obj_button_value.button_value_3 = "0" + obj_button_value.button_value_3;

        update_value();
    })

    button_name_4 = "part-four";
    bouton(button_name_4).addEventListener("click", function(){
        bouton(button_name_4).innerHTML = change_range(min_bouton(button_name_4), max_bouton(button_name_4), parseInt(bouton(button_name_4).innerHTML));

        obj_button_value.button_value_4 = bouton(button_name_4).innerHTML;

        if(obj_button_value.button_value_4.length == 1)
            obj_button_value.button_value_4 = "0" + obj_button_value.button_value_4;

        update_value();
    })


    // var num = document.getElementById("part-one").innerHTML = ;
})();
