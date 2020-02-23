`use strict`
//2 helper function to calculate random customers within range
function getRandomCust(min, max) {
  var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
  return randomCust;
}




var seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  customers: [],
  cookieAmounts: [],
  totalCookie:0,
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
  findCookieTotal:function(){
    for(var c=0;c<this.cookieAmounts.length;c++){
      this.totalCookie=this.totalCookie+this.cookieAmounts[c];
    }
  }

}
seattle.randomCust$$();
seattle.cookieCount();
seattle.findCookieTotal();
console.log(seattle);
