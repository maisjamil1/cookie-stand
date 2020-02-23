`use strict`
//2 helper function to calculate random customers within range
function getRandomCust(min, max) {
  var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
  return randomCust;
}




var seattle = {
  Location$:'seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  customers: [],
  cookieAmounts: [],
  dailyTotalCookie:0,
  randomCust$$: function () {
    for (var i = 0; i < this.hours.length; i++) {
      this.customers[i] = getRandomCust(this.minCust, this.maxCust);
      

    }
  },
  cookieCount: function () {
    for (var j = 0; j < this.hours.length; j++) {
      this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
      this.cookieAmounts[j]=Math.floor(this.cookieAmounts[j]);
      
    }
  },
  // to find the Daily Total cookies
  findCookieTotal:function(){
    for(var c=0;c<this.cookieAmounts.length;c++){
      this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
    }
  },
  // Display the values of each array as unordered lists in the browser
  render: function (){
    var container = document.getElementById('Sales Data');
    var h2location$ = document.createElement('h2');
    container.appendChild(h2location$);
    h2location$.textContent=this.Location$;
    var ulList = document.createElement('ul');
    container.appendChild(ulList);
    
    // var h2location=container.document.createElement('li');
    // h2location.textContent=this.Location$;

    // append li's to the ul containing arrays
    for(var a =0; a<this.hours.length ; a++) {
      var liList = document.createElement('li');
      ulList.appendChild(liList);
      liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
  }
  ulList.appendChild(liList);
  liList.textContent='Total:'+this.dailyTotalCookie+' cookies';


  }








}
seattle.randomCust$$();
seattle.cookieCount();
seattle.findCookieTotal();
seattle.render();
console.log(seattle);
