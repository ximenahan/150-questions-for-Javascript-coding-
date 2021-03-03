//Q61: same as Q60 but there is no eqality check allowed in the variable
let question = prompt("How many states are there in United States?", "51");
let condition = (question == 51);

if (condition){
  alert("you're right");
  alert("you're so smart");
} else {
  alert("you're wrong");
}


//Q62: ask the user how many states are there in USA, and if they answer 51 tell them exactly. And if they answer is too high or too low tell them respectively.
let question = prompt("How many states are there in United States?", "51");

if (question == 51) {
  alert("exactly!");
} else if (question > 51) {
  alert("too high");
} else {
  alert("too low");
}


//Q63: ask the age of the user, >=18 for showing true, and <18 for showing false by using the conditional operator. Use values instead of function in the operator.
let question = prompt("How old are you", "18");

let answer = (question >= 18) ? true: false;

alert(answer);


//Q64: ask the age of the user, >18 for showing adult, <18 for showing teenager, and <10 for showing children by using the conditional operator. Use values instead of function in the operator.
let question = prompt("How old are you", "18");

let answer = (question >= 18) ? "adult" :
    (question < 10) ? "children":
    "teenager";

alert(answer);



//Q65: use || in an if statement, to distinguish if 10:00 is the working hour (8–17)
let theTime = 10
if ( !(theTime < 8 || theTime > 17) ) {
  alert("It is the working hour!");
}


//Q66: create five variables with the value of 0, null, undefined, NaN, ""respectively, and use||to tell the user that there is no truth value
//method 1
let a = 0;
let b = null;
let c = undefined;
let d = NaN;
let e = "";

if ( !(a || b || c || d || e) ) {
  alert("There is no truth value!");
}

//method 2
alert(a || b || c || d || e || "There is no truth value");


//Q67:use|| to distinguish three different math operations, two are wrong and one is right. show the user the complete and right operation process
let a = 3 + 5 > 8
let b = 4 + 2 == 7 
let c = 6 + 3 == 7

alert( a || b || c );
alert(a || "3+5 should be == 8");
alert(b || "4+2 should be == 6");


//Q68: set the time to 12:30, and alert it's 12:30, and it's 10:30. The former should work and the second shouldn't by using &&
let theHour = 12;
let theMinute = 30;

if( theHour == 12 && theMinute == 30 ){
  alert("It's 12:30"); 
}

if( theHour == 10 && theMinute == 30 ){
  alert("It's 10:30"); 
}


//Q69: set five values with all truth value, and show the user that "there is no false value here"
alert(" " && 3 && "I" && 1 && true && "There is no false value here.");


//Q70: show the boolean type of 0, null, undefined, NaN, "" using two methods
//method 1
[Boolean(0), Boolean(null), Boolean(undefined), Boolean(NaN), Boolean("")].forEach(alert);

//method 2
[!!0, !!null, !!undefined, !!NaN, !!""].forEach(alert);






