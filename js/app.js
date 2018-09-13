console.log('test');


// 1. Write a for loop that will log the numbers 1 through 20.

for(let i = 1; i <= 20; i++  ) {
	console.log(i);
}


//2. Write a for loop that will log only the even numbers in 0 through 200.

//start at 0/while i less than equal to 200/add one
for(let i = 0; i <= 200; i++) {
	//if the value of i is divisible by 2 its even
	if (i % 2 === 0) {
		console.log(i);
	}
	
}

//3. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// let words = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
// let random = words[Math.floor(2*Math.random())]
let cat = "Love me, pet me! HSSSSSSS!"
let words = "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away...";
var randomValue = words[Math.floor(words.length * Math.random())];
console.log(randomValue);

for(let i = 0; i < 20; i++) {
	if (i % 2 === 0){
		console.log(cat[i]);
	}
// console.log('Love me, pet me! HSSSSSSS!');
}





//4. FIZZBUZZ

  let result;
  //declaring variable for highest number
  let max = 100;
  //count starts at 1/once it gets to=100/stop 
  for (let i = 1; i <= max; i += 1) {
  	//if any number is divisible by 3 and 5 log fizzbuzz
      if (i % 3 === 0 && i % 5 === 0) {
        result = "fizzbuzz";
        //if just divisible by 3 log fizz
      } else if (i % 3 === 0) {
        result = "fizz";
        //if just divisible by 5 log buzz
      } else if (i % 5 === 0) {
        result = "buzz";
      } else {
      	//all other numbers be logged
result = i; }
    console.log(result);
  }


//5. GETTING TO KNOW YOU

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//a. Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the shahzad array and replace it with "Gameboy".
//splice removes first index replaces with new value
shahzad.splice(0,1,"Gameboy");
console.log(shahzad);

// b. Daniel just had his birthday; change Daniel's array to reflect him being a year older. Don't just hard code 187--pretend that you don't know that his age is 186, and write your code to just make him a year older than whatever age he was.
for (let i = 0; i < daniel.length; i++) {
	console.log(daniel[i] += 1)
}
// console.log(daniel[1]+ 1);

//c. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

ryan.splice(2,2,"Gotham City");
console.log(ryan)

// d. Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

reuben.pop([3]);
reuben.push("Chicago");
console.log(reuben);

//e. Jim could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code

jim.pop();
jim.push('Chicago', 'Denver', 'Smallville');
console.log(jim);

//f.Bonus: Whoops! Jim is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim is now, remove it from the array using .splice()

jim.splice(0,0,0)
console.log(jim);



//YELL AT NINJA TURTLES

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
// const ninja = turtles[0].toUpperCase();
//2. Use a for loop to call .toUpperCase() on each of them and print out the result.
for (let i = 0; i <= turtles.length; i++) {
	if (typeof turtles[i] === 'string') {
	turtles[i] = turtles[i].toUpperCase();
}
}
console.log(turtles);




































