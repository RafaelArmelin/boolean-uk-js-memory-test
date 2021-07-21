// - Show the user 4 random numbers between 1 and 100 using an alert - DONE
// - Ask them to enter the numbers in the right order using a prompt - DONE
// - Delay the prompt by 15 seconds (so they have time to forget)
// - Check how many numbers they entered correctly
// - Show the user their result

alert("Game Instructions: Try to memorise the next 4 numbers you'll see. Once you press OK, you'll be able to enter them after 15 seconds. Good Luck!");

function getRandomNumber(max) {

    return Math.floor(Math.random() * 100);
}

let generatedNumbers = [];

const num1 = getRandomNumber();
const num2 = getRandomNumber();
const num3 = getRandomNumber();
const num4 = getRandomNumber();

generatedNumbers = [num1, num2, num3, num4];

alert(generatedNumbers);

setTimeout(
    function(){
    let userGuess = null;
    userGuess = prompt("Please, enter the four numbers in the same order you saw them before, use a comma to separate them. ");
    console.log(userGuess);

    alert(userGuess);
return userGuess;
    
}, 8000); 

const test = setTimeout(test1);
console.log(test);



