/*Q85.5: The practice for return. Write a function pow(x,n) that returns x in power n. Or, 
in other words, multiplies x by itself n times and returns the result. 
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).*/

//complex version
function pow (askX, askN) {
  let result = askX;
  
  for (i = 1; i < askN; i++) {
    result *= askX
  }

  return result; 
}

let askX = prompt("what is the x?", "");
let askN = prompt("what is the n?", "");

alert (pow (askX, askN));

// simple version
function pow (askX, askN) {
  let result = askX ** askN ;
  
  return result; 
}

let askX = prompt("what is the x?", "");
let askN = prompt("what is the n?", "");

alert (pow (askX, askN));

//even the simplier version
function pow (askX, askN) {  
  return askX ** askN; 
}

let askX = prompt("what is the x?", "");
let askN = prompt("what is the n?", "");

alert (pow (askX, askN));



//Q89: use three kinds of function declaration for Q83
//function declaration
function anAlert1() {
  alert("I am alert 1!");
}

anAlert1();

//function expression
let anAlert2 = function() {
  alert("I am alert 2!");
}

anAlert2();

//arrow function 
let anAlert3 = () => alert("I am alert 3!");

anAlert3();


//Q90: use arrow function for Q87
let askUserAge = confirm("Are you under 18",);

let theFeedback = (askUserAge == true) ?
                () => alert("yes") :
                () => alert("no");

theFeedback();



//Q91: create an object with two properties 
let anObjectExample = {
  name: "Jessica",
  age: 30,
};


//Q92:create an object with three properties. And create an interaction with users which let them to call the random properties out
let anObject = {
  height: 157,
  age: 24,
  gender: "female",
};


let userInteraction = prompt("What do you want to know about Jonanna, height, age, or gender?", "height");

alert( anObject[userInteraction] );


//Q93: create an object with three properties. And try to find if these properties exist in those objects
let anObject = {
  date: "0305",
  day: "Firday",
  month: "March",
};

alert(anObject.date == "0305");
alert(anObject.day == "Firday");
alert(anObject.month == "March");


//Q94: create an object with three properties, and output all values of the properties the object without directly calling them.



//Q95: create an object with five students and thier corresponding seat numbers(integers). The number is ordered decremently. Then, output all their numbers in the arranged order.



//Q96: Write the self-created function, isEmpty(obj) which returns true if the object has no properties, false otherwise.



//Q97: there is an object with 3 person and their corresponding salaries. Write the code to sum all salaries and store in the variable sum.



//4.2 Object references and copying



//Q98: create an object with three properties. And then create an independent copy with two diferent methods



//Q99: merge three different objects togther



//Q100:: create an object with three properties. And modify all their values



//4.3 Garbage collection: review the concept. Highly important



//4.4 Object methods, "this"



//Q101: create a method that show hello world by three methods, create then assign, pre-declared, shorthand (as the other objects)



//Q102: creat an obejct with two properties, and create a method to show the two values of the object



//Q103: create two objects with two diferent values of properties but with the same name, and use a method to show one the value of their properties



//Q104: create a method using arrow function, and see the failure of "this"


