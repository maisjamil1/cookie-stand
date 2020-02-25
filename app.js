`use strict`
// helper function to calculate random customers within range
// ___________________________________________________________________________________________________


// ___________________________________________________________________________________________________
var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",'Daily Location Total'];
var Stors = [];

function Store(location$, minCust, maxCust, avgCookie) {
  this.location$ = location$;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  //daynamic Values:
  this.randomCust = [];
  this.cookieAmounts = [];
  this.dailyTotalCookie = 0;
  //To find the stores array
  Stors.push(this);
  // console.log('Stores Array', Store);
}
//___________________________________________
// to find a Random customers number
function getRandomCust(min, max) {
  var randomCust = Math.floor(Math.random() * (max - min) + min);
  return randomCust;
}
//______________________
Store.prototype.getRandomCustomer = function () {
  for (var i = 0; i < hours.length-1; i++) {
    this.randomCust[i] = getRandomCust(this.minCust, this.maxCust);

  }

};
//___________________________________________
// to find the cookies amount for each houre
Store.prototype.findCookieAmount = function () {
  for (var j = 0; j < hours.length-1; j++) {
    
    this.cookieAmounts[j] = Math.floor(this.randomCust[j] * this.avgCookie);

    // this.cookieAmounts.push(this.cookieAmounts[j]);
    


  }
};








//___________________________________________
// // to find the Daily Total cookies
Store.prototype.findDailyCookieTotal = function () {
  for (var i = 0; i < hours.length-1; i++) {
    this.dailyTotalCookie= this.dailyTotalCookie + this.cookieAmounts[i];
  }
};

// Display the values
// ===============================================================
var container = document.getElementById('sales-data');
var salesTable = document.createElement('table');
container.appendChild(salesTable);
var trE1 = document.createElement('tr');
salesTable.appendChild(trE1);



// the first raw_____________________________________________
// empety cell __________
var thE1 = document.createElement('th');
trE1.appendChild(thE1);
thE1.textContent = 'Locations';
// _________________________
//hours raw
for (var i = 0; i <= hours.length; i++) {
  thE1 = document.createElement('th');
  trE1.appendChild(thE1);
  thE1.textContent = hours[i];
}
//Daily Location Total in the last cell in the first raw



//___________________________________________________________

// raw 2
// var trE1 = document.createElement('tr');
// salesTable.appendChild(trE1);
// //seattle________________________
// var tdE1 = document.createElement('td');
// trE1.appendChild(thE1);
// thE1.textContent = 'seattle';// may i can ues switch
// // _____________________________
// Store.prototype.makeRaw2 = function () {
//   for (var i = 0; i <= hours.length; i++) {
//     var tdE2 = document.createElement('td');
//     trE1.appendChild(tdE2);
//     tdE2.textContent = this.cookieAmounts[i];
//     console.log('please work !!!!', this.cookieAmounts[i]);
//   }
// }
// Store.prototype.makeRowForlocation = func


Store.prototype.makeRaw2 = function () {

  
var trE1 = document.createElement('tr');
salesTable.appendChild(trE1);
var tdE1 = document.createElement('td');
tdE1.textContent =this.location$;// may i can ues switch
trE1.appendChild(tdE1);

// _____________________________

  for (var i = 0; i <= hours.length; i++) {
    var tdE2 = document.createElement('td');
    trE1.appendChild(tdE2);
    tdE2.textContent =this.cookieAmounts[i];
    console.log('please work !!!!', this.cookieAmounts[i]);
  }
  
// salesTable.appendChild(trE1);
// tdE1.textContent =this.dailyTotalCookie;
trE1.appendChild(tdE2);
    tdE2.textContent =this.dailyTotalCookie;

}










//___________________________________________________________



var seattle = new Store('seattle', 23, 65, 6.3);
console.log(seattle);

var tokyo = new Store('tokyo', 3, 24, 1.2);
var dubai = new Store('dubai', 11, 38, 3.7);
var paris = new Store('paris', 20, 38, 2.3);
var lima = new Store('lima', 2, 16, 4.6);

// var shopArr = [seattle, tokyo, dubai, paris, lima]

//call the function
for (var i = 0; i < Stors.length; i++) {
  Stors[i].getRandomCustomer();
  Stors[i].findCookieAmount();
  Stors[i].findDailyCookieTotal();


  Stors[i].makeRaw2();



}



// seattle.getRandomCustomer();
// seattle.findCookieAmount();
// seattle.findDailyCookieTotal();
// seattle.makeRaw2();
// console.log(seattle);










