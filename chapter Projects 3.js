/* Rock Paper Scissors game
This is a game between a player and the computer, where both will make a random 
selection of either Rock, Paper, or Scissors (alternatively, you could create a version 
using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and 
Scissors will beat out Paper. You can use JavaScript to create your own version of 
this game, applying the logic with an if statement. Since this project is a little more 
difficult, here are some suggested steps:

1. Create an array that contains the variables Rock, Paper, and Scissors.
2. Set up a variable that generates a random number 0-2 for the player and then 
do the same for the computer's selection. The number represents the index 
values in the array of the 3 items.
3. Create a variable to hold a response message to the user. This can show the 
random results for the player and then also the result for the computer of the 
matching item from the array. 
4. Create a condition to handle the player and computer selections. If both are 
the same, this results in a tie. 
5. Use conditions to apply the game logic and return the correct results. 
There are several ways to do this with the condition statements, but you 
could check which player's index value is bigger and assign the victory 
accordingly, with the exception of Rock beating Scissors.
6. Add a new output message that shows the player selection versus the 
computer selection and the result of the game */

// Step 1: Create an array containing the possible choices
let arr = ["Rock", "Paper", "Scissors"]; 

// Step 2: Declare variables to hold player and computer responses
let resp1, resp2;

// Step 3: Generate random selections for both the player and the computer
let rand = arr[Math.floor(Math.random() * arr.length)]; // Random choice for the player
let comp = arr[Math.floor(Math.random() * arr.length)]; // Random choice for the computer

    
   // Step 4: Assign the random selections to the response variables
resp1 = rand; // Player's choice
resp2 = comp; // Computer's choice

// Step 5: Output the player and computer selections
console.log("Player's result: " + resp1); // Display player's choice
console.log("Computer's result: " + resp2); // Display computer's choice

// Step 6: Compare the selections and determine the result
if (resp1 === resp2) {
    console.log("Draw game..."); // If both choices are the same, it's a draw
} 
else if (
    (resp1 === "Scissors" && resp2 === "Paper") || // Scissors beats Paper
    (resp1 === "Paper" && resp2 === "Rock") ||    // Paper beats Rock
    (resp1 === "Rock" && resp2 === "Scissors")     // Rock beats Scissors
) {
    console.log("Player Wins!!!!"); // Player wins if their choice beats the computer's choice
} 
else {
    console.log("Computer Wins!!!!"); // Computer wins if their choice beats the player's choice
}