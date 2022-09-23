const speed = 100;
const screenY = 600;
const screenX = 1400;
let counter = 0;
let collision = false;
let countUp = 0;
let countDown = 0;
let countLeft = 0;
let countRight = 0;



function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height  < bRect.top ||
		aRect.top > bRect.top + bRect.height  ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width 
	);
}
function isTouching2(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return (
		aRect.top + aRect.height + speed  <= bRect.top ||
		aRect.top >= bRect.top + bRect.height - speed  ||
		aRect.left + aRect.width + speed <= bRect.left ||
		aRect.left >= bRect.left + bRect.width - speed
	);
}



const init = () => {
    //get the avatar
    let avatar = document.querySelector("#avatar");
    //get the coin
    let counterH1 = document.querySelector(".score");
    let coin = document.querySelector("#coin");
    let wall = document.querySelector(".object");
    
    moveCoin();

    
   
    
    window.addEventListener('keyup', function(e){

        if(isTouching2(avatar, wall)){
            collision = false;
        }



        if(collision === false){


            
            if(e.key === 'ArrowDown' || e.key === 'Down'){
                
                //collision = false;
                moveVertical(avatar, speed);
                console.log("down");
            }
            
            if(e.key === "ArrowUp" || e.key === "Up"){
                
                
                //collision = false;
                moveVertical(avatar, -speed);
                console.log("up");
            }
            
            if(e.key === "ArrowRight" || e.key === "Right"){
                
                //collision = false;
                moveHorisontal(avatar, speed);
                avatar.style.transform = "scale(1, 1)"
                
            }
            
            if(e.key === "ArrowLeft" || e.key === "Left"){
                
                //collision = false;
                moveHorisontal(avatar, -speed);
                avatar.style.transform = "scale(-1, 1)"
                
            }
        }
            
            
        if(isTouching(avatar,coin)){
            moveCoin();
            counter++;
            counterH1.innerHTML = "score " + counter;
        }
        
        
        if(isTouching(avatar,wall)){
            console.log(collision)
            collision = true;
            
        }
        



    });

    
}

const moveVertical = (element, amount) => {

    const currTop = extractPos(element.style.top);
    if(currTop+amount <= screenY && currTop+amount >= 0){
        element.style.top = `${currTop + amount}px`;
        
    }
}

const moveHorisontal = (element, amount) => {

    const currLeft = extractPos(element.style.left);
    if(currLeft+amount <= screenX && currLeft+amount >= 0){
        element.style.left = `${currLeft + amount}px`;
       
    }
 }

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = () => {
    //const x = Math.floor(Math.random() * window.innerWidth)
    const x = Math.random()*screenX ;
    // const y = ?
    const y = Math.random()*screenY;

    coin.style.top = `${y}px`;

    coin.style.left= `${x}px`;
    // coin.style.?? = ??
}







init();
