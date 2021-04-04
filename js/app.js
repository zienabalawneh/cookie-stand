'use strict';

let hours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm'];


// *******************************************************
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
        this.cookiesNumber.push(this.customersByHours[j] * this.avg);
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
            liElement.textContent = hours[i] + " " + this.customersByHours[i] + " ";
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
        this.cookiesNumber.push(this.customersByHours[j] * this.avg);
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
            liElement.textContent=hours[i]+" "+this.customersByHours[i]+ " ";   
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
        this.cookiesNumber.push(this.customersByHours[j] * this.avg);
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
            liElement.textContent=hours[i]+" "+this.customersByHours[i]+ " ";   
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
        this.cookiesNumber.push(this.customersByHours[j] * this.avg);
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
            liElement.textContent=hours[i]+" "+this.customersByHours[i]+ " ";   
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
        this.cookiesNumber.push(this.customersByHours[j] * this.avg);
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
            liElement.textContent=hours[i]+" "+this.customersByHours[i]+ " ";   
          }
        
    
      let liElement=document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent+= "Total: "+this.total;
        
        }



}


Lima.NumCustomer ();
Lima.NumCookies();
Lima.PrintInfo();