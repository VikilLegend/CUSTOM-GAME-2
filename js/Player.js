class Player{

    constructor() {

        this.name = null
        this.index = 0
        this.distance = 0
    }

    update(){
        var playerIndex="players/player"+this.index
database.ref(playerIndex).set(
    {
        name:this.name
    }
);
    }

    updateCount(playerCount){
database.ref("/").update(
    {
        playerCount:playerCount
    }
);
    }
}