'use strict';
var shoppingIteam =['bag.jpg', 'banana.jpg' , 'bathroom.jpg' , 'boots.jpg' , 'breakfast.jpg' , 'bubblegum.jpg' , 'chair.jpg' , 'cthulhu.jpg' , 'dog-duck.jpg', 'dragon.jpg' , 'pen.jpg' , 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png','tauntaun.jpg', 'unicorn.jpg','usb.gif', 'water-can.jpg','wine-glass.jpg'];

var leftItem = document.getElementById('left_item_img');
var middleItem = document.getElementById('middle_item_img');
var rightItem = document.getElementById('right_item_img');
var allItem = document.getElementById('all_shope_item');

// Array to store all obj
var myObjectArray = [];

// to count time user clk on item
var clkTimeCount = 0;

// constructer 
function Buy(name ) {
    this.name = name;
    this.urlImage = `img/${this.name}`;
    myObjectArray.push(this);
};

function pickRandomItems(){
    var leftItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];
    var middleItemRandom = myObjectArray[randomNumber(0, myObjectArray.length-1)];
    var rightItemRandom =  myObjectArray[randomNumber(0 , myObjectArray.length-1 )];

    leftItem .setAttribute('src' , leftItemRandom.urlImage);
    leftItem .setAttribute('alt' , leftItemRandom.name);
    middleItem.setAttribute('src' , middleItemRandom.urlImage);
    middleItem.setAttribute('alt' , middleItemRandom.name);
    rightItem.setAttribute('src' , rightItemRandom.urlImage);
    rightItem.setAttribute('alt' , rightItemRandom.name);

    while(leftItemRandom.name === middleItemRandom.name || leftItemRandom.name === rightItemRandom.name || middleItemRandom.name === rightItemRandom.name ){
      //pick another random item
      pickRandomItems();
    }
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
       console.log(clkTimeCount);
    //   console.log('finished');
    }
  }
  allItem.addEventListener('click' , clickImage);


//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }