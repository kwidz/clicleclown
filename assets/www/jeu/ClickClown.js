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
            //creation d'un clown noir
            var spriteclownNoir = new SpriteClown("noir");
            var clownNoir = spriteclownNoir.animation;
            clownNoir.x = 0;
            clownNoir.y = 0;
            clownNoir.scaleX = clownNoir.scaleY = stage.width /4/ 256;
            stage.addChild(clownNoir);

            //creation d'un clown normal
            var spriteclownNormal = new SpriteClown("normal");
            var clownNormal = spriteclownNormal.animation;
            clownNormal.x = 0
            clownNormal.y = 0;
            clownNormal.scaleX = clownNormal.scaleY = stage.width /4/256;
            stage.addChild(clownNormal);

            //creation d'un clown maladde
            var spriteclownMalade = new SpriteClown("Malade");
            var clownMalade = spriteclownMalade.animation;
            clownMalade.x = 0;
            clownMalade.y = 0;
            clownMalade.scaleX = clownMalade.scaleY = stage.width /4 / 256;
            stage.addChild(clownMalade);
        }
        function afficherClown(){

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