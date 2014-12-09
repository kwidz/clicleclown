var SpriteClown = function(couleur){
    var data = {
        images: ["img/SpriteSheetClown.png"],
        frames: {width:256, height:256},
        animations: {normal:[0],noir:[1],malade:[2]}
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    if(couleur == "noir")
        this.animation = new createjs.Sprite(spriteSheet, "noir");
    else if (couleur == "normal")
        this.animation = new createjs.Sprite(spriteSheet, "normal");
    else
        this.animation = new createjs.Sprite(spriteSheet, "malade");


}