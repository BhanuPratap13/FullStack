const ball = document.querySelector('h1');
const rollball = document.querySelector('h2');
const buttons = document.querySelectorAll('button');
const button = buttons[0]; 
const rollb = buttons[1];  
let bounce = false;
button.onclick=function(){
    if(!bounce){
        ball.style.animation="bounce 1s ease-in-out infinite";
        button.textContent= "STOP";
        bounce=true;
    }
    else{
        ball.style.animation="none";
        button.textContent= "START";
        bounce = false;
    }
};
let roll = false;
rollb.onclick=function(){
    if(!roll){
        rollball.style.animation="roll 5s linear infinite";
        rollb.textContent= "STOP";
        roll=true;
    }
    else{
        rollball.style.animation="none";
        rollb.textContent= "ROLL";
        roll = false;
    }
};