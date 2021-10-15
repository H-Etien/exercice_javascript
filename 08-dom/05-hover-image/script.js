/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var elem = document.getElementsByClassName("material")[0];
    // <section class="material">
    //     <figure>
    //         <img src="../../_shared/img/kiss.svg" alt="Kiss?" data-hover="../../_shared/img/kiss-wink-heart.svg">
    //     </figure>
    // </section>

    var att = elem.querySelector("img").src;

    var lien_change = elem.querySelector("img").getAttribute("data-hover");
    // on accède d'abord à img... puis on va vers attribut data-hover

    elem.querySelector("img").addEventListener("mouseover", function(){
        elem.querySelector("img").src = lien_change;
    })

    elem.querySelector("img").addEventListener("mouseleave", function(){
        elem.querySelector("img").src = att;
    })
})();
