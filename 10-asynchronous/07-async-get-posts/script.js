/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    /*
    document.getElementById("run").addEventListener("click",async() =>{
        let post = await window.lib.getPosts(resolve => {
            console.log(resolve)
        })
        console.log(post)
    })
    */
    document.getElementById("run").addEventListener("click",async() =>{
        let post = await window.lib.getPosts(resolve => {
            console.log(resolve)
        })
        console.log(post)
    })
})();
