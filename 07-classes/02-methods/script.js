/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function(){
        class Person {
            constructor(nom, prenom){
                this.nom = nom;
                this.prenom = prenom;
            }

            sayHello(){
                return ("Hello, " + this.nom + " " + this.nom + "!");
            }


        }

        var personne = new Person("Huang", "Etienne");
        console.log(personne.sayHello());
    })
})();
