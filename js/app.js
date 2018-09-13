console.log('test');


// 1. Write a for loop that will log the numbers 1 through 20.

for(let i = 1; i <= 20; i++  ) {
	console.log(i);
}


//2. Write a for loop that will log only the even numbers in 0 through 200.


for(let i = 0; i <= 200; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
	
}

//3. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// let words = "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away...";

// for(let i = 0; i < 20; i++) {
// 	if (i % 2 === 0){
// 		console.log(Math.floor(Math.random() * 20))
// 	}
// 	console.log('Love me, pet me! HSSSSSSS!');
// }




//FIZZBUZZ

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




