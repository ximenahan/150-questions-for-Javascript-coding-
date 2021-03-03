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



//Q71:show the inverse boolean type of 0, null, undefined, NaN, ""
[!0, !null, !undefined, !NaN, !""].forEach(alert);




//Q72: turn result = a ?? b with other combined operators
//the result of a ?? b == [(a !=null)&&(a !=undefined)]? a : b


//Q73: there no no name for the variable, and show Anonymous for the fact
let noName;

alert(noName ?? "Anonymous");





//Q74: I want to show 10 to 1 using while
let i = 10;

while (i) {
  alert(i);
  i--;
}


//Q75:I want to show 10 to 1 using while and do…while

//using method 1
let i = 10;

while (i) {
  alert(i);
  i--;
}

//using method 2
let j = 10

do {
  alert(j);
  j--;
} while (j);





//Q76: Q74 for using for loop

let i = 10;

for (;i;) {
  alert(i);
  i--;
}




//Q77: ask the user to enter the number and show the entered number, if the user enters no number or cancel, it would just show 0

let userInteraction = prompt("Enter the number", "10");

if (userInteraction) {
  alert(userInteraction);
} else {
  alert(0);
}



//Q78: show the cardinal number under 10 with and without "continue"

//without the continue
let i = 1

for (i = 1; i < 10; i++) {
  
  if (i % 2) {
    alert(i);
  }

}

//with the continue
let j = 1

for (j = 1; j < 10; j++) {
  
  if (j % 2 == 0) continue;
    alert(j);
  
}



//Q79:Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again. The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
let userInteraction = prompt("Enter the number greater than 100", );
do {
  userInteraction = prompt("Enter the number greater than 100");
} while (userInteraction <= 100 && userInteraction);



//Q80: show "number 0" to "number 3" with for and while

//using while
let i = 0
while (i < 4) {
  alert(`number ${i}`);
  i++;
}

//using for
let i = 0
for (; i < 4; i++){
  alert(`number ${i}`);
}



//Q81: use switch, case, break,default method. ask the user to enter a value from 0–2. There are four case, it is 0, 1, 2, and it is out of the range


//Q82: same as Q81, but use grouped cases to show more alerts for more of the cases


//2.15 Functions


//Q83: decalre a function with an alert and call it out


//Q84: show A for apple, B for ball, C for cat in one function


//Q85: ask the age of the user, and the person is more than 18, then tell one access granted, if no, ask one do you have the permission from the parents, if no then show access deny
