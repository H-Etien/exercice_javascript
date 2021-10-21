/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () =>{
        var heros_id = document.getElementById("hero-id").value;

        url = "http://localhost:3000/heroes"
        fetch(url + "/" + heros_id, {
            method : "DELETE",
        })
        .then(res => res.json())
        
        fetch(url)
        .then(res => res.json())
        .then(heros => console.log(heros))
    })
    
})();
