`use strict`
// helper function to calculate random customers within range
function getRandomCust(min, max) {
  var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
  return randomCust;
}
// ___________________________________________________________________________________________________

// // // to find the cookies amount for each houre
// function getCookieAmounts() {
//   for (var j = 0; j < hours.length; j++) {
//    cookieAmounts[j] = customers[j] * avgCookie;
//     cookieAmounts[j] = Math.floor(cookieAmounts[j]);
//   }
// }
// // // // ___________________________________________________________________________________________________

// // to find the Daily Total cookies
// function getCookieTotal() {
//   for (var c = 0; c <cookieAmounts.length; c++) {
//     dailyTotalCookie =dailyTotalCookie + cookieAmounts[c];
//   }
// }

// // // // ___________________________________________________________________________________________________

// function render() {
//   var container = document.getElementById('Sales Data');
//   var h2location$ = document.createElement('h2');
//   container.appendChild(h2location$);
//   h2location$.textContent =Location$;
//   var ulList = document.createElement('ul');
//   container.appendChild(ulList);
//   for (var a = 0; a <hours.length; a++) {
//     var liList = document.createElement('li');
//     ulList.appendChild(liList);
//     liList.textContent = hours[a] + ' : ' + cookieAmounts[a] + " cookies";
//   }
//   ulList.appendChild(liList);
//   liList.textContent = 'Total:' + dailyTotalCookie + ' cookies';


