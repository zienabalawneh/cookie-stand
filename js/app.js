'use strict';


let hours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm'];

let ShopesName = [];


function Stores(name, minCus, maxCus, avgCookies) {
  this.name = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookies = avgCookies;
  this.custmPerHours = [];
  this.cookiesNum = [];
  this.totalCookies = 0;
  this.cookies = 0;
  ShopesName.push(this);
}







function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//--------------------------------------------------------------

Stores.prototype.NumCustomers = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custmPerHours.push(getRandomNumber(this.minCus, this.maxCus));
  }
};


//-----------------------------------------------------------------------------------

let grossTotal = [];

Stores.prototype.numCookiesByHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesNum.push(Math.floor(this.custmPerHours[i] * this.avgCookies));
    this.totalCookies += this.cookiesNum[i];
}
  
  grossTotal.push(this.totalCookies);
};




//----------------------------CreateTableHeader-----------------------

function CreateTableHeader() {


  const headRow = document.createElement('tr');
  theadEl.appendChild(headRow);
  const firstTd = document.createElement('th');
  headRow.appendChild(firstTd);
  firstTd.textContent = 'City/Time';

  for (let i = 0; i < hours.length; i++) {
    const hourTh = document.createElement('th');
    headRow.appendChild(hourTh);
    hourTh.textContent = hours[i];
  }

  const headTotal = document.createElement('th');
  headRow.appendChild(headTotal);
  headTotal.textContent = 'Daily Location Total';
}




//--------------------------------------body table-------------------------------------


Stores.prototype.renderObjects = function () {

  const bodyRowTr = document.createElement('tr');
  tbodyEl.appendChild(bodyRowTr);

  const nameStoretd = document.createElement('td');
  bodyRowTr.appendChild(nameStoretd);
  nameStoretd.textContent = this.name;

  for (let i = 0; i < this.cookiesNum.length; i++) {
    const numCookieTd = document.createElement('td');
    bodyRowTr.appendChild(numCookieTd);
    numCookieTd.textContent = this.cookiesNum[i];
  }
  const totalTd = document.createElement('td');
  bodyRowTr.appendChild(totalTd);
  totalTd.textContent = this.totalCookies;
};


//------------------------------------------------ CreateTableFooter-----------------------------------------------------------------



function CreateTableFooter() {

  let grossOfTotal = 0;

  
  const footerRow = document.createElement('tr');
  tableEl.appendChild(footerRow);

  const labelTotelTd = document.createElement('th');
  footerRow.appendChild(labelTotelTd);
  labelTotelTd.textContent = 'Totals';

  for (let i = 0; i < hours.length; i++) {
    const footerTotalTh = document.createElement('th');
    footerRow.appendChild(footerTotalTh);

    let total = 0;
    for (let j = 0; j < ShopesName.length; j++) {
      total += ShopesName[j].cookiesNum[i];
    }
    footerTotalTh.textContent = total;
  }




  for (let i = 0; i < grossTotal.length; i++) {
    grossOfTotal += grossTotal[i];
  }



  const th3El = document.createElement('th');
  footerRow.appendChild(th3El);
  th3El.textContent = grossOfTotal;

}




//--------------------------------added in html page-----------------------------------------------------

const parent = document.getElementById('locations');
console.log(parent);

const headerElement = document.createElement('header');
parent.appendChild(headerElement);

const h1Element = document.createElement('h1');
headerElement.appendChild(h1Element);
h1Element.textContent = "Salmon Cookies: Sales Data";

const imageElement = document.createElement('img');
headerElement.appendChild(imageElement);
imageElement.setAttribute('src', 'img/salmon (2).png');

const mainElement = document.createElement('main');
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
const seatle = new Stores('seatle', 23, 65, 6.3);
const tokyo = new Stores('Tokyo', 3, 24, 1.2);
const dubai = new Stores('Dubai', 11, 38, 3.7);
const paris = new Stores('Paris', 20, 38, 2.3);
const lima = new Stores('Lima', 2, 16, 4.6);


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





