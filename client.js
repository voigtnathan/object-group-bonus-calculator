const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

let i = 0;
let bonusArray = [];

function EmpBonusCalc(){
  this.employeeName = employees[i].name;
  this.bonusPercentage = bonusPercCalc(employees[i].reviewRating);
  this.totalComp = employees[i].annualSalary * ( 1 + bonusPercCalc(employees[i].reviewRating ));
  this.totalBonus = employees[i].annualSalary * ( bonusPercCalc(employees[i].reviewRating ));
}
function bonusPercCalc (rating){
  let bonusPercentage = 0;
  let empNumberLength = employees[i].employeeNumber;
  if( rating <= 2 ){
    bonusPercentage += 0;
  }
  if( rating == 3 ){
    bonusPercentage += 0.04;
  }
  if( rating == 4 ){
    bonusPercentage += 0.06;
  }
  if( rating == 5 ){
    bonusPercentage += 0.1;
  }
  if( empNumberLength.length == 4 ){
    bonusPercentage += 0.05;
  }
  if( employees[i].annualSalary > 65000 ){
    bonusPercentage -= 0.01;
  }
  if( bonusPercentage > 0.13 ){
    bonusPercentage = 0.13;
  }
  if( bonusPercentage < 0 ){
    bonusPercentage = 0;
  }
  return bonusPercentage;
}

function empBonusObj(){
  for(let j=0; j<employees.length; j++){
    i=j;
    bonusArray.push(new EmpBonusCalc());
  }
  i=0
  return bonusArray;
}

console.log(empBonusObj());