// }
// //   // // ___________________________________________________________________________________________________




  var seattle = {
    Location$: 'seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customers: [],
    cookieAmounts: [],
    dailyTotalCookie: 0,
    randomCust$$: function () {
      for (var i = 0; i < this.hours.length; i++) {
        this.customers[i] = getRandomCust(this.minCust, this.maxCust);


      }
    },
    // to find the cookies amount for each houre
    findCookieAmount: function () {
      for (var j = 0; j < this.hours.length; j++) {
        this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
        this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);

      }
    },


    // findCookieAmount:function(){
    //   getCookieAmounts ();
    // },


    // to find the Daily Total cookies
    findCookieTotal:function(){
      for(var c=0;c<this.cookieAmounts.length;c++){
        this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
      }
    },


    // findCookieTotal: function () {
    //   getCookieTotal();
    // },

    // Display the values of each array as unordered lists in the browser

    renderList: function (){
      var container = document.getElementById('Sales Data');
      var h2location$ = document.createElement('h2');
      container.appendChild(h2location$);
      h2location$.textContent=this.Location$;
      var ulList = document.createElement('ul');
      container.appendChild(ulList);

      // append li's to the ul 
      for(var a =0; a<this.hours.length ; a++) {
        var liList = document.createElement('li');
        ulList.appendChild(liList);
        liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
    }
    ulList.appendChild(liList);
    liList.textContent='Total:'+this.dailyTotalCookie+' cookies';


    }


    // renderList: function () {
    //   render();
    // }


  }
  seattle.randomCust$$();
  seattle.findCookieAmount();
  seattle.findCookieTotal();
  seattle.renderList();
  console.log(seattle);
  // ____________________________________________________________________________________
  var Tokyo = {
    Location$: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customers: [],
    cookieAmounts: [],
    dailyTotalCookie: 0,
    randomCust$$: function () {
      for (var i = 0; i < this.hours.length; i++) {
        this.customers[i] = getRandomCust(this.minCust, this.maxCust);


      }
    },
    // to find the cookies amount for each houre
    findCookieAmount: function () {
      for (var j = 0; j < this.hours.length; j++) {
        this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
        this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);

      }
    },


    // findCookieAmount:function(){
    //   getCookieAmounts ();
    // },


    // to find the Daily Total cookies
    findCookieTotal:function(){
      for(var c=0;c<this.cookieAmounts.length;c++){
        this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
      }
    },


    // findCookieTotal: function () {
    //   getCookieTotal();
    // },

    // Display the values of each array as unordered lists in the browser

    renderList: function (){
      var container = document.getElementById('Sales Data');
      var h2location$ = document.createElement('h2');
      container.appendChild(h2location$);
      h2location$.textContent='Tokyo';
      var ulList = document.createElement('ul');
      container.appendChild(ulList);

      // append li's to the ul 
      for(var a =0; a<this.hours.length ; a++) {
        var liList = document.createElement('li');
        ulList.appendChild(liList);
        liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
    }
    ulList.appendChild(liList);
    liList.textContent='Total:'+this.dailyTotalCookie+' cookies';


    }


    // renderList: function () {
    //   render();
    // }


  }
  Tokyo.randomCust$$();
  Tokyo.findCookieAmount();
  Tokyo.findCookieTotal();
  Tokyo.renderList();
  console.log(Tokyo);

   // ____________________________________________________________________________________
   var Dubai = {
    Location$: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customers: [],
    cookieAmounts: [],
    dailyTotalCookie: 0,
    randomCust$$: function () {
      for (var i = 0; i < this.hours.length; i++) {
        this.customers[i] = getRandomCust(this.minCust, this.maxCust);


      }
    },
    // to find the cookies amount for each houre
    findCookieAmount: function () {
      for (var j = 0; j < this.hours.length; j++) {
        this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
        this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);

      }
    },


    // findCookieAmount:function(){
    //   getCookieAmounts ();
    // },


    // to find the Daily Total cookies
    findCookieTotal:function(){
      for(var c=0;c<this.cookieAmounts.length;c++){
        this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
      }
    },


    // findCookieTotal: function () {
    //   getCookieTotal();
    // },

    // Display the values of each array as unordered lists in the browser

    renderList: function (){
      var container = document.getElementById('Sales Data');
      var h2location$ = document.createElement('h2');
      container.appendChild(h2location$);
      h2location$.textContent='Dubai';
      var ulList = document.createElement('ul');
      container.appendChild(ulList);

      // append li's to the ul 
      for(var a =0; a<this.hours.length ; a++) {
        var liList = document.createElement('li');
        ulList.appendChild(liList);
        liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
    }
    ulList.appendChild(liList);
    liList.textContent='Total:'+this.dailyTotalCookie+' cookies';


    }


    // renderList: function () {
    //   render();
    // }


  }
  Dubai.randomCust$$();
  Dubai.findCookieAmount();
  Dubai.findCookieTotal();
  Dubai.renderList();
  console.log(Dubai);
  // ____________________________________________________________________________________
  var Paris = {
    Location$: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customers: [],
    cookieAmounts: [],
    dailyTotalCookie: 0,
    randomCust$$: function () {
      for (var i = 0; i < this.hours.length; i++) {
        this.customers[i] = getRandomCust(this.minCust, this.maxCust);


      }
    },
    // to find the cookies amount for each houre
    findCookieAmount: function () {
      for (var j = 0; j < this.hours.length; j++) {
        this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
        this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);

      }
    },


    // findCookieAmount:function(){
    //   getCookieAmounts ();
    // },


    // to find the Daily Total cookies
    findCookieTotal:function(){
      for(var c=0;c<this.cookieAmounts.length;c++){
        this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
      }
    },


    // findCookieTotal: function () {
    //   getCookieTotal();
    // },

    // Display the values of each array as unordered lists in the browser

    renderList: function (){
      var container = document.getElementById('Sales Data');
      var h2location$ = document.createElement('h2');
      container.appendChild(h2location$);
      h2location$.textContent='paris';
      var ulList = document.createElement('ul');
      container.appendChild(ulList);

      // append li's to the ul 
      for(var a =0; a<this.hours.length ; a++) {
        var liList = document.createElement('li');
        ulList.appendChild(liList);
        liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
    }
    ulList.appendChild(liList);
    liList.textContent='Total:'+this.dailyTotalCookie+' cookies';


    }


    // renderList: function () {
    //   render();
    // }


  }
  Paris.randomCust$$();
  Paris.findCookieAmount();
  Paris.findCookieTotal();
  Paris.renderList();
  console.log(Paris);
   // ____________________________________________________________________________________
   var Lima = {
    Location$: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customers: [],
    cookieAmounts: [],
    dailyTotalCookie: 0,
    randomCust$$: function () {
      for (var i = 0; i < this.hours.length; i++) {
        this.customers[i] = getRandomCust(this.minCust, this.maxCust);


      }
    },
    // to find the cookies amount for each houre
    findCookieAmount: function () {
      for (var j = 0; j < this.hours.length; j++) {
        this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
        this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);

      }
    },


    // findCookieAmount:function(){
    //   getCookieAmounts ();
    // },


    // to find the Daily Total cookies
    findCookieTotal:function(){
      for(var c=0;c<this.cookieAmounts.length;c++){
        this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
      }
    },


    // findCookieTotal: function () {
    //   getCookieTotal();
    // },

    // Display the values of each array as unordered lists in the browser

    renderList: function (){
      var container = document.getElementById('Sales Data');
      var h2location$ = document.createElement('h2');
      container.appendChild(h2location$);
      h2location$.textContent='Lima';
      var ulList = document.createElement('ul');
      container.appendChild(ulList);

      // append li's to the ul 
      for(var a =0; a<this.hours.length ; a++) {
        var liList = document.createElement('li');
        ulList.appendChild(liList);
        liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
    }
    ulList.appendChild(liList);
    liList.textContent='Total:'+this.dailyTotalCookie+' cookies';


    }


    // renderList: function () {
    //   render();
    // }


  }
  Lima.randomCust$$();
  Lima.findCookieAmount();
  Lima.findCookieTotal();
  Lima.renderList();
  console.log(Lima);