window.addEventListener("load", () =>{
const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".visual");
const colors = [
    "#27ecab",
    "#ff85f5",
    "#b4ff76",
    "#ecce27",
    "#ec5527",
    "#e94863"
];

pads.forEach((pad, index) => {
    pad.addEventListener("click", function(){
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubble(index);
    });
});

const createBubble = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
        visual.removeChild(this);
      });

};

});