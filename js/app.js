 'use strict';
var shoppingIteam =['bag.jpg', 'banana.jpg' , 'bathroom.jpg' , 'boots.jpg' , 'breakfast.jpg' , 'bubblegum.jpg' , 'chair.jpg' , 'cthulhu.jpg' , 'dog-duck.jpg', 'dragon.jpg' , 'pen.jpg' , 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png','tauntaun.jpg', 'unicorn.jpg','usb.gif', 'water-can.jpg','wine-glass.jpg'];
var leftItem = document.getElementById('left_item_img');
 var middleItem = document.getElementById('middle_item_img');//save the tag
 var rightItem = document.getElementById('right_item_img');
 var allItem = document.getElementById('all_shope_item');
var myObjectArray=[];
var arrayStoreImgWePic=[];
var clkTimeCount = 0;
var leftItemRandom, middleItemRandom, rightItemRandom;


 //helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;}


// // constructer we creat it to ocreat obj
 function Buy(name ) {
    this.name = name.split('.')[0]; // return array of 2 
    this.urlImage = `img/${name}`;
    
    this.timeImgDisplay= 0;
    this.clkOneachimg = 0;
    myObjectArray.push(this);
   
}

  // creat obj
  for(var i = 0; i< shoppingIteam.length ; i++){
    new Buy(shoppingIteam[i]);//we pass the name of the item from the array
  }


function pickRandomItems(){
     leftItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];// this variable is obj
     middleItemRandom = myObjectArray[randomNumber(0, myObjectArray.length-1)];
     rightItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
     while(leftItemRandom === middleItemRandom || leftItemRandom === rightItemRandom || middleItemRandom === rightItemRandom || arrayStoreImgWePic.includes(leftItemRandom) || arrayStoreImgWePic.includes(middleItemRandom) || arrayStoreImgWePic.includes(rightItemRandom)){
      //pick another random item
      leftItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
    middleItemRandom = myObjectArray[randomNumber(0, myObjectArray.length-1)];
    rightItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
    }
//  var arrayStoreImgWePic = [];}
arrayStoreImgWePic = [];
  arrayStoreImgWePic.push(leftItemRandom);
  arrayStoreImgWePic.push(middleItemRandom);
  arrayStoreImgWePic.push(rightItemRandom);
  

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
  pickRandomItems();
  
  allItem.addEventListener('click' , clickImage);
  function clickImage(e){
    
    
    if ( e.target.id  === 'left_item_img' ){
      clkTimeCount++;
      leftItemRandom.clkOneachimg+=1;
      pickRandomItems();
    }
    else if ( e.target.id  === 'middle_item_img'){
      clkTimeCount++;
      middleItemRandom.clkOneachimg+=1;
      pickRandomItems();
    }
    else if ( e.target.id  === 'right_item_img' ){
      clkTimeCount++;
      rightItemRandom.clkOneachimg+=1;
      pickRandomItems();
    }
     setItem();
    
    if(clkTimeCount === 25){
      allItem.removeEventListener('click' , clickImage);
      leftItem.remove();
      rightItem.remove();
      middleItem.remove();
      renderChartFuncion();
      resultFinal();
      
      }
    
     
     
    }
    getItem();
     //setItem();

    function resultFinal (){
      for (var i=0 ; i< myObjectArray.length ; i++){
        var gitTag = document.getElementById('result');
        var listCreat = document.createElement('li');
        gitTag.appendChild(listCreat);
        listCreat.textContent = `${myObjectArray[i].name} had ${myObjectArray[i].clkOneachimg} clk and was shown ${myObjectArray[i].timeImgDisplay}`;
      }
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
var iteamSelect = myObjectArray[i].timeImgDisplay;
iteamsSelect.push(iteamSelect);
   }
    // console.log(iteamsName);
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: iteamsName  ,
         
          datasets: [{
              label: '# of Votes',
              data: iteamsClk ,
              
              backgroundColor: 'rgb(226, 74, 13)' 
                  ,
                  
              borderColor:'rgb(226, 74, 13)',
                  
              borderWidth: 1
          },
         {
            label: '# of item',
            data:  iteamsSelect,
            
            backgroundColor:'rgb(26, 24, 25)',
            borderColor:'rgb(26, 24, 25)',
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


   //clk
function setItem(){
  var clkTimeCount = JSON.stringify(myObjectArray);
  localStorage.setItem( 'clks', clkTimeCount);
  
}
function getItem(){
  var clksCount = localStorage.getItem('clks');
  if(clksCount){
    myObjectArray = JSON.parse(clksCount);
  }
  //resultFinal();
  renderChartFuncion();
  // clksCount = JSON.parse(clksCount);
  // if (clksCount){
  //   myObjectArray= JSON.parse(clksCount);
  // }
    //   resultFinal ();
    //  renderChartFuncion();
}

  getItem();