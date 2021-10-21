/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var template = document.getElementById("tpl-hero")
    var clone = document.importNode(template.content, true);
    var is_empty = true;

    document.getElementById("run").addEventListener("click", () =>{
        var id_nb = document.getElementById("hero-id").value;

        fetch("http://localhost:3000/heroes")
        .then(res => res.json())
        .then(tab_hero => {
            tab_hero.forEach(element => {
                if(element.id == id_nb){
                    clone= document.importNode(template.content, true);

                    clone.querySelector(".name").innerHTML = element.name;
                    clone.querySelector(".alter-ego").innerHTML = element.alterEgo;
                    clone.querySelector(".powers").innerHTML = element.abilities;

                    document.getElementById("target").appendChild(clone);
                    is_empty = false;
                }
            });
            if(is_empty)
                document.getElementById("target").innerHTML = "Pas héros avec cet ID" 
        })
        
    })
})();
