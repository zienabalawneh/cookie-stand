'use strict';


let hours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm'];


  function City(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.custmPerHours = [];
    this.cookiesNum = [];
    this.totalCookies = 0;
    this.cookies = 0;
    City.allCitys.push(this);
  }
  
  City.allCitys=[];
  
  



  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
      }


    //--------------------------------------------------------------
  
  City.prototype.NumCustomers = function () {
    for (let i = 0; i < hours.length; i++) {
      this.custmPerHours.push(getRandomNumber(this.min, this.max));
    }
  };


//-----------------------------------------------------------------------------------

  let arrayTotal=[];
  
  City.prototype.numCookiesByHour = function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesNum.push(Math.floor(this.custmPerHours[i] * this.avg));
      this.totalCookies += this.cookiesNum[i];
     
    }
    arrayTotal.push(this.totalCookies);
  };
  



//----------------------------CreateTableHeader-----------------------

function CreateTableHeader() {
  
  
    const tr1El = document.createElement('tr');
    theadEl.appendChild(tr1El);
    const thEl = document.createElement('th');
    tr1El.appendChild(thEl);
    thEl.textContent = 'City/Time';
  
    for (let i = 0; i < hours.length; i++) {
      const thEl = document.createElement('th');
      tr1El.appendChild(thEl);
      thEl.textContent = hours[i];
    }

    const th2El = document.createElement('th');
    tr1El.appendChild(th2El);
    th2El.textContent = 'Daily Location Total';
  }
  
  


  //--------------------------------------body table-------------------------------------


  City.prototype.renderObjects = function () {
  
    const tr2El = document.createElement('tr');
    tbodyEl.appendChild(tr2El);
  
    const thEl = document.createElement('td');
    tr2El.appendChild(thEl);
    thEl.textContent = this.name;
  
    for (let i = 0; i < this.cookiesNum.length; i++) {
      const tdEl = document.createElement('td');
      tr2El.appendChild(tdEl);
      tdEl.textContent = this.cookiesNum[i];
    }
    const td2El = document.createElement('td');
    tr2El.appendChild(td2El);
    td2El.textContent = this.totalCookies;
  };
  

//------------------------------------------------ CreateTableFooter-----------------------------------------------------------------



function  CreateTableFooter() {
  
    let totalOfTotal = 0;
    const tr8El = document.createElement('tr');
    tableEl.appendChild(tr8El);
  
    const th2El = document.createElement('th');
    tr8El.appendChild(th2El);
    th2El.textContent = 'Totals';
  
    for (let i = 0; i < hours.length; i++) {
      const thEl = document.createElement('th');
      tr8El.appendChild(thEl);
  
      let total2 = 0;
      for ( let j = 0; j < City.allCitys.length; j++ ) {
        total2 += City.allCitys[j].cookiesNum[i];
      }
      thEl.textContent =total2;
    }
  
  
  
  
    for (let i = 0; i < arrayTotal.length; i++) {
      totalOfTotal +=arrayTotal[i];
    }
  
  
  
    const th3El = document.createElement('th');
    tr8El.appendChild(th3El);
    th3El.textContent = totalOfTotal;
  
  }
  
 


 //--------------------------------added in html page-----------------------------------------------------

 const parent = document.getElementById('locations');
 console.log(parent);
 
 const headerElement = document.createElement('header');
 parent.appendChild(headerElement);
 
 const h1Element = document.createElement('h1');
 headerElement.appendChild(h1Element);
 h1Element.textContent = "Salmon Cookies: Sales Data";
 
 const imageElement=document.createElement('img');
 headerElement.appendChild(imageElement);
 imageElement.setAttribute('src','img/salmon (2).png');
 
 const mainElement =document.createElement('main');
 parent.appendChild(mainElement);
 
 const tableEl = document.createElement('table');
 mainElement.appendChild(tableEl);


  const theadEl = document.createElement('thead');
  tableEl.appendChild(theadEl);
  
  const tbodyEl = document.createElement('tbody');
  tableEl.appendChild(tbodyEl);
  
  const tfootEl = document.createElement('tfoot');
  tableEl.appendChild(tfootEl);
  


  //----------------------------------------------------------------------------------------

  
  CreateTableHeader();
  const seatle = new City('seatle', 23, 65, 6.3);
  const tokyo = new City('Tokyo', 3, 24, 1.2);
  const dubai = new City('Dubai', 11, 38, 3.7);
  const paris = new City('Paris', 20, 38, 2.3);
  const lima = new City('Lima', 2, 16, 4.6);
  

  seatle.NumCustomers(this.min, this.max);
  seatle.numCookiesByHour();
  
  tokyo.NumCustomers(this.min, this.max);
  tokyo.numCookiesByHour();

  dubai.NumCustomers(this.min, this.max);
  dubai.numCookiesByHour();

  paris.NumCustomers(this.min, this.max);
  paris.numCookiesByHour();


  lima.NumCustomers(this.min, this.max);
  lima.numCookiesByHour();
  
  
  //----------------------------------call render to create body------------------------------------------
  
  seatle.renderObjects();
  
  tokyo.renderObjects();
  
  dubai.renderObjects();
  
  paris.renderObjects();
  
  lima.renderObjects();
  
  
  CreateTableFooter();


