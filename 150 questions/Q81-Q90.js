//Q81: use switch, case, break,default method. ask the user to enter a value from 0–2. There are four case, it is 0, 1, 2, and it is out of the range
let question = prompt("Enter a value from 0-2", "");

switch (question) {
  case "0":
    alert(0);
    break;

  case "1":
    alert(1);
    break;

  case "2":
    alert(2);
    break;

  default:
  alert("It is out of the range");
}
//don't forget that the value is strict equality check, the type matters(unlike the scenario in Q81.5 )



//Q81.5: use "if" to ask the user to enter a value from 0–2. There are four case, it is 0, 1, 2, and it is out of the range

let question = prompt("Enter a value from 0-2", "");

if (question == 0) {
  alert(0);
} else if (question == 1){
  alert(1);
} else if (question == 2){
  alert(2);
} else {
  alert("It is out of range");
}





//Q82: same as Q81, but use grouped cases to show more alerts for more of the cases
let question = prompt("Enter a value from 0-2", "");

switch (question) {
  case "0":
    alert(0);
    break;

  case "1":
    alert(1);
    break;

  case "2":
    alert(2);
    break;

  default:
  alert("It is out of the range");
}
//don't forget that the value is strict equality check, the type matters(unlike the scenario in Q81.5 )





//Q83: decalre a function with an alert and call it out
function declareAlert() {
  alert("I am the function with an alert!");
}

declareAlert();




//Q84: show A for apple, B for ball, C for cat in one function
function alphabetExample() {
  alert("A for apple");
  alert("B for ball");
  alert("C for cat");
}

alphabetExample();




//Q85: ask the age of the user, and the person is more than 18, then tell one access granted, if no, ask one do you have the permission from the parents, if no then show access deny

//the template on the site
let age = prompt('How old are you?', 18);

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}


if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}



//my own version
let userAge = prompt("How old are you?", "18");
let userPermission;

function ageCheck() {

if (userAge >= 18) {
  return alert("access granted");
} else {
   userPermission = confirm("Do you have the permissions from your parents?", "")
}

if (userPermission) {
  alert("access granted");
} else {
  alert("access denied");
}

}

ageCheck();






//Q86: use both function declaration and function expression for Q83
//function declaration
function declareAlert1() {
  alert("I am the function with an alert!");
}

declareAlert1();

//function expression
let declareAlert2 = function() {
  alert("I am the function with an alert!");
}

declareAlert2();




//Q86.5: write the funciton with two parameters as the template which stores in the local, then call the template using two different examples
function template(parameters1, parameters2) {
  alert(parameters1 + " comes from " + parameters2);
} 

template("Ximena", "Tokyo");
template("Esperanza", "Madrid");
//the given values are copied to local parameters1 and parameters2. Then the function uses them.





/*Q87: using callback function, Ask if you are under 18, you are under 18 for yes, and you cancel the question for no. 
Use both function expression and fuction declaration. Also write another without the callback function. It would be like the extension of confirm*/

//without using callback function
let under18;

function askUserAge() {
  under18 = confirm("Are you under 18?", "");

  if(under18) {
    alert("Your're under 18");
  } else {
    alert("you cancel the question");
  }
} 

askUserAge();

//using callback function, function declaration 
function askUser(question, yes, no) {
  if (confirm(question)){
    yes();
  } else no();
}

function showYes() {
  alert("Your're under 18");
}

function showNo() {
  alert("you cancel the question");
}

askUser("Are you under 18?", showYes, showNo);

//using callback function, function expression
function askUser(question, yes, no) {
  if (confirm(question)){
    yes();
  } else no();
}

let showYes = function() {
  alert("Your're under 18");
} 

let showNo = function() {
  alert("you cancel the question");
}

askUser("Are you under 18?", showYes, showNo);

//using callback function, function expression(the template on the site)
function askUser(question, yes, no) {
  if (confirm(question)){
    yes();
  } else no();
}

askUser(
  "Do you agree?",
  function() { alert("Your're under 18"); },
  function() { alert("you cancel the question"); }
);





//Q88: set an example to show the differenc between the function expression and the function declaration
//example 1: this would work for function declaration
let name = "Jessica";

isFemale();

function isFemale(){
  alert(name +" is female");
}


//example: this wouldn't work for function expression
let name = "Jessica";

isFemale();

let isFemale = function() {
  alert(name +" is female");
}

// example 2: ask the age, get hello adult for over 18, get hello children for under 18. Function expression version. It works
let askAge = prompt("How old are you?", "18");
let welcome;

if (+askAge >= 18) {
  
  welcome = function() {
    alert("Hello adult");
};
} else {

  welcome = function() {
    alert("Hello children");
  };
  
}

welcome();

// example 2: ask the age, get hello adult for over 18, het hello children for under 18. Function declaration version. It doesn't work

let askAge = prompt("How old are you?", "18");

if (age < 18) {

  function welcome() {
    alert("Hello children");
  }

} else {

  function welcome() {
    alert(""Hello adult"");
  }

}

welcome(); 

