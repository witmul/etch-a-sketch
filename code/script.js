document.body.onload = addElement(16);
const btnRefresh = document.querySelector(".btn-refresh")

btnRefresh.addEventListener('click', function() {
  const userInput = prompt('Please enter any number from 2 to 200:');
  let roundedUserInput = Math.ceil(userInput);
  if (!isNaN(roundedUserInput) && roundedUserInput >= 2 && roundedUserInput <= 200) {
    document.querySelectorAll('.box').forEach(e => e.remove()); 
    addElement(roundedUserInput);
  }else{
    document.querySelectorAll('.box').forEach(e => e.remove()); 
    addElement(16);
    console.log("Input value is not a number or is not between 2 and 200.");
  }

});

function addElement(n) {
  const numBoxes = n*n
  const currentDiv = document.querySelector(".main-container");
  const containerWidth = window.innerWidth
  const borderSize = 1
  const sqrSide = (containerWidth / n) - (borderSize*2) // calculated in px
  currentDiv.style.width = `${containerWidth}px`
  
  for(i=0; i<numBoxes; i++){
    const newDiv = document.createElement("div");
    
    
    newDiv.className = "box";
    newDiv.style.border = `${borderSize}px solid black`;
    newDiv.style.width = `${sqrSide}px`;
    newDiv.style.aspectRatio = "1/1";
    newDiv.addEventListener("mouseover", function() {newDiv.classList.add("paint-on-hover");})
    currentDiv.appendChild(newDiv);
  }
}



