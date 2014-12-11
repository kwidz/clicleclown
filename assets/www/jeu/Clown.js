var SpriteClown = function(couleur){
    var couleur = couleur;
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

    this.animation.addEventListener("click", handleClick);
    function handleClick(event){
        if(couleur == "noir")
            alert("perdu");
        else if(couleur == "normal")
            alert("+1 point");
        else
            alert("-5 points");
    }


}