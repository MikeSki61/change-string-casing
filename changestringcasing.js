var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
var capitalizeName = upperCaseFirstChar + restOfName;
alert("Hello " +  capitalizeName);