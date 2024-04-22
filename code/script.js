document.body.onload = addElement(100);


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
    newDiv.addEventListener("mouseover", ()=> {newDiv.classList.add("paint-on-hover");})
    currentDiv.appendChild(newDiv);
  }
}



