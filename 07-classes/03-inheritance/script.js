/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    
    document.getElementById("run").addEventListener("click", function(){
        class Cat extends Animal{
            static greeting = "Meow";
            name = "cat";    
        }

        class Dog extends Animal{
            static greeting = "Woof";
            name = "dog";
        }

        var chat = new Cat;
        var dog = new Dog;

        console.log(dog.sayHello());
        console.log(chat.sayHello());
    })
})();
