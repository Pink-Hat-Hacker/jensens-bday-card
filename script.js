var audio = new Audio('letsDance.mp3');

document.getElementById("orb").addEventListener("click", function(){
    changeToNight();
    
    
});

function changeToNight(){
    if(document.getElementById("orb").className == "sun"){
        audio.play();
        document.getElementById("sky").className = "night";
        document.getElementById("orb").className = "moon";
        
    }
    else if(document.getElementById("orb").className == "moon"){
        
        document.getElementById("sky").className = "day";
        document.getElementById("orb").className = "sun";
        audio.pause();
    }
}
/*
<!--THIS IS A BDAY CARD FOR A FRIEND BECAUSE THEY AREN'T 
HERE. I CAN'T FIGURE OUT HOW TO MAKE THE SONG PLAY.
I THINK IT MIGHT BE BECAUSE IM CLICKING THE IMAGE -- NOT 
THE SUN OR MOON. BUT THOSE ARE STILL THE CLASSES. SO IM NOT
SURE-->*/