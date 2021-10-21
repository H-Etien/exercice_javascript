/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts().then(res => {
            res.forEach(ele => {
                window.lib.getComments().then(tab_commentaires =>{
                    // tab_commentaires.forEach(com => {
                    //     if(ele.id == com.id){
                    //         ele.commantaires_nom = com
                    //     }
                    // })
                    ele.commentaires_new = tab_commentaires;
                    console.log(ele)
                })
                .catch(error => console.log(error))
            })
        })
    })
})();
