/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    var msg = "";
    for(i=1; i<= 100; i++){
        if(i%15 == 0){
            msg += i + " : fizzbuzz \n";
        }
        else if(i%3 == 0){
            msg += i + " : fizz \n";
        }
        else if(i%5 == 0){
            msg += i + " : buzz \n";
        }
        else
            msg += i + "\n";
    }

    alert(msg);
    console.log(msg);

})();