/*

// *******************************************************

lab6 
//Seattle	23	65	6.3

let Seattle = {


    min: 23,
    max: 65,
    avg: 6.3,
    customers: 0,
    customersByHours: [],
    cookies: 0,
    cookiesNumber: [],
    total: 0,


    RandomNum: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

    },


    NumCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customers = this.RandomNum(this.min, this.max);
            //console.log(this.customers);
            this.customersByHours.push(this.customers);
           //console.log(this.customersByHours[i]);
        }
    },


    NumCookies: function () {

        for (let j = 0; j < this.customersByHours.length; j++) {
        this.cookiesNumber.push(Math.floor(this.customersByHours[j] * this.avg));
       this.total+= this.cookiesNumber[j];


        }

    },


    PrintInfo: function () {

        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = "Seattle";
        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = hours[i] + " " + this.cookiesNumber[i] + " ";
        }


        let liElement=document.createElement('li');
        ulElement.appendChild(liElement)
        liElement.textContent+= "Total: "+this.total;

    }



}


let parent = document.getElementById('locations');
 console.log(parent);
 let headerElement = document.createElement('header');
 parent.appendChild(headerElement);
 let h1Element = document.createElement('h1');
 headerElement.appendChild(h1Element);
 h1Element.textContent = "Salmon Cookies: Sales Data";

let imageElement=document.createElement('img');
parent.appendChild(imageElement);
imageElement.setAttribute('src','img/salmon (2).png');








Seattle.NumCustomer ();
Seattle.NumCookies();
Seattle.PrintInfo();
//***************************************************************************************************** *
//Tokyo	3	24	1.2
let Tokyo = {


    min: 3,
    max: 24,
    avg: 1.2,
    customers: 0,
    customersByHours: [],
    cookies: 0,
    cookiesNumber: [],
    total: 0,


    RandomNum: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

    },


    NumCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customers = this.RandomNum(this.min, this.max);
            //console.log(this.customers);
            this.customersByHours.push(this.customers);
           // console.log(this.customersByHours);
        }
    },


    NumCookies: function () {

        for (let j = 0; j < this.customersByHours.length; j++) {
        this.cookiesNumber.push(Math.floor(this.customersByHours[j] * this.avg));
       this.total+= this.cookiesNumber[j];


        }

    },


    PrintInfo:function (){

        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = "Tokyoe";


        let ulElement=document.createElement('ul');

         parent.appendChild(ulElement);

        for(let i=0;i<hours.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=hours[i]+" "+this.cookiesNumber[i]+ " ";
          }


       let liElement=document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent+= "Total: "+this.total;

        }



}



Tokyo.NumCustomer ();
Tokyo.NumCookies();
Tokyo.PrintInfo();


//***************************************************************************************************** *
//Dubai	11	38	3.7
let Dubai = {


    min: 11,
    max: 38,
    avg: 3.7,
    customers: 0,
    customersByHours: [],
    cookies: 0,
    cookiesNumber: [],
    total: 0,


    RandomNum: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

    },


    NumCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customers = this.RandomNum(this.min, this.max);
            //console.log(this.customers);
            this.customersByHours.push(this.customers);
           // console.log(this.customersByHours);
        }
    },


    NumCookies: function () {

        for (let j = 0; j < this.customersByHours.length; j++) {
        this.cookiesNumber.push(Math.floor(this.customersByHours[j] * this.avg));
       this.total+= this.cookiesNumber[j];


        }

    },


    PrintInfo:function (){

        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = "Dubai";


        let ulElement=document.createElement('ul');

         parent.appendChild(ulElement);

        for(let i=0;i<hours.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=hours[i]+" "+this.cookiesNumber[i]+ " ";
          }


       let liElement=document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent+= "Total; "+this.total;

        }



}



Dubai.NumCustomer ();
Dubai.NumCookies();
Dubai.PrintInfo();
//************************************************************************************************ *
//Paris	20	38	2.3
let Paris = {


    min: 20,
    max: 38,
    avg: 2.3,
    customers: 0,
    customersByHours: [],
    cookies: 0,
    cookiesNumber: [],
    total: 0,


    RandomNum: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

    },


    NumCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customers = this.RandomNum(this.min, this.max);
            //console.log(this.customers);
            this.customersByHours.push(this.customers);
           // console.log(this.customersByHours);
        }
    },


    NumCookies: function () {

        for (let j = 0; j < this.customersByHours.length; j++) {
        this.cookiesNumber.push(Math.floor(this.customersByHours[j] * this.avg));
       this.total+= this.cookiesNumber[j];


        }

    },


    PrintInfo:function (){

        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = "Paris";


        let ulElement=document.createElement('ul');

         parent.appendChild(ulElement);

        for(let i=0;i<hours.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=hours[i]+" "+this.cookiesNumber[i]+ " ";
          }


        let liElement=document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent+= "Total: "+this.total;

        }



}


Paris.NumCustomer ();
Paris.NumCookies();
Paris.PrintInfo();
//***************************************************************************************************************
//Lima	2	16	4.6
let Lima = {


    min: 2,
    max: 16,
    avg: 4.6,
    customers: 0,
    customersByHours: [],
    cookies: 0,
    cookiesNumber: [],
    total: 0,


    RandomNum: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

    },


    NumCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customers = this.RandomNum(this.min, this.max);
            //console.log(this.customers);
            this.customersByHours.push(this.customers);
           // console.log(this.customersByHours);
        }
    },


    NumCookies: function () {

        for (let j = 0; j < this.customersByHours.length; j++) {
        this.cookiesNumber.push(Math.floor(this.customersByHours[j] * this.avg));
       this.total+= this.cookiesNumber[j];


        }

    },


    PrintInfo:function (){

        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = "Lima";


        let ulElement=document.createElement('ul');

         parent.appendChild(ulElement);

        for(let i=0;i<hours.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=hours[i]+" "+this.cookiesNumber[i]+ " ";
          }


      let liElement=document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent+= "Total: "+this.total;

        }



}


Lima.NumCustomer ();
Lima.NumCookies();
Lima.PrintInfo();*/