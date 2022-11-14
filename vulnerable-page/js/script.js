var unsuspectingObject = {
  value1: "Prototype pollution is a thing",
  value2: 25
};

var objectToBeUpdated = {
  evil: "something"
};

let unsusObj = JSON.stringify(unsuspectingObject);
let updateObj = JSON.stringify(objectToBeUpdated);

document.getElementById("unsusObj").innerHTML=unsusObj;
document.getElementById("updateObj").innerHTML=updateObj;

//add event listener to the submit button
 let btn = document.getElementById("btn");
 btn.addEventListener('click', event => {
  
  let updateString = document.getElementById("inputfield");
  
  //take in value in the entry field and add that to an object:
  //set the value to what was entered:
  objectToBeUpdated.evil = updateString.value;
  
  //set the value of updateObj to the new value of the object:
  updateObj = JSON.stringify(objectToBeUpdated);
    
  //update the HTML on the page to display the new value:
  document.getElementById("updateObj").innerHTML=updateObj;

  //With the extend function in jquery, these objects will merge into each other. The following will be merging the "evil" user updated object into the unsuspecting object
  jQuery.fn.extend(true, Object.prototype, objectToBeUpdated);
  jQuery.fn.extend(true, unsuspectingObject, objectToBeUpdated);

  //update what is shown on the screen:
  let updateObj1 = JSON.stringify(unsuspectingObject);
  document.getElementById("updateObj1").innerHTML=updateObj1;

  let prototypeDiv = JSON.stringify(Object.prototype);
  document.getElementById("prototypeDiv").innerHTML=prototypeDiv
  
  //show that an new object has evil in __proto__:
  var randomObject = {
    data: 123456
  };

  let randomsProtoValue = randomObject.__proto__;
  console.log(randomsProtoValue);
  eval(randomObject.__proto__.evil);

 });

 



