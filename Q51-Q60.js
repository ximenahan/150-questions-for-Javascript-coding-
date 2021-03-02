//Q51:reassign the higher value using increment and show the new value
let value1 = 3;
let value2 = ++value1;
alert(value2);


//Q52: use the increment among other operators but show the value before the change. Then, make it neater
let value1 = 3;
let value2 = value1 * 5;
value1++;
alert(value2);


//Q53: assign the three numbers to a variable and only choose the last
let value = (1,2,3);
alert(value);


//Q54: assign the three numbers to a variable and only choose the first
// defect of the question


//Q55: show the result of number comparison, string comparison, number+string comparison
alert(5>3);
alert("a">"b");
alert("2">12);  //comparision of different types convert all values to numbers


//Q56: the equality check(==) for boolean and number 0,1
alert(true == 1);
alert(false == 0);


//Q57: the strict equality check(===) for boolean and number 0,1
alert(true === 1);
alert(false === 0);


//Q58: demonstrate the situation that two values are equal, but one of them is true as a boolean and the other one is false as a boolean.
let value1 = 0;
let value2 = "0";
alert(value1 == value2);
alert(Boolean(value1));
alert(Boolean(value2));


//Q59: the equality check for undefined and null, and also both of them with other value type
let value1 = null;
let value2;
alert(value1 == value2); //true
alert(value1 == 0); //false
alert(value2 == 0); //false
alert(value1 == null); //true
alert(value2 == undefined); //true

