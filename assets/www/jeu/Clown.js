SpriteClown = function(couleur, supprimer){
    this.supprimer = supprimer;
    this.couleur = couleur;
    this.data = {
        images: ["img/SpriteSheetClown.png"],
        frames: {width:256, height:256},
        animations: {normal:[0],noir:[1],malade:[2]}
    };

    this.spriteSheet = new createjs.SpriteSheet(this.data);

    if(this.couleur == "noir")
        this.animation = new createjs.Sprite(this.spriteSheet, "noir");
    else if (this.couleur == "normal")
        this.animation = new createjs.Sprite(this.spriteSheet, "normal");
    else
        this.animation = new createjs.Sprite(this.spriteSheet, "malade");

    this.animation.addEventListener("click", handleClick);
    var self = this;

    function handleClick(event) {

        if (couleur == "noir")
            alert("perdu");
        else if (couleur == "normal") {
            self.detruire();
            self.supprimer(self);
        }
        else {
            self.detruire();
            self.supprimer(self);
        }
    }

    this.detruire = function(){
        this.animation.removeAllEventListeners();
    }




}