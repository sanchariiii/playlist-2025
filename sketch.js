

// import { Arena } from "./arena.js";

let api = Arena()
api
.channel("playlist-cl472b33z1k")
.get()
.then(function(channel){
    let h = ""
console.log(channel.contents)
channel.contents = channel.contents.sort((a, b) => a.position - b.position)
channel.contents.forEach((block) => {
    if (block.class =="Attachment"){}
    if (block.class == "Image"){
        console.log("image block", block)
        h += `<div class='block image'><img src=${block.image.display.url}></img></div>` 
    }
    if (block.class == "Text"){
      console.log("image block", block)
      h += `<div class='block text'>${block.content_html}</div>`   
  }
  if (block.class === "Link") {
    h += `
      <a href="${block.source.url}" class="link-block">
        <div class="block image link-image">
          <img src="${block.image.display.url}" />
        </div>
      </a>
    `;
  }

})
    

    document.querySelector(".A3").innerHTML+= h


    




// movable blocks 

    let z = 1;
    const panels = document.querySelectorAll('.A1 , .A2 , .A3');
    
    panels.forEach(panel => {
      panel.addEventListener('mousedown', (event) => {

    
        z++; //clicked boxed moves front 
        panel.style.zIndex = z;
        panel.classList.add("is-dragging");
    
        const startX = event.pageX;
        const startY = event.pageY;
        const origX = panel.offsetLeft;
        const origY = panel.offsetTop;
    
        const onMouseMove = (moveEvent) => {
          const dx = moveEvent.pageX - startX;
          const dy = moveEvent.pageY - startY;
    
          // constrain movement inside window
          let newLeft = origX + dx;
          let newTop = origY + dy;
    
          // Clamp to viewport
          const maxX = window.innerWidth - panel.offsetWidth;
          const maxY = window.innerHeight - panel.offsetHeight;
    
          newLeft = Math.max(0, Math.min(newLeft, maxX));
          newTop = Math.max(0, Math.min(newTop, maxY));
    
          panel.style.left = newLeft + 'px';
          panel.style.top = newTop + 'px';
        };
    
        const onMouseUp = () => {
          panel.classList.remove("is-dragging");
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };
    
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });
    });
    
  });



console.log("fishyyy")




















// let bubbleCount = 0;  
// function setup() {
//     createCanvas(window.innerWidth, window.innerHeight);
//     noStroke();  

//     canvas.style.position = 'absolute';
//     canvas.style.zIndex = 1;  // Set lower z-index to keep grid above it
//     canvas.style.top = 0;
//     canvas.style.left = 0;
// }

// function draw() {

//     let bubbleSize = random(5,30); 
//     let bubbleColor = color(173, 216, 230); 
//     fill(bubbleColor, 150);  

//     ellipse(mouseX, mouseY, bubbleSize, bubbleSize);

 
//     bubbleCount++;

    // //Clear the canvas after 3 bubbles
    // if (bubbleCount >= 20) {
    //     background(154, 197, 238,50); 
    //     bubbleCount = 0;  
    // }
//}
