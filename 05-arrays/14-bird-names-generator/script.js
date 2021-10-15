/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", function(){
        var index_oiseau = Math.floor(Math.random()*12);
        var index_adjectif = Math.floor(Math.random()*11);

        var bird_choosen = birds[index_oiseau];
        var adj_choosen = Array.from(adjectives)[index_adjectif];
        //il faut array.from(set)[index] pcq adjectif[index] n'existe pas, c'est un Set

        if(bird_choosen.fem == true){
            document.getElementById("target").innerHTML = "La " + bird_choosen.name + " " + adj_choosen + "e";
        }
        else{
            document.getElementById("target").innerHTML = "Le " + bird_choosen.name + " " + adj_choosen ;
        }
    })
})();
