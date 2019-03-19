"use strict";

//Boiling Temperature

var myBoilingTemp = 212;

var myBoilingWaterTemps = document.getElementById("boiling-temp");

var myBoilingNumber = document.createTextNode(myBoilingTemp);

var addBoiling = function addBoiling() {
  return myBoilingWaterTemps.appendChild(myBoilingNumber);
};

addBoiling();

//Freezing Temperature

var myFreezingTemp = 32;

var myFreezingWaterTemps = document.getElementById("freezing-temp");

var myFreezingNumber = document.createTextNode(myFreezingTemp);

var addFreezing = function addFreezing() {
  return myFreezingWaterTemps.appendChild(myFreezingNumber);
};

addFreezing();

//My Temperature

var myTemp = 70;

var myWaterTemp = document.getElementById("water-temp");

var myNumber = document.createTextNode(myTemp);

var addWaterTemp = function addWaterTemp() {
  return myWaterTemp.appendChild(myNumber);
};

addWaterTemp();

//if, else if, else & setTimeout()

if (myNumber > 212) {
  var element = document.getElementById("boiling");
  var alertFunc = function alertFunc() {
    element.classList.remove('hide');
    element.classList.add('show');
  };
  setTimeout(alertFunc, 3000);
} else if (myNumber < 32) {
  var _element = document.getElementById("frozen");
  var alertFunctwo = function alertFunctwo() {
    _element.classList.remove('hide');
    _element.classList.add('show');
  };
  setTimeout(alertFunctwo, 3000);
} else {
  var _element2 = document.getElementById("good-temp");
  var alertFuncthree = function alertFuncthree() {
    _element2.classList.remove('hide');
    _element2.classList.add('show');
  };
  setTimeout(alertFuncthree, 3000);
}