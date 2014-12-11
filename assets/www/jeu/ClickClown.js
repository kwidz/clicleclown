var ClickClown = function(){
    var stage = new createjs.Stage("gameCanvas");
    this.jouer = function(){
        function resize_canvas(){
            content = document.getElementById("content");
            canvas = document.getElementById("gameCanvas");
            canvas.width  = content.offsetWidth;
            canvas.height = content.offsetHeight;
            stage.width = canvas.width;
            stage.height = canvas.height;

        }
        resize_canvas();
        var lesClowns=new Array();
        var compteurFrames = 0;
        createjs.Ticker.addEventListener("tick", enterFrameHandler);
        createjs.Ticker.setInterval(25);
        createjs.Ticker.setFPS(60);
        var vitessex = 3;
        var vitessey= 3;

        function creerClown(){
            var position1 = 0;
            var position2 = 256 * stage.width /3/ 256;
            var position3 = 512 * stage.width /3/ 256;
            var random = Math.floor(Math.random()*10)+1;
            if(random == 6) {
                var clownSprite = new SpriteClown("noir");
                var clown = clownSprite.animation;
                clown.scaleX = clown.scaleY = stage.width / 3 / 256;
            }

            //creation d'un clown normal
            else if(random == 7 || random == 8) {
                var clownSprite = new SpriteClown("Malade");
                var clown = clownSprite.animation;
                clown.scaleX = clown.scaleY = stage.width /3 / 256;
            }
            else{
                var clownSprite = new SpriteClown("normal");
                var clown = clownSprite.animation;
                clown.scaleX = clown.scaleY = stage.width / 3 / 256;
            }
            return clown;
            //creation d'un clown maladde


        }
        function afficherClown(clown){

            clown.y = -100;
            stage.addChild(clown);
        }

        function enterFrameHandler(event) {
            compteurFrames ++;
            if(compteurFrames%50==0){
                var clowntmp = creerClown();
                afficherClown(clowntmp);
                lesClowns.push(clowntmp);
            }
            for(i in lesClowns){
                lesClowns[i].y+=8;
            }
            stage.update();
            // this will log a steadily increasing value:
        }
    }
};