var ClickClown = function(){
    var stage = new createjs.Stage("gameCanvas");
    var vitesse = 3;
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
        var clownASupprimer = "";
        function supprimerUnClown(unClown){
            stage.removeChild(unClown.animation);
            clownASupprimer = lesClowns.indexOf(unClown);

        }
        function creerClown(){

            var position1 = 0;
            var position2 = 256 * stage.width /3/ 256;
            var position3 = 512 * stage.width /3/ 256;
            var random = Math.floor(Math.random()*10)+1;
            if(random == 6) {
                var clownSprite = new SpriteClown("noir",supprimerUnClown);
                var clown = clownSprite.animation;
                clown.scaleX = clown.scaleY = stage.width / 3 / 256;
            }

            //creation d'un clown normal
            else if(random == 7 || random == 8) {
                var clownSprite = new SpriteClown("Malade", supprimerUnClown);
                var clown = clownSprite.animation;
                clown.scaleX = clown.scaleY = stage.width /3 / 256;
            }
            else{
                var clownSprite = new SpriteClown("normal",supprimerUnClown);
                var clown = clownSprite.animation;
                clown.scaleX = clown.scaleY = stage.width / 3 / 256;
            }
            //creation d'un clown maladde
            var random2 = Math.floor(Math.random()*3)+1;
            if(random2==1){
                clown.x=position1;
            }
            else if(random2==2){
                clown.x=position2;
            }
            else
                clown.x=position3;
            return clownSprite;


        }
        function afficherClown(clown){

            clown.y = 0- (256 * (stage.width / 3 / 256));

            stage.addChild(clown);
        }

        function enterFrameHandler(event) {
            compteurFrames ++;
            //alert(Math.round((256*stage.width /3 / 256)/vitesse)) ;
            if(compteurFrames%(Math.round((256*stage.width /3 / 256)/vitesse))==0){

                var clowntmp = creerClown();
                afficherClown(clowntmp.animation);
                lesClowns.push(clowntmp);

            }
            var index = "";
            for(i in lesClowns){

                lesClowns[i].animation.y+=vitesse;
                if ((lesClowns[i].animation.y > stage.height)){
                    if(lesClowns[i].couleur=="normal"){
                        //alert("perdu");
                        //console.log("perdu");
                    }
                    stage.removeChild(lesClowns[i]);
                    lesClowns[i].detruire();
                    index = i;

                }

            }
            if(index!=""){
                lesClowns.splice(index,1);
                index = "";
            }
            if(clownASupprimer!=""){
                //alert(clownASupprimer);
                lesClowns.splice(clownASupprimer,1);
                clownASupprimer="";
            }
            stage.update();
            // this will log a steadily increasing value:
        }


    }
};