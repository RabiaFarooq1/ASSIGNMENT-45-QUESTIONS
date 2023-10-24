"use strict";
//q2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personname = "rabia";
let message = "hello ${rabia}, what are you doing these days?";
console.log(message);
//q3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Personname = "rabia farooq";
// step 1 show in lowercase
let lowercase = Personname.toLowerCase();
console.log(lowercase);
//step 2 show in uppercse 
let uppercase = Personname.toUpperCase();
console.log(uppercase);
//step 3 show in titlecase
let words = personname.split(" ");
let titlecase = " ";
for (let i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
//q4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//Quaid e Azam once said, "Work, work and work."
console.log('Quaid e Azam once said, "Work, work and work."');
//q5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
//Quaid e Azam once said, "Work, work and work."
let famous_person = "Quaid e Azam";
let messagge = famous_person + 'once said, "Work, work and work"';
console.log(messagge);
//q6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName = "\t   Rabia Farooq \n";
console.log("Name with whitespace:", personName);
let strippedName = personName.trim();
console.log("Stripped name:", strippedName);
//q7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Addition:
console.log(4 + 4);
// Subtraction:
console.log(16 - 8);
// Multiplication
console.log(2 * 4);
// Division
console.log(16 / 2);
//q8
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log("-".repeat(80));
console.log(5 + 3);
console.log("-".repeat(80));
console.log(16 - 8);
console.log("-".repeat(80));
console.log(4 * 2);
console.log("-".repeat(80));
console.log(16 / 2);
//q9  
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 11;
let meessage = `My favorite Number is ${favoriteNumber}`;
console.log(meessage);
//q10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//this is first comment for program
console.log(5 + 3);
// Dont change line from 143 to 147
/*let favoriteNumber : number = 11

 let meessage: string = `My favorite Number is ${favoriteNumber}`
 
 console.log(meessage)*/
//q11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["rabia", "laiba", "nida", "bisma"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//q12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let Names = ["rabia", "laiba", "nida", "bisma"];
//loop through each name in the array
for (let name of names) {
    //print a personalized message to each friend
    console.log(`Hello ${name}, You are my best friend`);
}
//q13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteTransportation = [];
favoriteTransportation.push(["motorcycle", "honda"]);
favoriteTransportation.push(["car", "bicycle"]);
favoriteTransportation.push(["civic", "black grande"]);
//console.log(favoriteTransportation)
// I would like to own a Honda motorcycle.
//using for each loop to print a series of statements
favoriteTransportation.forEach(([transport, brand]) => { console.log(`I would like to own a ${brand} ${transport}`); });
//q14
// Guest List: If you could invite anyone, living or decreased, to dinner, who would you invite? Make a list that includes at least three people you'dlinke to invite to dinner. Then use your list to print a message to each person, inviting them to  dinner.
let guestlist = [
    "Farooq Nazir",
    "Shumaila Farooq",
    "Abdullah Farooq",
    "Mahnoor Farooq",
    "Saad Farooq"
];
//loop forEach to print invitation
guestlist.forEach((guestName) => {
    console.log(`Dear ${guestName}, you are invited to dinner please join us.`);
});
//q15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Initial list of guests
let guests = ["Alice", "Bob", "Charlie", "David"];
// Name of the guest who can't make it
const guestCantMakeIt = "Charlie";
// New person to invite
const newGuest = "Eve";
// Print the guest who can't make it
console.log(`${guestCantMakeIt} can't make it to the dinner.\n`);
// Find and replace the guest who can't make it with the new person
const index = guests.indexOf(guestCantMakeIt);
if (index !== -1) {
    guests[index] = newGuest;
}
// Print a second set of invitation messages
for (const guest of guests) {
    console.log(`Dear ${guest}, you are invited to the dinner at my place on Saturday. Please join us!`);
}
// You can also print the updated guest list
console.log("\nUpdated Guest List:");
for (const guest of guests) {
    console.log(guest);
}
//q16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
const guestList = ["Allama Iqbal", "Quaid-e-Azam", "Albert Einstein"];
//one of guest can;t make it,so we reomeve him and invite someone else
const unableToAttend = "Albert Eintein";
const newInvitees = ["Obama", "Marrie Curie", "Elon Musk"];
const biggerTable = true;
// message
console.log(`${unableToAttend} is unable to attend the dinner.`);
if (biggerTable) {
    console.log("Good news! We found a bigger dinner table");
}
const i = guestList.indexOf(unableToAttend);
if (index !== -1) {
    guestList[index] = newInvitees[0];
}
guestList.splice(2, 0, newInvitees[1]);
guestList.push(newInvitees[2]);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, \n\nYou are cordially invited to dinner at my home on Saturday,October28th at 6:00 PM.It will be an honor to have you join me for evening of good Food,conversation,
and company.Please let me know if you are able to attend by responsing to this Message. \n\nSincerely,\n[Rabia Farooq ]`);
}
//q17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
const gueestList = ["Allama Iqbal", "Quaid-e-Azam", "Albert Einstein", "Obama", "Marrie Curie", "Elon Musk"];
//one of guest can;t make it,so we reomeve him and invite someone else
console.log("Good news! We found a bigger dinner table");
//can only invite two people for dinner
console.log("sorry,we can invite only two people for dinner.");
while (guestList.length > 2) {
    const poppedGuest = guestList.pop();
    console.log(`sorry ${poppedGuest}, we won't be able to invite you to dinner.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, \n\nYou still invited to dinner at my home on Saturday,August28th at 6:00 PM.It would be an honor to have you join me for an evening of good Food,conversation,
and company.Please let me know if you are still able to attend by responsing to this Message. \n\nSincerely,\n[Rabia Farooq]`);
}
//clear the list
guestList.length = 0;
console.log(guestList); //output[]
//q18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
const placesToVisit = ["Hunza Valley", "Naran Kanghan", "Taj Mahal", "Victoria Falls", "Great wall of china", "Machu Picchu", "London"];
console.log("Original order");
console.log(placesToVisit);
//print in alphabetical order without modifying the original lsit
console.log("Alphabetial Order:");
console.log([...placesToVisit].sort());
//check original order
console.log("Original order (not modeified):");
console.log(placesToVisit);
//print in reverse alphabeticalorder without modifiyng original list
console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());
//checking original order 
console.log("Original order (not modified):");
console.log(placesToVisit);
//Reversing order of list
placesToVisit.reverse();
console.log("Original order:");
console.log(placesToVisit);
//sort the list in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:");
console.log(placesToVisit);
//sort the list in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order:");
console.log(placesToVisit);
//q19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//example mesaage from ex 18
const placeToVisit = ["Hunza Valley", "Naran Kagahan", "Machu Picchu", "Victoria Falls", "London", "Australia"];
console.log(`I am inviting ${placesToVisit.length} people to dinner.`);
//q20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items
//printing list of languages
const languages = ["English", "Urdu", "Chinese", "Japanise", "Hindi"];
console.log(languages);
const Pakistan = {
    name: "Pakistan",
    capital: "Islamabad",
    population: 59480000,
    language: "Urdu",
};
const canada = {
    name: "Canada",
    capital: "Ottawa",
    population: 37590000,
    language: "English,French",
};
console.log(Pakistan);
console.log(canada);
//q22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const fruits = ["mango", "apple", "strawberry"];
console.log(fruits[3]); //intentional error:accessing index 3
console.log(fruits[1]); //accessing index 1
fruits[2] = "orange"; //correcting error by updating index2
console.log(fruits[2]); //accessing the correcting index 2
//q23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//q24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
let mystring = "world!";
let mynumber = "5";
let myArray = ["yellow", "orange", "blue"];
//test for equality and  nonequality
console.log("Is mystring equal to 'world!'?I predict to true.");
console.log(mystring == "world!");
console.log("Is mystring not eqaul to 'hello'?I predict true");
console.log(mystring != "hello");
//test using lowercase function
console.log("Is mystring all lowercase? I predict true");
console.log(mystring.toLowerCase() == "world");
console.log("Is mystring all uppercase ?I predict to false.");
console.log(mystring.toUpperCase() == "HELLO");
//numerical test
console.log("Is mynumber equal to 5?I predict true");
console.log(mynumber == '5');
console.log("Is mynumber less than 5?I predict false.");
console.log(mynumber < '5');
console.log("Is mynumber greater than or equal to 5?I predict true.");
console.log(mynumber >= '5');
console.log("Is mynumber less than or equal to 10?I predict to true.");
console.log(mynumber <= '10');
//test using and or operations
console.log("Is mynumber between 5 and 15?I predict true.");
console.log(mynumber > '4' && mynumber < '14');
console.log("Is mystring equal to 'world' or mynumber greater than 7?");
console.log(mystring == 'world' || mynumber > '7');
//test whether an item is in array
console.log("Is 'yellow' in the array? I predict true");
console.log(myArray.includes("yellow"));
console.log("Is 'blue' in the array ? I predict true");
console.log(myArray.includes("green"));
console.log("Is 'green' not in array?i predict true");
console.log(!myArray.includes("green"));
console.log("Is 'orange' not in the array? I predict false");
console.log(!myArray.includes("orange"));
//test whether an item is not in an array 
//q25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let Alien_color = "yellow";
if (Alien_color == "yellow") {
    console.log("Congratulations!you just earned 5 points for shooting down a yellow alien.");
}
//q26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
//if block
let aliencolor = "green";
if (aliencolor == "green") {
    console.log("congratulations!you just earned 5 points for shooting down a green alien.");
}
else {
    console.log("congratulations!you earned 10 points.");
}
//else block
let Aliencolor = "red";
if (Aliencolor == "green") {
    console.log("congratualation! you just earned 5 point for shooting a green alien.");
}
else {
    console.log("congratulations!you earned 10 points.");
}
//q27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//for a gren alien1:
let alienColor = "green";
if (alienColor === "green") {
    console.log("congratulation! You earned 5 points for shooting a green alien");
}
else if (alienColor === "yellow") {
    console.log("congratulation! you earned 10 points for shooting a yellow alien");
}
else if (alienColor === "red") {
    console.log("congratulation! you earned 15 points for shooting a red alien!");
}
else {
    console.log("Invalid alien color.");
}
//aliencolor is yellow
let aliencolour = "yellow";
if (aliencolour === "green") {
    console.log("congratulation! You earned 5 points for shooting a green alien");
}
else if (aliencolour === "yellow") {
    console.log("congratulation! you earned 10 points for shooting a yellow alien");
}
else if (aliencolour === "red") {
    console.log("congratulation! you earned 15 points for shooting a red alien");
}
else {
    console.log("Invalid alien color.");
}
//aliencolor2 is green
let aliencolour2 = "red";
if (aliencolour2 === "green") {
    console.log("congratulation!You earned 5 points for shooting a green alien");
}
else if (aliencolour2 === "yellow") {
    console.log("congratulation!you earned 10 points for shooting a yellow alien");
}
else if (aliencolour2 === "red") {
    console.log("congratulation! you earned 15 points for shooting a red alien");
}
else {
    console.log("Invalid alien color.");
}
//q28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
let age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person s a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//q29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["orange", ",mango", "banana"];
if (favorite_fruits.includes("orange")) {
    console.log("you really like orange.");
}
if (favorite_fruits.includes("mango")) {
    console.log("you really like mango.");
}
if (favorite_fruits.includes("banana")) {
    console.log("you really like banana.");
}
if (favorite_fruits.includes("apple")) {
    console.log("you really like applle.");
}
else {
    console.log("mangos are'nt one of your favorite_fruits.");
}
if (favorite_fruits.includes("grapes")) {
    console.log("you really like grapes.");
}
else {
    console.log("grapes are'nt one of your favorite_fruits.");
}
//q30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["admin", "rabia", "abdullah", "mahnoor", "aiza", "fiza", "laiba"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello" + usernames[i] + ",thank you for logging in again.");
    }
}
//q31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
let username = [];
if (usernames.length === 0) {
    console.log("we need to find sopme users!");
}
else {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === "admin") {
            console.log("Hello admin,would you like to see a status report?");
        }
        else {
            console.log("Hello" + usernames[i] + ",thank you for logging in again");
        }
    }
}
//q32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//current users 
let current_users = ["rabia90", "laiba56", "bisma23", "nida12", "fiza45"];
//new users 
let new_users = ["rabia90", "laiba45", "nida33", "faiza44", "saba77"];
//loop through new_users to check for existing usernames
for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("Sorry," + new_users[i] + "is already taken.Please enetr a new username.");
    }
    else {
        console.log("Congratulations!" + new_users[i] + "is available.");
    }
}
//q33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//looop through aray
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinal = "";
    //use if-else chain to print the proper ordinal ending for each number
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    //output the result
    console.log(number + ordinal);
}
//q34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
//favourite pizza
let favourite_pizza = ["fajita", "tikka", "mushroom"];
//using for loop
for (let i = 0; i < favourite_pizza.length; i++) {
    //statement using name of pizza
    console.log("I like " + favourite_pizza[i] + " pizza.");
}
//an additional sentence stating how much you like pizza
console.log("I really love pizza!");
//q35
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["CAT", "RABBIT", "DOG"];
//using for loop to print the name of each animal
for (let i = 0; i < animals.length; i++) {
    //statements about an animal
    console.log("A " + animals[i].toLowerCase() + " would make a great pet.");
}
//what these animals have in common 
console.log("Any of these animals would make a great pet!");
//q36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log("you ordered a" + size + " shirt with the message:" + message);
}
//calling the functionwith arguments
make_shirt("small", "I love Typescript");
//q37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeshirt(size = "Large", message = "I love typescript") {
    console.log("You ordered a " + size + " shirt with the message:" + message);
}
//calling the shirt with default arguments
makeshirt();
//callinmg the shirt with default size
makeshirt(undefined, "Typescript is awesome!");
//calling the func with medium size and default size
makeshirt("Medium");
//q38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "USA") {
    console.log(city + " is in " + country);
}
//calling the function with arguments
describe_city("Karachi", "Pakistan");
describe_city("Dubai", "UAE");
describe_city("San Francisco");
//q39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return city + ", " + country;
}
//calling func arguments
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("New York City", "USA"));
//q40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function makeAlbum(artist, title, tracks) {
    let album = {
        "artist": artist,
        "title": title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = makeAlbum("Laiba", "Making Memories");
let album2 = makeAlbum("Sumera", "Our family story");
let album3 = makeAlbum("Atika", "By Year 2023");
console.log(album1);
console.log(album2);
console.log(album3);
//q41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
let magicians = ["criss angel", "david copperfield", "Lance burton", "derren brown"];
showMagicians(magicians);
//q42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function showMagician(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function makeGreet(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = " the Great " + magicians[i];
    }
}
let Magicians = ["criss angel", "david copperfield", "Lance burton", "derren brown"];
makeGreet(magicians);
showMagicians(magicians);
//q43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function makeGreat(originalMagicians) {
    // Create a copy of the original array
    const greatMagicians = [...originalMagicians];
    // Add "the Great" to each magician's name
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = `the Great ${greatMagicians[i]}`;
    }
    return greatMagicians;
}
function showmagicians(magicians, greatMagicians) {
    console.log("Original Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
    console.log("\nGreat Magicians:");
    for (const magician of greatMagicians) {
        console.log(magician);
    }
}
//q44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich(...items) {
    console.log("you have order a sandwich with following items:");
    console.log(items);
}
//call the function three items with different number of arguments
orderSandwich("egg", "cheese", "salad");
orderSandwich("grilled cheese", "nutella", "peanut better");
orderSandwich("mayo", "jelly", "chocolate");
//q45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer, model, ...args) {
    const CarInfo = {
        manufacturer: manufacturer,
        model: model
    };
    //loop through the array of key-value pairs and store them in object
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        CarInfo[key] = value;
    }
    return CarInfo; //return the objct
}
//call the function and print the return object
const Car = storeCarInfo('Ford', 'Mustang', 'color', 'red', 'year', 2022);
console.log(car); //output
