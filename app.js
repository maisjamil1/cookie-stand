`use strict`
// helper function to calculate random customers within range
// ___________________________________________________________________________________________________


// ___________________________________________________________________________________________________
var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
var Stores = [];

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
  // console.log('Stores Array', Store);
}

function getRandomCust(min, max) {
  var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
  return randomCust;
}
// to find a Random customers number
Store.prototype.getRandomCustomer = function () {
  for (var i = 0; i <hours.length; i++) {
    this.randomCust[i] = getRandomCust(this.minCust, this.maxCust);
    
  }
  console.log(this.randomCust);
};

// to find the cookies amount for each houre
Store.prototype.findCookieAmount = function () {
  for (var j = 0; j <hours.length; j++) {
    this.cookieAmounts[j] = this.randomCust[j] * this.avgCookie;
    this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);

  }
};


// to find the Daily Total cookies
Store.prototype.findCookieAmount = function () {
  for (var c = 0; c < hours.length; c++) {
    this.dailyTotalCookie = this.dailyTotalCookie + this.cookieAmounts[c];
  }
};

// Display the values
// ===============================================================
var container = document.getElementById('sales-data');
var salesTable = document.createElement('table');
container.appendChild(salesTable);
var trE1 = document.createElement('tr');
salesTable.appendChild(trE1);



// // // the first raw
for (var i= 0; i <= hours.length; i++) {
  var thE1 = document.createElement('th');
    trE1.appendChild(thE1);
    thE1.textContent = hours[i] ;
  }
  
//   trE1.appendChild(thE1);
//   thE1.textContent ='Daily Location Total';

  
  var seattle = new Store('seattle', 23, 65, 6.3);
  console.log(seattle);
  
  var tokyo = new Store('tokyo', 3,24,1.2);
  var dubai = new Store('dubai',11,38, 3.7);
  var paris = new Store('paris',20,38, 2.3);
var lima = new Store('lima', 2, 16,4.6);

// var shopArr = [seattle,tokyo,dubai,paris,lima]

//call the function
for (var i = 0; i < Stores.length; i++) {
  Stores[i].getRandomCustomer();
  Stores[i].findCookieAmount();
  // Stores[i].findCookieAmount();
}
// console.log(seattle);










  
  //   Location$: 'Lima',
  //   minCust: 2,
  //   maxCust: 16,
  //   avgCookie: 4.6,
  //   hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  //   customers: [],
  //   cookieAmounts: [],
  //   dailyTotalCookie: 0,
  //   randomCust$$: function () {
  //     for (var i = 0; i < this.hours.length; i++) {
  //       this.customers[i] = getRandomCust(this.minCust, this.maxCust);


  //     }
  //   },
  //   // to find the cookies amount for each houre
  //   findCookieAmount: function () {
  //     for (var j = 0; j < this.hours.length; j++) {
  //       this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
  //       this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);

  //     }
  //   },





  //   // to find the Daily Total cookies
  //   findCookieTotal:function(){
  //     for(var c=0;c<this.cookieAmounts.length;c++){
  //       this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
  //     }
  //   },




  //   // Display the values of each array as unordered lists in the browser

  //   renderList: function (){
  //     var container = document.getElementById('Sales Data');
  //     var h2location$ = document.createElement('h2');
  //     container.appendChild(h2location$);
  //     h2location$.textContent=this.Location$;
  //     var ulList = document.createElement('ul');
  //     container.appendChild(ulList);

  //     // append li's to the ul 
  //     for(var a =0; a<this.hours.length ; a++) {
  //       var liList = document.createElement('li');
  //       ulList.appendChild(liList);
  //       liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
  //   }
  //   ulList.appendChild(liList);
  //   liList.textContent='Total:'+this.dailyTotalCookie+' cookies';


  //   }



  // }
  // Lima.randomCust$$();
  // Lima.findCookieAmount();
  // Lima.findCookieTotal();
  // Lima.renderList();
  // console.log(Lima);