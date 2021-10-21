/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var template = document.getElementById("tpl-hero");
    var clone = document.importNode(template.content, true);
    // var hero_name = clone.querySelector(".name");
    // var hero_alter_ego = clone.querySelector(".alter-ego");
    // var hero_power = clone.querySelector(".powers");

    document.getElementById("run").addEventListener("click", () => {
        //var fetch_done = 
        fetch("http://localhost:3000/heroes")
        .then(response => response.json())
        .then(tab_hero => {
            tab_hero.forEach(element => {
                clone = document.importNode(template.content, true);

                clone.querySelector(".name").innerHTML = element.name;
                clone.querySelector(".alter-ego").innerHTML = element.alterEgo;
                clone.querySelector(".powers").innerHTML = element.abilities;

                document.getElementById("target").appendChild(clone);
            });
        })
    })
})();
