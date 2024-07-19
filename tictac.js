let boxes = document.querySelectorAll(".box");   // selects all tags with class "box"
let reset = document.querySelector("#reset"); // "" "" "" id "reset"
let menu= document.querySelector(".msg-container");
let newgame = document.querySelector("#new");
let draw= document.querySelector(".draw");
let tryagain = document.querySelector("#try");

let turnO = true;
let count = 0;


const winningPatterns= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];                         // all winning patterns

   boxes.forEach((box)=>{                           // FOR EACH LOOP USED WITH ARROW FUNCTION
    box.addEventListener("click", ()=>{
        count = count +1;
        console.log(count);
        console.log(" box was clicked ")
        if(turnO){
            box.innerText="0"
            turnO = false;
        }
        else{
        box.innerText="X"
        turnO = true;
        }

        box.disabled= true;         // FUNCTION IF BOX IS CLICKED THEN DISABLED THE BOX SO THAT IT CAN'T BE USED AGAIN
         checkWinner(); // CALLING FUNCTION
    })
   })

   const checkWinner = ()=>{               // THIS CHECKS IF THE VALUE OF TEXT IS SAME OR NOT According to  PATTERNS 
    for(let pattern of winningPatterns){
        let box1 = boxes[pattern[0]].innerText; // giving value of ex.  array[[0]] to box 1 
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
        if(box1 != "" && box2 != "" && box3 != ""){
            if(box1 === box2 && box2 === box3){    // check box1 with box2 and box3 with box 2 (a=b=c)
                console.log("winner is "+box1)
                count = 0;   
            
                disablebox();// calling function which whill disable the boxes from clicking
                update();
                

                
            }
            else if (count == 9 && box1 !== box2 && box2 !== box3){ // for draw 
                console.log("it's a draw");
                count =0;
                disablebox();
                update2();
                
            }
        
            

            }
        }
    
    }
   

const disablebox = () =>{
    boxes.forEach((box)=>{
        box.disabled = true;
        
        })
} 
 
const update =() =>{

    menu.classList.remove("hide");


}
const update2=()=>{
    draw.classList.remove("hide")
}

const enable =() => {
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
        menu.classList.add("hide")
        draw.classList.add("hide")
    
    })
}
newgame.addEventListener("click", enable)
tryagain.addEventListener("click", enable)
   
    
   

   reset.addEventListener("click",(again)=>{ // reset function which enabled all boxes and set innertext to none
    boxes.forEach((bos)=>{
        console.log("reset button clicked");
       if(bos.disabled){
        bos.disabled=false;
       }
        bos.innerText="";
        count=0;
       
        
    })
   })