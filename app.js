const speed = 50;
const screenY = 600;
const screenX = 1000;

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const init = () => {
    //get the avatar
    let avatar = document.querySelector("#avatar");
    //get the coin
    let coin = document.querySelector("#coin");
    moveCoin();

    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            
            moveVertical(avatar, speed);
            console.log("down")
        }

        if(e.key === "ArrowUp" || e.key === "Up"){

            moveVertical(avatar, -speed);
            console.log("up")
        }

        if(e.key === "ArrowRight" || e.key === "Right"){

            moveHorisontal(avatar, speed);
            
        }

        if(e.key === "ArrowLeft" || e.key === "Left"){

            moveHorisontal(avatar, -speed);
         
        }



        if(isTouching(avatar,coin)){
            moveCoin();
            console.log("touch!");
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

    const currRight = extractPos(element.style.right);
    if(currRight+amount <= screenX && currRight+amount >= 0){
        element.style.right = `${currRight + amount}px`;
        console.log(element);
    }
 }

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = () => {
    //const x = Math.floor(Math.random() * window.innerWidth)
    const x = Math.random()*screenY ;
    // const y = ?
    coin.style.top = `${x}px`;
    // coin.style.?? = ??
}

init();

console.log(currRight);