//Q31:show the boolean result based on asking the user is his/her age under 18
let userAge = confirm("Are you under 18?");
alert(userAge);


//Q32: Convert the variable with boolean value into the string
let theValue = true
theValue = String(theValue);
alert(typeof(theValue));


//Q33: Convert the variable with string value into the number
let theValue = "123"
alert(typeof(theValue));
theValue = Number(theValue);
alert(typeof(theValue));


//Q34: Convert the variable with string value into the number resulting in NaN
let theValue = "我是"
theValue = Number(theValue);
alert(theValue);


//Q35:Convert the three variable with three different values respectively into the number and all resulting in 0
let value1 = false
let value2 = null
let value3 = "0"
value1 =Number(value1);
value2 = Number(value2);
value3 = Number(value3);
[value1, value2, value3].forEach(alert);


//Q36: convert 0, "0", " " into boolean value
alert(Boolean(0)); //false
alert(Boolean("0")); //true
alert(Boolean(" ")); //true


//Q37:convert four different possibilities into boolean value resulting in false
alert(Boolean(0));
alert(Boolean(""));
alert(Boolean(null));
alert(Boolean(NaN));


//Q38: reverse the posive number of a variable using unary
let value = 100
alert(-100);


//Q39: show the result of 296¹/2
alert(296**(1/2));


//Q40: combine the "conca" and "tenates" and become "concatenates"
alert("conca" + "tenates");


