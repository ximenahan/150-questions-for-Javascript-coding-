//Q41: show the result of "221" by three diffferent binary + process (all must contain both number and string)
alert("2"+"2"+1);
alert(22+"1");
alert(20+2+"1");


//Q42: use - and / for operands with at least one string
alert("10"/2);
alert(10-"2");
// both become numbers;


//Q43: the numeric conversion for three different types of value without using Number(…)
alert(+"12");
alert(+null);
alert(+true);


//Q44: math operation for two variables with the string value without using Number(…)
let value1 = "10";
let value2 = "20";
alert(+value1 + +value2);


//Q45:math operation for two variables with the string value without using Number(…) and then make the result totally negative
let value1 = "10";
let value2 = "20";
let value3 = +value1 + +value2;
alert (-value3);


//Q46: use the chain assignment for three variables having different number value. 
let value1;
let value2;
let value3;
value3 = value2 = value1 =10+10
alert(value3);
// my guess is that chaining variable is only able to "chain" the same value


//Q47: reassign the lower value using modify-in-place
let value =20;
value -= 5;
alert(value);


//Q48: reassign the lower value using decrement
let value = 3;
--value;
alert(value);


//Q49: create the new but lower value using decrement
let value1 = 3;
let value2 --value1;
alert(value2);


//Q50: reassign the higher value using increment but show the value before the change
let value1 = 3;
let value2 = value1++;
alert(value2); // the result of the new value is used, so the prefix and postfix matter
