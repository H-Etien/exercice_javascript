/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person{
        firstname = "John";
        lastname = "Doe";

        get name(){
            return (this.firstname + this.lastname);
        }
    
        set name(value){
            [this.lastname, this.firstname] = value.split(" ");
        }
        // set name(value){
        //     var msg = "";
        //     const nom_split = value.split(" ");
        //     this.lastname = nom_split[0];
        //     this.firstname = nom_split[1];
    
        //     msg = this.lastname + "\n" + this.firstname;
        //     console.log(msg);
        // }
    } 

    document.getElementById("run").addEventListener("click",function(){
        var personne = new Person;
        console.log(personne.name);
        var nom = prompt("Quel est le nom et prénom ? (séparés d'un espace)");

        personne.name = nom;

        console.log("Votre nom : " + personne.lastname);
        console.log("Votre prénom : " + personne.firstname);
    })
})();
