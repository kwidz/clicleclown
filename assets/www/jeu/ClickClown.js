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
        var spriteclownNoir = new SpriteClown("noir");
        var clownNoir = spriteclownNoir.animation;
        clownNoir.x = 100;
        clownNoir.y = 100;
        stage.addChild(clownNoir);

        var spriteclownNormal = new SpriteClown("normal");
        var clownNormal = spriteclownNormal.animation;
        stage.addChild(clownNormal);

        var spriteclownMalade = new SpriteClown("Malade");
        var clownMalade = spriteclownMalade.animation;
        stage.addChild(clownMalade);

        function enterFrameHandler(event) {
            if(((circle.x +50) >= stage.width) || (circle.x - 50) <= 0)
                vitessex = -vitessex;
            if(((circle.y +50) >= stage.height) || (circle.y - 50) <= 0)
                vitessey = -vitessey;
            circle.x += vitessex;
            circle.y += vitessey;
            stage.update();
            // this will log a steadily increasing value:
        }
    }
};