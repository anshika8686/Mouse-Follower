const mouseFollower=document.querySelector(".mouse-follower")
let x=0
let y=0
document.addEventListener("mousemove",(e)=>{
    const {clientX, clientY}=e
    console.log(clientX,clientY);
    // mouseFollower.style.top=clientY+"px";
    // mouseFollower.style.left=clientX+"px"; not cpu efficient
    x=clientX,y=clientY;
   
})

function far(){
     mouseFollower.style.transform=`translate(${x}px,${y}px)`
     requestAnimationFrame(far)


    }
    far()