let randomnumber1=parseInt(Math.random()*6)+1;
let randomnumber2=parseInt(Math.random()*6)+1;

let img1=document.getElementById("im1")
let img2=document.getElementById("im2")

img1.setAttribute('src',`./Images/dice${randomnumber1}.png`)
img2.src=(`./Images/dice${randomnumber2}.png`)


let win= document.getElementById('winner')
if(randomnumber1==randomnumber2){
    win.innerText="Draw"
}
else if(randomnumber1>randomnumber2){
   win.innerText="Player One Win";
}

else{
    win.innerText="Player Two Win"
    
}