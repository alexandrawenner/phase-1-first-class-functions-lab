// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) { 
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]





function createFareMultiplier(fareMultiplier) {
   return (function (fare) {
       return fare * fareMultiplier
   })
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers,randomDrivers) {
  return randomDrivers(drivers)
}
    

// switch(driversSwitch){
//     case returnFirstTwoDrivers:
//         return 'Antonia', 'Nuru'
//     case returnLastTwoDrivers:
//         return 'Amari', 'Mo'
// }



//const fareMultiplier = fare => fare*4 
// function createFareMultiplier() {
//     const quad = 4
//     let integer = 4
//     fareMultiplier(integer,quad)
//         return integer * quad;
// }




// let fare = 4
// function multiply(fare,4) {
//     return integer * 4;
// }