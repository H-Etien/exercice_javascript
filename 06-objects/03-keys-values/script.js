/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    document.getElementById("run").addEventListener("click", function(){
        var msg_key = "";
        var msg_value = "";

        for(const key in person){
            msg_key += key + "\n";
            msg_value += person[key] + "\n";
        }
        console.log(msg_key);
        console.log(msg_value);
    })
})();
