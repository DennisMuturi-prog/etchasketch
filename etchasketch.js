const container=document.querySelector('.container');
let squarecount=160;
let myBoolean=false;


    

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
    noOfSquares.textContent=this.value;
    container.innerHTML='';

    handleInputChange();
    toggleButton.checked = !toggleButton.checked;
    myBoolean=!myBoolean;
    
    
   
    
    
});
const colorPicker=document.querySelector('#colorPicker');
colorPicker.addEventListener('input', function() {
        
  const color = colorPicker.value;
  const square1=document.querySelectorAll('.square');
  
  square1.forEach(square2 => square2.addEventListener('mouseover',function(){
      square2.style.backgroundColor =color;
  }))
  toggleButton.checked = !toggleButton.checked;
  myBoolean=!myBoolean;
  


});

function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}
console.log(generateRandomColor()); 
const toggleButton = document.querySelector('.toggle-button input[type="checkbox"]');
toggleButton.addEventListener('change', function() {
  myBoolean=!myBoolean;
  const square1=document.querySelectorAll('.square');
  
  square1.forEach(square2 => square2.addEventListener('mouseover',function(){
    if(myBoolean){
      square2.style.backgroundColor =generateRandomColor();}
  }))

  
});





