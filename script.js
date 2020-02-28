var characters=["Player 1", "Player 2"]

function match(map){
  var that=this;
  this.players=[];
  this.checkWinner = true;
  
  this.winnerMessage=document.createElement("div");
  this.btnEle=document.createElement("button");
  
 for(var i=0; i<characters.length; i++){
   this.players.push(new character(characters[i], that));
   }
  this.btnEle.innerHTML="Reset";
  this.btnEle.style.display="none";
  
  
document.body.appendChild(this.winnerMessage);
document.body.appendChild(this.btnEle);
  }


function character(name,parent){
  var that=this;
  this.name=name;
  this.nbm=0;
  this.characterEle = document.createElement("div");
  this.nameEle = document.createElement("div");
  this.nbmEle = document.createElement("div");

  this.nameEle.innerHTML=this.name;
  this.nbmEle.innerHTML="Score: " +this.nbm;
  this.characterEle.appendChild(this.nameEle);
  this.characterEle.appendChild(this.nbmEle);
  
    parent.btnEle.addEventListener("click", function(){
   document.body.innerHTML="";
   parent.btnEle.innerHTML="";
   new match();                                
  });
  
  this.characterEle.addEventListener("click", function(){
    if(parent.checkWinner){
    that.nbm=that.nbm+1;
    that.nbmEle.innerHTML="Score: "+that.nbm;
   if(that.nbm==5){
    parent.winnerMessage.innerHTML="The winner is "+that.name;
    parent.checkWinner=false;
    parent.btnEle.style.display= "block";
    }
   } 
  });
  

  
  document.body.appendChild(this.characterEle);
  
}

var match1 = new match();