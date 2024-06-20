let keysW =document.querySelectorAll(".white .keys");
let keysB =document.querySelectorAll(".black .keys");
let piano_vol=1;
keysW.forEach((key)=>{
    let keyVal = key.innerText.toLowerCase();
    key.addEventListener("click" , ()=>{
        let tune = new Audio(`tunes/${keyVal}.wav`);
        tune.volume=piano_vol;
        tune.play();
    })
    key.addEventListener("mouseover" , ()=>{
            let tune = new Audio(`tunes/${keyVal}.wav`);
            tune.volume=piano_vol;
            tune.play();
        })
    document.addEventListener("keydown" , e =>{
        if(e.key === `${keyVal}`){
            let tune = new Audio(`tunes/${keyVal}.wav`);
            tune.volume=piano_vol;
            tune.play();
        }  
    })  
})
keysB.forEach((key)=>{
    let keyVal = key.innerText.toLowerCase();
    key.addEventListener("click" , ()=>{
        let tune = new Audio(`tunes/${keyVal}.wav`);
        tune.volume=piano_vol;
        tune.play();
    })
    key.addEventListener("mouseover" , ()=>{
            let tune = new Audio(`tunes/${keyVal}.wav`);
            tune.volume=piano_vol;
            tune.play();
        })
    document.addEventListener("keydown" , e =>{
        if(e.key === `${keyVal}`){
            let tune = new Audio(`tunes/${keyVal}.wav`);
            tune.volume=piano_vol;
            tune.play();
        }  
    })      
})
let hidden = document.querySelector(".box2");
let hicon = document.querySelector(".functions i");
let htext = document.querySelector("p");
let keysw =document.querySelector(".white");
let keysb =document.querySelector(".black");
let Bool = true;
hidden.addEventListener("click",()=>{
    if(Bool === true){
        hicon.classList.remove("fa-eye");
        hicon.classList.add("fa-eye-slash");
        htext.innerText="Unhide Keys";
        keysb.classList.remove("whte");
        keysb.classList.add("blck");
        keysw.classList.remove("blck");
        keysw.classList.add("whte");
        Bool = false;
    }else{
        hicon.classList.remove("fa-eye-slash");
        hicon.classList.add("fa-eye");
        htext.innerText="Hide Keys";
        keysb.classList.remove("blck");
        keysb.classList.add("whte");
        keysw.classList.remove("whte");
        keysw.classList.add("blck");
        Bool = true;
    }      
})

let vols = document.querySelector("#vol");
vols.value=100;
let vol_per = document.querySelector(".vol-per");
vols.addEventListener("click",()=>{
    vol_per.innerText=vols.value;
    piano_vol=vols.value/100;
    if(vols.value == 0){
        vol_icon.classList.remove("fa-volume-high");
        vol_icon.classList.add("fa-volume-xmark");
    }else{
        vol_icon.classList.remove("fa-volume-xmark");
        vol_icon.classList.add("fa-volume-high");
    }
})

let vol_icon = document.querySelector(".volume i");
let Bool1 = true;
vol_icon.addEventListener("click",()=>{
    if(Bool1 === true){
        vol_icon.classList.remove("fa-volume-high");
        vol_icon.classList.add("fa-volume-xmark");
        vols.value=0;
        piano_vol=vols.value/100;
        vol_per.innerText=vols.value;
        Bool1 = false;
    }else{
        vol_icon.classList.remove("fa-volume-xmark");
        vol_icon.classList.add("fa-volume-high");
        vols.value=100;
        piano_vol=vols.value/100;
        vol_per.innerText=vols.value;
        Bool1 = true;
    }
})

