 'use strict';
var shoppingIteam =['bag.jpg', 'banana.jpg' , 'bathroom.jpg' , 'boots.jpg' , 'breakfast.jpg' , 'bubblegum.jpg' , 'chair.jpg' , 'cthulhu.jpg' , 'dog-duck.jpg', 'dragon.jpg' , 'pen.jpg' , 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png','tauntaun.jpg', 'unicorn.jpg','usb.gif', 'water-can.jpg','wine-glass.jpg'];
var leftItem = document.getElementById('left_item_img');
 var middleItem = document.getElementById('middle_item_img');
 var rightItem = document.getElementById('right_item_img');
 var allItem = document.getElementById('all_shope_item');

// // Array to store all obj
 var myObjectArray = [];
 var clkOneachimg =[];
 var timeImgDisplay=[];
// // to count time user clk on item
var clkTimeCount = 0;

for(var i=0 ; i<shoppingIteam.length ; i++)
    {
      clkOneachimg.push(0);
     timeImgDisplay.push(0);

    }
    console.log(clkOneachimg);
console.log(timeImgDisplay);

// // constructer 
 function Buy(name ) {
    this.name = name.split('.')[0];
    this.urlImage = `img/${name}`;
    this.clickImage =0;
    
    myObjectArray.push(this);
};

function pickRandomItems(){
    var leftItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
    var middleItemRandom = myObjectArray[randomNumber(0, myObjectArray.length-1)];
    var rightItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
    
    while(leftItemRandom === middleItemRandom || leftItemRandom === rightItemRandom || middleItemRandom === rightItemRandom ){
      //pick another random item
      leftItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
    middleItemRandom = myObjectArray[randomNumber(0, myObjectArray.length-1)];
    rightItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
    }
    leftItem.setAttribute('src' , leftItemRandom.urlImage);
    leftItem.setAttribute('alt' , leftItemRandom.name);
    middleItem.setAttribute('src' , middleItemRandom.urlImage);
    middleItem.setAttribute('alt' , middleItemRandom.name);
    rightItem.setAttribute('src' , rightItemRandom.urlImage);
    rightItem.setAttribute('alt' , rightItemRandom.name);

   
  }

  for(var i = 0; i< shoppingIteam.length ; i++){
    new Buy(shoppingIteam[i]);//we pass the name of the item from the array
  }

  pickRandomItems();
  console.log(myObjectArray);

  function clickImage(e){
    
    if( e.target.id === 'left_item_img' || e.target.id === 'middle_item_img' || e.target.id === 'right_item_imgg'){
        pickRandomItems();
      clkTimeCount++;
    }
    if(clkTimeCount === 25){
      //remove event listener
      allItem.removeEventListener('click' , clickImage);
      for (var i=0 ; i<myObjectArray.length ; i++){
        var gitTag = document.getElementById('result');
        var listCreat = document.createElement('li');
        gitTag.appendChild(listCreat);
        listCreat.textContent = `${myObjectArray[i].name} had ${clkOneachimg[i]} vots and was shown ${timeImgDisplay[i]}`;
      }
      
      }
    
    for(var i=0 ; i<shoppingIteam.length; i++){
      if ( e.target.alt  ===  myObjectArray[i].name){
        clkOneachimg[i]+=1;
      }
      if (myObjectArray[i].name ===leftItem.alt ){
        timeImgDisplay[i]+=1;
      }
      if (myObjectArray[i].name ===middleItem.alt ){
        timeImgDisplay[i]+=1;
      }
      if (myObjectArray[i].name ===rightItem.alt ){
        timeImgDisplay[i]+=1;
      }

    }
    console.log(timeImgDisplay);
    
  }
  allItem.addEventListener('click' , clickImage);


//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 



  