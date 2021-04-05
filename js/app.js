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

City.allCitys = [];





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

let arrayTotal = [];

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



function CreateTableFooter() {

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
    for (let j = 0; j < City.allCitys.length; j++) {
      total2 += City.allCitys[j].cookiesNum[i];
    }
    thEl.textContent = total2;
  }




  for (let i = 0; i < arrayTotal.length; i++) {
    totalOfTotal += arrayTotal[i];
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





