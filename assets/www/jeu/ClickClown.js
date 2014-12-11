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
        var lesClowns={};
        var compteurFrames = 0;
        var circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        //stage.addChild(new createjs.Shape()).setTransform(100,100).graphics.f("red").dc(0,0,50);
        stage.update();
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
                var clown = spriteclownNoir.animation;
                clown.scaleX = clown.scaleY = stage.width / 3 / 256;
            }

            //creation d'un clown normal
            else if(random == 7 || random == 8) {
                var clownSprite = new SpriteClown("Malade");
                var clown = spriteclownMalade.animation;
                clown.scaleX = clown.scaleY = stage.width /3 / 256;
            }
            else{
                var clownSprite = new SpriteClown("normal");
                var clown = spriteclownNormal.animation;
                clown.scaleX = clown.scaleY = stage.width / 3 / 256;
            }

            //creation d'un clown maladde


        }
        function afficherClown(clown){

            clown.y = -100;
            stage.addChild(clown);
        }

        function enterFrameHandler(event) {
            compteurFrames ++;
            if(((circle.x +50) >= stage.width) || (circle.x - 50) <= 0)
                vitessex = -vitessex;
            if(((circle.y +50) >= stage.height) || (circle.y - 50) <= 0)
                vitessey = -vitessey;
            circle.x += vitessex;
            circle.y += vitessey;
            if(compteurFrames%50==0){

            }
            stage.update();
            // this will log a steadily increasing value:
        }
    }
};