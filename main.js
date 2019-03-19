//Boiling Temperature

const myBoilingTemp = 212;

const myBoilingWaterTemps = document.getElementById("boiling-temp");

const myBoilingNumber = document.createTextNode (myBoilingTemp);

const addBoiling = () => myBoilingWaterTemps.appendChild(myBoilingNumber);

addBoiling();

//Freezing Temperature

const myFreezingTemp = 32;

const myFreezingWaterTemps = document.getElementById("freezing-temp");

const myFreezingNumber = document.createTextNode (myFreezingTemp);

const addFreezing = () => myFreezingWaterTemps.appendChild(myFreezingNumber);

addFreezing();

//My Temperature

const myTemp = 70;

const myWaterTemp = document.getElementById("water-temp");

const myNumber = document.createTextNode (myTemp);

const addWaterTemp= () => myWaterTemp.appendChild(myNumber);

addWaterTemp();

//if, else if, else & setTimeout()

       if (myNumber > 212) {
         let element = document.getElementById("boiling");
         const alertFunc = ()  => {
           element.classList.remove('hide');
           element.classList.add('show');
         }
         setTimeout(alertFunc, 3000);
         }

       else if(myNumber < 32) {
         let element = document.getElementById("frozen");
         const alertFunctwo = ()  => {
           element.classList.remove('hide');
           element.classList.add('show');
        }
        setTimeout(alertFunctwo, 3000);
        }

        else {
          let element = document.getElementById("good-temp");
          const alertFuncthree = ()  => {
            element.classList.remove('hide');
            element.classList.add('show');
         }
         setTimeout(alertFuncthree, 3000);
         }
