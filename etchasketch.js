const container=document.querySelector('.container');
let squarecount=40;
let myBoolean=false;
let myBoolean2=false;






    

function mydrawingSpace(squarecounter){
    let i=0;
while(i<squarecounter**2){
  const mydiv=document.createElement('div');
let mysquareHeight=480/squarecounter;
let mystringHeight=mysquareHeight+'px';
mydiv.style.height=mystringHeight;
mydiv.style.width=mystringHeight;
mydiv.classList.add('square');
mydiv.addEventListener('mouseover',function(){
  mydiv.style.backgroundColor=colorPicker.value;
});

     container.appendChild(mydiv);
     
     i++;
};}
mydrawingSpace(squarecount);
const myinput=document.querySelector('input');
const noOfSquares=document.querySelector('p');

var timerId; // To track the timeout
let number1;
// Function to handle the input change
function handleInputChange() {
  // Clear the previous timeout
  clearTimeout(timerId);

  // Start a new timeout to update the value after the user has finished sliding
  timerId = setTimeout(function() {
    number1=myinput.value;
    console.log(number1);
    mydrawingSpace(number1);
  }, 500); // Adjust the delay (in milliseconds) as needed
}

// Add an event listener to handle the input change
myinput.addEventListener('input',function(){
    noOfSquares.textContent=this.value+'X'+this.value;
    container.innerHTML='';

    handleInputChange();
    if(myBoolean){
    toggleButton.checked = !toggleButton.checked;
    myBoolean=!myBoolean;}
    
    
   
    
    
});
const colorPicker=document.querySelector('#colorPicker');
colorPicker.addEventListener('input', function() {
        
  const color = colorPicker.value;
  const square1=document.querySelectorAll('.square');
  
  square1.forEach(square2 => square2.addEventListener('mouseover',function(){
      square2.style.backgroundColor =color;
  }))
  if(myBoolean){
  toggleButton.checked = !toggleButton.checked;
  myBoolean=!myBoolean;}

  


});

function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}

const toggleButton = document.querySelector('.toggle-button input[type="checkbox"]');
toggleButton.addEventListener('change', function() {
  myBoolean=!myBoolean;
  const square1=document.querySelectorAll('.square');
  
  square1.forEach(square2 => square2.addEventListener('mouseover',function(){
    if(myBoolean){
      square2.style.backgroundColor =generateRandomColor();}
  }))

  
});
const shaderButton = document.querySelector('.shader-button input[type="checkbox"]');
shaderButton.addEventListener('change', function() {

myBoolean2=!myBoolean2;
//alert('wait a few seconds for shader to change');


   if(myBoolean2){
    const square2=document.querySelectorAll('.square');
    square2.forEach(item =>{
      item.style.opacity='0.1';
    });
    
  square2.forEach(square2 => square2.addEventListener('mouseover',function(){
    
    let myvar1=getCurrentOpacity(this);
    
      
    
    
  

   {
      
      changeStyle(this,myvar1);
    

      
    }

  }))
 

  
}
if(myBoolean2===false){
  const square2=document.querySelectorAll('.square');
    square2.forEach(item =>{
      item.style.opacity='1';
    });

}


});
function changeStyle(element,myvar){
  myvar=myvar+0.1;
  element.style.opacity =myvar;
}
function getCurrentOpacity(element) {
  const computedStyle = window.getComputedStyle(element);
  const opacity = computedStyle.getPropertyValue('opacity');
  const number = parseFloat(opacity);
  return number;
}





