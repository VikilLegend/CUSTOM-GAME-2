class Form{

  constructor(){

   this.input = createInput('') 
   this.playButton = createButton('PLAY')
   this.greeting = createElement('h1')
  }
  display(){
  image(backgroundImg,0,0,displayWidth,displayHeight)
  this.input.position(displayWidth/2-100,displayHeight/2)
  this.playButton.position(displayWidth/2-50,displayHeight/2+100)
  this.playButton.mousePressed(
    ()=>{
      this.hiding()
      player.name = this.input.value()
      playerCount +=1;
      console.log(playerCount)
      player.index = player.index+1;
     console.log(player.index)
      player.update()
      player.updateCount(playerCount)
      this.greeting.html("WAIT FOR OTHER PLAYERS TO JOIN")
      this.greeting.position(displayWidth/2-100,displayHeight/2)
    }
  )
  }
  hiding() {
    this.input.hide()
    this.playButton.hide()
  }
}