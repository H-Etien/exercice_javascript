/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // document.getElementById("source").getAttribute("data-image")

    //var id_choisi = document.getElementById("source");
    // on obtient <span id="source" data-image="http://www.randomkittengenerator.com/cats/rotator.php"></span>

    //console.log(id_choisi.getAttribute("data-image"));
    // on obtient http://www.randomkittengenerator.com/cats/rotator.php; le lien qu'on voulait

    var lien_chat = document.getElementById("source").getAttribute("data-image");
    
    var image = document.createElement("img");
    //on créer un attribut img, mais on ne sait pas encore où il va se poser

    image.src = lien_chat;
    // la source du lien de l'image

    document.getElementById("target").appendChild(image);
    //on pose l'attribut image dans l'id target



})();
