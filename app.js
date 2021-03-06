`use strict`

// ___________________________________________________________________________________________________


// ___________________________________________________________________________________________________
var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", 'Daily Location Total'];
var Stores = [];
var totalForDays = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
  Stores.push(this);

}
//___________________________________________
// helper function to calculate random customers within range

function getRandomCust(min, max) {
  var randomCust = Math.floor(Math.random() * (max - min) + min);
  return randomCust;
}
//______________________
// to find a Random customers number
Store.prototype.getRandomCustomer = function () {
  for (var i = 0; i < hours.length - 1; i++) {
    this.randomCust[i] = getRandomCust(this.minCust, this.maxCust);
  }
};
//___________________________________________
// to find the cookies amount for each houre
Store.prototype.findCookieAmount = function () {
  for (var j = 0; j < hours.length - 1; j++) {

    this.cookieAmounts[j] = Math.floor(this.randomCust[j] * this.avgCookie);
  }
};
//___________________________________________
// // to find the Daily Total cookies for each store
Store.prototype.findDailyCookieTotal = function () {
  for (var i = 0; i < hours.length - 1; i++) {
    this.dailyTotalCookie = this.dailyTotalCookie + this.cookieAmounts[i];
  }
};
//___________________________________________
// // to find the Daily Total cookies for each day 
Store.prototype.getTotalForDays = function () {
  for (var i = 0; i < hours.length - 1; i++) {
    totalForDays[i] = totalForDays[i] + this.cookieAmounts[i];
    
  }
  totalForDays[hours.length - 1] = totalForDays[hours.length - 1] + this.dailyTotalCookie;
};
// to Display the values
// ________________________________________________________________________________________________________________
var container = document.getElementById('sales-data');
var salesTable = document.createElement('table');
salesTable.setAttribute('id','tablesales');

container.appendChild(salesTable);
var trE1 = document.createElement('tr');
salesTable.appendChild(trE1);
var tdE1 = document.createElement('td');
thE1 = document.createElement('th');

// the first raw_____________________________________________
function tableheader() {
// empety cell __________
var thE1 = document.createElement('th');
trE1.appendChild(thE1);
thE1.textContent = 'Locations';
// _________________________
//hours raw
for (var i = 0; i < hours.length; i++) {
  thE1 = document.createElement('th');
  trE1.appendChild(thE1);
  thE1.textContent = hours[i];
}}
//___________________________________________________________
//locations column+other raws
Store.prototype.makeRaw2 = function () {

  var trE1 = document.createElement('tr');
  salesTable.appendChild(trE1);
  var tdE1 = document.createElement('td');
  tdE1.textContent = this.location$;
  trE1.appendChild(tdE1);

  // _____________________________
//other raws
  for (var i = 0; i < hours.length; i++) {
    var tdE2 = document.createElement('td');
    trE1.appendChild(tdE2);
    tdE2.textContent = this.cookieAmounts[i];
    // console.log('please work !!!!', this.cookieAmounts[i]);
  }

  trE1.appendChild(tdE2);
  tdE2.textContent = this.dailyTotalCookie;

}
//render for footer______________________________________________

function footer() {
trE1 = document.createElement('tr');
salesTable.appendChild(trE1);
console.log('hello',trE1);
var tdE5 = document.createElement('td');
  // trE1.appendChild(tdE1);
  trE1.appendChild(tdE5);
tdE5.textContent="total";
for (var i = 0; i < hours.length; i++) {
  var tdE1 = document.createElement('td');
  trE1.appendChild(tdE1);
  tdE1.textContent =totalForDays[i];
  
}

}

//___________________________________________________________



var seattle = new Store('seattle', 23, 65, 6.3);
console.log(seattle);

var tokyo = new Store('tokyo', 3, 24, 1.2);
var dubai = new Store('dubai', 11, 38, 3.7);
var paris = new Store('paris', 20, 38, 2.3);
var lima = new Store('lima', 2, 16, 4.6);

tableheader();
//call the function
for (var i = 0; i < Stores.length; i++) {
  Stores[i].getRandomCustomer();
  Stores[i].findCookieAmount();
  Stores[i].findDailyCookieTotal();
  Stores[i].getTotalForDays();



  Stores[i].makeRaw2();
  
  


}
footer();



//form___________________________________________________________________

var myForm = document.getElementById('newStoreForm');
myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  var newLocation = event.target.location.value;

  var testNewMinCust = parseInt(event.target.mincustomers.value);
 
  var newMaxCust = parseInt(event.target.maxcustomers.value);
  
  var nuwAvg = parseFloat(event.target.avreage.value);
  console.log(newMaxCust);
  console.log(testNewMinCust);

  if(testNewMinCust<newMaxCust){
    var newMinCust = event.target.mincustomers.value;
    var newStore = new Store(newLocation,newMinCust,newMaxCust,nuwAvg);
    // salesTable.removeChild(salesTable.lastChild);//ican use this also
    document.getElementById('tablesales').deleteRow(Stores.length);
    newStore.getRandomCustomer();
    newStore.findCookieAmount();
    newStore.findDailyCookieTotal();
    newStore.getTotalForDays();
    
    newStore.makeRaw2();
    footer();
  }else{
    alert("the min number must be lower than the max");
  // document.getElementById('tablesales').deleteRow(Stores.length);
  // myForm.innerHTML=' ';
}




  
 
  
});
  



  




  













