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
        return parseInt(document.getElementById(id_cible).getAttribute("data-min"));
    }

    function max_value(id_cible){
        return parseInt(document.getElementById(id_cible).getAttribute("data-max"));
    }

    function current_value(id_cible){
        return parseInt(document.getElementById(id_cible).getAttribute("value"));
    }

    var obj_value = {
        case_1 : parseInt(document.getElementById("part-one").getAttribute("value")),
        case_2 : parseInt(document.getElementById("part-two").getAttribute("value")),
        case_3 : parseInt(document.getElementById("part-three").getAttribute("value")),
        case_4 : parseInt(document.getElementById("part-four").getAttribute("value"))
    }

    function target(){
        let bouton_1 = obj_value.case_1.toString();
        let bouton_2;
        let bouton_3; 
        let bouton_4;
        if(obj_value.case_2 < 10)
            bouton_2 = "0" + obj_value.case_2.toString();
        else
            bouton_2 = obj_value.case_2.toString();
        
        if(obj_value.case_3 < 10)
            bouton_3 = "0" + obj_value.case_3.toString();
        else
            bouton_3 = obj_value.case_3.toString();

        if(obj_value.case_4 < 10)
            bouton_4 = "0" + obj_value.case_4.toString();
        else
            bouton_4 = obj_value.case_4.toString();

        let final = "+" + bouton_1 + bouton_2 + bouton_3 + bouton_4;  
        document.getElementById("target").innerHTML = final;
    }

    //pour boutton 1
    var is_stopped_1 = true;
    var id_cible_1 = "part-one";

    var casino_1 = setInterval(function(){
        if(current_value(id_cible_1) >= max_value(id_cible_1)){
            obj_value.case_1 = min_value(id_cible_1);
            document.getElementById(id_cible_1).setAttribute("value", obj_value.case_1);
        }
        else
            document.getElementById(id_cible_1).setAttribute("value", obj_value.case_1++);

        target();
    }, 100);


    document.getElementById("fix-part-one").addEventListener("click", function(){
        if(is_stopped_1){
            clearInterval(casino_1);
            is_stopped_1=false;

            document.getElementById("fix-part-one").innerHTML = "click";
        }
        else{
            casino_1 = setInterval(function(){
                if(current_value(id_cible_1) >= max_value(id_cible_1)){
                    obj_value.case_1 = min_value(id_cible_1);
                    document.getElementById(id_cible_1).setAttribute("value", obj_value.case_1);
                }
                else
                    document.getElementById(id_cible_1).setAttribute("value", ++obj_value.case_1);

                target();
            }, 100);
            is_stopped_1=true;

            document.getElementById("fix-part-one").innerHTML = "Stop";
        }
    });

    //boutton 2
    var is_stopped_2 = true;
    var id_cible_2 = "part-two";

    var casino_2 = setInterval(function(){
        if(current_value(id_cible_2) >= max_value(id_cible_2)){
            obj_value.case_2 = min_value(id_cible_2);
            document.getElementById(id_cible_2).setAttribute("value", obj_value.case_2);
        }
        else
            document.getElementById(id_cible_2).setAttribute("value", ++obj_value.case_2);

        target();
    }, 100);

    
    document.getElementById("fix-part-two").addEventListener("click", function(){
        if(is_stopped_2){
            clearInterval(casino_2);
            is_stopped_2=false;

            document.getElementById("fix-part-two").innerHTML = "click";
        }
        else{
            casino_2 = setInterval(function(){
                if(current_value(id_cible_2) >= max_value(id_cible_2)){
                    obj_value.case_2 = min_value(id_cible_2);
                    document.getElementById(id_cible_2).setAttribute("value", obj_value.case_2);
                }
                else
                    document.getElementById(id_cible_2).setAttribute("value", ++obj_value.case_2);

                target();
            }, 100);
            is_stopped_2=true;

            document.getElementById("fix-part-two").innerHTML = "Stop";
        }
    });

    //bouton 3

    var is_stopped_3 = true;
    var id_cible_3 = "part-three";

    var casino_3 = setInterval(function(){
        if(current_value(id_cible_3) >= max_value(id_cible_3)){
            obj_value.case_3 = min_value(id_cible_3);
            document.getElementById(id_cible_3).setAttribute("value", obj_value.case_3);
        }
        else
            document.getElementById(id_cible_3).setAttribute("value", ++obj_value.case_3);

        target();
    }, 100);

    
    document.getElementById("fix-part-three").addEventListener("click", function(){
        if(is_stopped_3){
            clearInterval(casino_3);
            is_stopped_3=false;

            document.getElementById("fix-part-three").innerHTML = "click";
        }
        else{
            casino_3 = setInterval(function(){
                if(current_value(id_cible_3) >= max_value(id_cible_3)){
                    obj_value.case_3 = min_value(id_cible_3);
                    document.getElementById(id_cible_3).setAttribute("value", obj_value.case_3);
                }
                else
                    document.getElementById(id_cible_3).setAttribute("value", ++obj_value.case_3);

                target();
            }, 100);
            is_stopped_3=true;

            document.getElementById("fix-part-three").innerHTML = "Stop";
        }
    });

    //bouton 4

    var is_stopped_4 = true;
    var id_cible_4 = "part-four";

    var casino_4 = setInterval(function(){
        if(current_value(id_cible_4) >= max_value(id_cible_4)){
            obj_value.case_4 = min_value(id_cible_4);
            document.getElementById(id_cible_4).setAttribute("value", obj_value.case_4);
        }
        else
            document.getElementById(id_cible_4).setAttribute("value", ++obj_value.case_4);

        target();
    }, 100);

    
    document.getElementById("fix-part-four").addEventListener("click", function(){
        if(is_stopped_4){
            clearInterval(casino_4);
            is_stopped_4=false;

            document.getElementById("fix-part-four").innerHTML = "click";
        }
        else{
            casino_4 = setInterval(function(){
                if(current_value(id_cible_4) >= max_value(id_cible_4)){
                    obj_value.case_4 = min_value(id_cible_4);
                    document.getElementById(id_cible_4).setAttribute("value", obj_value.case_4);
                }
                else
                    document.getElementById(id_cible_4).setAttribute("value", ++obj_value.case_4);

                target();
            }, 100);
            is_stopped_4=true;

            document.getElementById("fix-part-four").innerHTML = "Stop";
        }
    });


})();
