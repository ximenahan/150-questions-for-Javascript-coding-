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
