class Game{

  constructor() {


  }

  start() {
form = new Form()
form.display()
if(gameState===0) {

  player = new Player()
}
  }

  play() {

  }

  end(){

  }

  getState(){
database.ref("gameState").on('value',function(data){
 gameState= data.val()
})




  }
}