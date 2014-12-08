var ClickClown = function(){
    this.jouer = function(){
        function resize_canvas(){
            content = document.getElementById("content");
            canvas = document.getElementById("gameCanvas");
            canvas.width  = content.offsetWidth;
            canvas.height = content.offsetHeight;

        }
        resize_canvas();
        var stage = new createjs.Stage("gameCanvas");
        var circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        //stage.addChild(new createjs.Shape()).setTransform(100,100).graphics.f("red").dc(0,0,50);
        stage.update();
    }
};