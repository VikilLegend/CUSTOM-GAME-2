var boat,backgroundImg,boatImg,game,gameState,form
var player,playerCount=0,allPlayers,database
function preload() {

  boatImg = loadImage("assets/boat.jpg")
backgroundImg = loadImage("assets/background.png")
}

function setup() {
createCanvas(displayWidth,displayHeight)
database=firebase.database()

database.ref("/").set({
gameState:0,
playerCount:0
})
game = new Game()
game.getState()
game.start()
}

function draw() {

}