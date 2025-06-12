let currMoleTile;
let currPlantTile;//help us keep a traack of which tile has the mole 
let score=0;
let gameOver=false;

window.onload=function(){
    setGame();  
}
function setGame(){
    for(let i=0;i<9;i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
   setInterval(setMole,1000); //1000 milli sec the mole is gonna be called 
   setInterval(setPlant,2000); //2000 milli sec the mole is gonna be called 
}
function getRandomTile(){
    let num=Math.floor(Math.random()*9);
    return num.toString();
}
function setMole(){
    if(gameOver){
        return;
    }

    if(currMoleTile){
        currMoleTile.innerHTML= "";

    }

    let mole=document.createElement("img");
    mole.src="./montymole.png";

    let num=getRandomTile();
    if(currPlantTile && currPlantTile.id==num){
        return;

    }
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);//take a random tile and addd the img tag in it 

}
function setPlant(){
    if(gameOver){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML="";
    }

    let plant=document.createElement("img");
    plant.src="./plant.png";

    let num=getRandomTile();
    if(currMoleTile&&currMoleTile.id==num){
        return;
    }
    currPlantTile=document.getElementById(num);
    currPlantTile.appendChild(plant);//take a random tile and addd the img tag in it 

}
function selectTile(){
    if(gameOver){
        return;
    }
    if(this==currMoleTile){
        score+=10;
        document.getElementById("score").innerText=score.toString();//updates teh score

    }else if(this==currPlantTile){
        document.getElementById("score").innerText="GAME OVER: "+score.toString();
        gameOver=true;
    }
}