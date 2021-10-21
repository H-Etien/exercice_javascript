/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function(){
        
        window.lib.getPosts(function(error, articles){
            if(error)
                console.log(error);
            else{
                for(element in articles){
                    window.lib.getComments(element,(error, commentS) => {

                        if(error)
                            console.log(error);
                        else{
                            articles[element].commentaireS=commentS;
                            // console.log("araticle : " + JSON.stringify(articles, null, 1));
                            // console.log("article[] : " + JSON.stringify(articles[element], null, 1))
                            console.log(articles[element]);
                        }
                    })
                }
            }
        })
    })
    
    // console.log(window.lib.getComments((error,articles)));
})();
