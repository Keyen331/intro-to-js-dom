console.log("sanity check");
//finding html elements
//nsole.log(ent.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method");
console.log(idElement);

console.log(document.getElementsByTagName("div"));
var tagElement = document.getElementsByTagName("div");

//chaanging the html elements
console.log(idElement.innerHTML);
idElement.innerHTML = "I have been changed";

console.log(classElements[1]);
classElements[1].innerHTML = "I have been changed by className and array locaarion";