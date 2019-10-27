
class controller{
    constructor(){;
        this.player = { 
            x:0, 
            y:0, 
            travelLog: [],
            lastCommand:[""] 
          };
          this.restart_path(this.player);
        //   this.initialize(this.player);
          
    }
    invalidPath(x,y){
      alert("CUIDADO! Lembre-se de que a lua é plana");
      let atual = document.querySelector(`#x${x}y${y}`);
      atual.innerHTML = '<center><span class="circle"></span></center>';
   }


        // funcao que move o rover para esquerda e direita
    placeHorizontal(command){ 
        let thePlayer = this.player;
        if(thePlayer.x >= 0 && thePlayer.x <= 10){
        let atual = document.querySelector(`#x${thePlayer.x}y${thePlayer.y}`);
        atual.innerHTML = '';

        if(command == "l"){
            if (thePlayer.x == 0) {
                this.invalidPath(thePlayer.x,thePlayer.y);  
            }else{
                console.log(command);
                thePlayer.x-- ;
                let atual = document.querySelector(`#x${thePlayer.x}y${thePlayer.y}`);
                atual.innerHTML = '<center><span> &larr;</span><span class="circle"></span></center>';
            }
        } else {
            if (thePlayer.x == 10) {
                this.invalidPath(thePlayer.x,thePlayer.y);  
            }else{
                console.log(command);
                thePlayer.x++;
                let atual = document.querySelector(`#x${thePlayer.x}y${thePlayer.y}`);
                atual.innerHTML = '<center><span class="circle"></span> <span> &rarr;</span> </center>';
            }
        }
        console.log(`#x${thePlayer.x}y${thePlayer.y}`);
        
        // let newPosition = {x: thePlayer.x, y: thePlayer.y};
        // thePlayer.path.push(newPosition);
        } else {
            console.log("You can't place player outside of the board!");
        }
    }
        // funcao que apenas gira o rover para a esquerda e direita
tplaceHorizontal(command){ 
    let thePlayer = this.player;
    if(thePlayer.x >= 0 && thePlayer.x <= 10){

       if(command == "l"){
            let atual = document.querySelector(`#x${thePlayer.x}y${thePlayer.y}`);
            atual.innerHTML = '<center><span> &larr;</span><span class="circle"></span></center>';
            thePlayer.lastCommand = command;
        } else {
            let atual = document.querySelector(`#x${thePlayer.x}y${thePlayer.y}`);
            atual.innerHTML = '<center><span class="circle"></span> <span> &rarr;</span> </center>';
            thePlayer.lastCommand = command;
        }
       console.log(`#x${thePlayer.x}y${thePlayer.y}`);
       
       // let newPosition = {x: thePlayer.x, y: thePlayer.y};
       // thePlayer.path.push(newPosition);
    } else {
        console.log("You can't place player outside of the board!");
    }
 }
            // funcao que dirige para cima e para baixo
   placeVertical(command){ 
       let thePlayer = this.player;

    if(thePlayer.y >= 0 && thePlayer.y <= 10 ){
        let atual = document.querySelector(`#x${thePlayer.x}y${thePlayer.y}`);
        atual.innerHTML = '';
      if(command == "u"){
          if (thePlayer.y == 0) {
            return this.invalidPath(thePlayer.x,thePlayer.y);  
          }else{
            thePlayer.y--;
            let atual = document.querySelector(`#x${thePlayer.x}y${thePlayer.y}`);
            atual.innerHTML = '<center><span>&uarr;</span><br><span class="circle"></span></center>';
          }
      } else {
          if (thePlayer.y == 10) {
            this.invalidPath(thePlayer.x,thePlayer.y);
          }else{
        thePlayer.y++;
        let atual = document.querySelector(`#x${thePlayer.x}y${thePlayer.y}`);
        atual.innerHTML = '<center><span class="circle"><br></span><span>&darr;</span></center>';
          }
      }
  
      console.log(`#x${thePlayer.x}y${thePlayer.y}`);
  
      let newPosition = {x: thePlayer.x, y: thePlayer.y};
  
      thePlayer.path.push(newPosition); 
    } else {
      console.log("Youuuuu can't place player outside of the board!");
    }
  }
            // funcao que gira o rover para cima ou para baixo
tplaceVertical(command){ 
    let thePlayer = this.player;

    if(thePlayer.y >= 0 && thePlayer.y <= 10 ){
        if(command == "u"){
            let atual = document.querySelector(`#x${thePlayer.x}y${thePlayer.y}`);
            atual.innerHTML = '<center><span>&uarr;</span><br><span class="circle"></span></center>';
            thePlayer.lastCommand = command;
        } else {
            let atual = document.querySelector(`#x${thePlayer.x}y${thePlayer.y}`);
            atual.innerHTML = '<center><span class="circle"><br></span><span>&darr;</span></center>';
            thePlayer.lastCommand = command;
        }

        // console.log(`#x${thePlayer.x}y${thePlayer.y}`);

        let newPosition = {x: thePlayer.x, y: thePlayer.y};

        thePlayer.path.push(newPosition); 
        } else {
            console.log("Youuuuu can't place player outside of the board!");
        }
    }
forward(){
    let thePlayer = this.player;
    switch (thePlayer.lastCommand) {
        case "l":
            console.log("ultimo comando "+thePlayer.lastCommand);
            this.placeHorizontal("l");
            break;
        case "r":
            console.log("ultimo comando "+thePlayer.lastCommand);
            this.placeHorizontal("r");
            break;
        case "u":
            console.log("ultimo comando "+thePlayer.lastCommand);
            this.placeVertical("u");
            break;
        case "d":
            console.log("ultimo comando "+thePlayer.lastCommand);
            this.placeVertical("d");
            break;
    
        default:
            break;
    }

}
  
   command(order){

    let thePlayer = this.player;
      switch(order){
        case 97: // left
        // console.log("esquerda");
          this.tplaceHorizontal("l");
          break;
        case 100: // right
        // console.log("direita");
        this.tplaceHorizontal("r");
          break;  
        case 119: // up
        // console.log("cima");
        this.tplaceVertical("u");
          break; 
        case 115: // down
        // console.log("baixo");
          this.tplaceVertical("d");
          break;
        case 13: // down
            // console.log("baixo");
            this.forward("d");
          break;
        default:
         alert("nosso rover AINDA nao sabe dar cambalhotas, tente outra tecla! " + order);
        break;
      
    }
    // console.log(thePlayer.path);
  }
  
   restart_path(player){
    player.y = 0;
    player.x = 0;
    let atual = document.querySelector(`#x${this.player.x}y${this.player.y}`);
    atual.innerHTML = '<center><span class="circle"></span></center>';
    console.log(atual);
    
  }
  

}
