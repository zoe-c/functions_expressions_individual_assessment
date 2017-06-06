// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:
function max(x,y) {
  if (x > y) {
      console.log(x);
  }
  else if (x < y) {
    console.log(y);
  }
  else {
    console.log( "There is no max.")
  }
}
// max ( , );



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:
function maxOfThree( x, y, z) {
    if (x > y && z) {
      console.log(x);
    }
    else if (y > x && z) {
      console.log(y);
    }
    else if (z > x && y) {
      console.log(z);
    }
    else{
      console.log("There is no single-max value!");
    }
}
// max0fThree ( , , )



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:
function isVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      return "True!";
    }
    else {
      return "False!";
    }
}
 // isVowel("a");




// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(a,b) {
   return a + b;
}
// sum(,);




// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg( x, y, z) {
  return (x + y + z)/ 3 ;
}
// avg( , , );




// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(x) {
  return x.length;
}
//getLength already exists, in a way, through '.length'
// getLength("ZOE");



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(g,f) {
  if (g > f) {
    return "true";
  }
  else {
    return "false";
  }
}
// greaterThan (7, 5);



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(x) {
  return "Hello, " + x + "!";
}

// greet("Guy");




// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib (word1, word2, word3, word4) {
  return "There is a " + word1 + " on fire and " + word2 + " aint gonna put it out fast enough. Best guess is to call " + word3 + " to figure it out... that or get on your knees and call upon the almighty " + word4;
}
// madlib("cat", "thing", "gums", "gutter");




///this is like a simplified version of the minicourse madlib?
