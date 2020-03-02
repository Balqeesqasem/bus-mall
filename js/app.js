 'use strict';
var shoppingIteam =['bag.jpg', 'banana.jpg' , 'bathroom.jpg' , 'boots.jpg' , 'breakfast.jpg' , 'bubblegum.jpg' , 'chair.jpg' , 'cthulhu.jpg' , 'dog-duck.jpg', 'dragon.jpg' , 'pen.jpg' , 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png','tauntaun.jpg', 'unicorn.jpg','usb.gif', 'water-can.jpg','wine-glass.jpg'];
var leftItem = document.getElementById('left_item_img');
 var middleItem = document.getElementById('middle_item_img');
 var rightItem = document.getElementById('right_item_img');
 var allItem = document.getElementById('all_shope_item');

// // Array to store all obj
 var myObjectArray = [];
//  var clkOneachimg =[];
// var timeImgDisplay=[];
 var arrayStoreImgWePic = [];

// // to count time user clk on item
var clkTimeCount = 0;
var leftItemRandom, middleItemRandom, rightItemRandom;

// for(var i=0 ; i<shoppingIteam.length ; i++)
//     {
//     clkOneachimg.push(0);
//      timeImgDisplay.push(0);

//     }
//     console.log(clkOneachimg);
// console.log(timeImgDisplay);

// // constructer 
 function Buy(name ) {
    this.name = name.split('.')[0];
    this.urlImage = `img/${name}`;
    // this.clickImage =0;
    this.timeImgDisplay= 0;
    this.clkOneachimg = 0;
    myObjectArray.push(this);
};

function pickRandomItems(){
     leftItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];// this variable is obj
     middleItemRandom = myObjectArray[randomNumber(0, myObjectArray.length-1)];
     rightItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
    
      while(leftItemRandom === middleItemRandom || leftItemRandom === rightItemRandom || middleItemRandom === rightItemRandom ){
        //pick another random item
        leftItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
      middleItemRandom = myObjectArray[randomNumber(0, myObjectArray.length-1)];
      rightItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
      }
 var arrayStoreImgWePic = [];

 
  
console.log(arrayStoreImgWePic);
  for(var i=0 ; i<arrayStoreImgWePic.length ; i++){
    if (arrayStoreImgWePic[i] === leftItemRandom || arrayStoreImgWePic[i] === middleItemRandom || arrayStoreImgWePic[i] === rightItemRandom){
      leftItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
      middleItemRandom = myObjectArray[randomNumber(0, myObjectArray.length-1)];
      rightItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
    }
    else {
      arrayStoreImgWePic.pop(leftItemRandom);
      arrayStoreImgWePic.pop(middleItemRandom);
      arrayStoreImgWePic.pop(rightItemRandom);
      
    }
  }
  arrayStoreImgWePic.push(leftItemRandom);
  arrayStoreImgWePic.push(middleItemRandom);
  arrayStoreImgWePic.push(rightItemRandom);
  
//   while(arrayStoreImgWePic === leftItemRandom || arrayStoreImgWePic === middleItemRandom || arrayStoreImgWePic === rightItemRandom  )
//  {
//   leftItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
//   middleItemRandom = myObjectArray[randomNumber(0, myObjectArray.length-1)];
//   rightItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
//  }
    

    leftItem.setAttribute('src' , leftItemRandom.urlImage);
    leftItemRandom.timeImgDisplay+=1;
    leftItem.setAttribute('alt' , leftItemRandom.name);
    middleItem.setAttribute('src' , middleItemRandom.urlImage);
    middleItemRandom.timeImgDisplay+=1;
    middleItem.setAttribute('alt' , middleItemRandom.name);
    rightItem.setAttribute('src' , rightItemRandom.urlImage);
    rightItemRandom.timeImgDisplay+=1;
    rightItem.setAttribute('alt' , rightItemRandom.name);

   
  }

  for(var i = 0; i< shoppingIteam.length ; i++){
    new Buy(shoppingIteam[i]);//we pass the name of the item from the array
  }

  pickRandomItems();
  // console.log(myObjectArray);
  
  function clickImage(e){
    
    if( e.target.id === 'left_item_img' || e.target.id === 'middle_item_img' || e.target.id === 'right_item_img'){
        pickRandomItems();
      clkTimeCount++;
      renderChartFuncion();
    }
    if ( e.target.id  === 'left_item_img' ){
      leftItemRandom.clkOneachimg+=1;
    
    }
    if ( e.target.id  === 'middle_item_img'){
      middleItemRandom.clkOneachimg+=1;
    }
    if ( e.target.id  === 'right_item_img' ){
      rightItemRandom.clkOneachimg+=1;
    }
    // if ( e.target.alt  ===  'left_item_img'){
    //   leftItemRandom.timeImgDisplay+=1;
    // }
    // if ( e.target.alt  ===  'middle_item_img'){
    //   middleItemRandom.timeImgDisplay+=1;
    // }
    // if ( e.target.alt  ===  'right_item_imgg'){
    //   rightItemRandom.timeImgDisplay+=1;
    // }
    if(clkTimeCount === 25){
      //remove event listener
      allItem.removeEventListener('click' , clickImage);
      for (var i=0 ; i<myObjectArray.length ; i++){
        var gitTag = document.getElementById('result');
        var listCreat = document.createElement('li');
        gitTag.appendChild(listCreat);
        listCreat.textContent = `${myObjectArray[i].name} had ${myObjectArray[i].clkOneachimg} clk and was shown ${myObjectArray[i].timeImgDisplay}`;
      }
      
      }
    
    
      // if (myObjectArray[i].name ===leftItem.alt ){
      //   timeImgDisplay[i]+=1;
      // }
      // if (myObjectArray[i].name ===middleItem.alt ){
      //   timeImgDisplay[i]+=1;
      // }
      // if (myObjectArray[i].name ===rightItem.alt ){
      //   timeImgDisplay[i]+=1;
      // }

    }
    // console.log(timeImgDisplay);
    
  
  allItem.addEventListener('click' , clickImage);


//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 
 function renderChartFuncion(){
   var iteamsName = [];
   var iteamsClk = [];
   var iteamsSelect = [];
   for ( var i=0 ; i<myObjectArray.length; i++){
var iteamName =myObjectArray[i].name;
iteamsName.push(iteamName);
var iteamClk = myObjectArray[i].clkOneachimg;
iteamsClk.push(iteamClk);
var iteamSelect = myObjectArray[i].clkOneachimg;
iteamsSelect.push(iteamSelect);
   }
    console.log(iteamsName);
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: iteamsName  ,
         
          datasets: [{
              label: '# of Votes',
              data: iteamsClk ,
              data: iteamsSelect ,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  }); 
  
  }
 