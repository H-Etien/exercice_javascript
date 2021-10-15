/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",function(){
        var first_password = document.getElementById("pass-one").value;
        var second_password = document.getElementById("pass-two").value;
        if(first_password != second_password){
            for(i=0; i<document.querySelectorAll("input").length; i++){
                document.querySelectorAll("input")[i].style.borderColor = "red";
            }
        }
        else{
            for(i=0; i<document.querySelectorAll("input").length; i++){
                document.querySelectorAll("input")[i].style.borderColor = "black";
            }
        }
    })
})();
