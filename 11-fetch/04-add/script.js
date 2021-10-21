/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var new_heros = {
        id : 23,
        name : "",
        alterEgo : "",
        alibities : []
    }

    
    fetch("http://localhost:3000/heroes")
    .then(res => res.json())
    .then(res_tableau =>{
        console.log(res_tableau);
    })
    
    function isEmptyOrSpaces(str){
        return str.replace(/\s/g,"") == ""
    }
    
    document.getElementById("run").addEventListener("click", () =>{
        

        //tableau des pouvoirs, récupération input
        var power = document.getElementById("hero-powers").value;
        var power_split = power.split(",");

        //récupère les input
        var heros_alter = document.getElementById("hero-alter-ego").value;
        var heros_name = document.getElementById("hero-name").value;

        if(isEmptyOrSpaces(heros_alter) || isEmptyOrSpaces(heros_name) || power == [])
            alert("une des case est vide");

        else{
            function NewHero(heros_data){
                //obj_heros alibities
                power_split.forEach(ele_power => {
                    new_heros.alibities.push(ele_power); 
                });
                
                //obj_heros AlterEgo et nom
                new_heros.alterEgo = heros_alter;
                new_heros.name = heros_name;
                
                //id obj_héros = tab[i] + 1 soit .length
                new_heros.id = heros_data.length + 1;

                
                return fetch( "http://localhost:3000/heroes", {
                    method: 'POST', // or 'PUT'
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(new_heros),
                })
                .then(response => response.json())
            }

            fetch("http:localhost:3000/heroes")
            .then(response => response.json())
            .then(data => NewHero(data))
        
            fetch( "http://localhost:3000/heroes")
            .then(res => res.json())
            .then(res_tableau =>{
                console.log(res_tableau);
            })
        }

    })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // function isEmptyOrSpaces(str){
    //     return str.replace(/\s/g,"") == ""
    // }

    // document.getElementById("run").addEventListener("click",()=>{
           
    //     var new_heros = {
    //             id : 23,
    //             name : "",
    //             alterEgo : "",
    //             alibities : []
    //         }

    //     //tableau des pouvoirs, récupération input
    //     var power = document.getElementById("hero-powers").value;
    //     var power_split = power.split(",");

    //     //récupère les input
    //     var heros_alter = document.getElementById("hero-alter-ego").value;
    //     var heros_name = document.getElementById("hero-name").value;

    //     if(isEmptyOrSpaces(heros_alter) || isEmptyOrSpaces(heros_name) || power == [])
    //         alert("une des case est vide");
    //     else{
    //         function insertNewHero(elem){

    //                 console.log(elem.length)
    //             //tableau des pouvoirs, récupération input
    //             var power = document.getElementById("hero-powers").value;
    //             var power_split = power.split(",");
    //             //obj_heros alibities
    //             power_split.forEach(ele_power => {
    //                 new_heros.alibities.push(ele_power); 
    //             });
                
    //             //obj_heros AlterEgo et nom
    //             new_heros.alterEgo = heros_alter;
    //             new_heros.name = heros_name;
                
    //             //id obj_héros = tab[i] + 1 soit .length
    //             new_heros.id = elem.length;
                

    //         return fetch( "http://localhost:3000/heroes", {
    //             method: 'POST', // or 'PUT'
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(new_heros),
    //         })
    //           .then(response => response.json())
    //     }

    // }

    // let url="http://localhost:3000/heroes"
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data =>     insertNewHero(data))
        
    // .catch(error => error);

    // fetch("http://localhost:3000/heroes")
    //             .then(res => res.json())
    //             .then(res_tableau =>{
    //                 console.log(res_tableau);
    //             })

    // })

})();
