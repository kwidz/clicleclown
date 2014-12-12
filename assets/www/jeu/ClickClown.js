var ClickClown = function(){
    var stage = new createjs.Stage("gameCanvas");
    var vitesse = 3;
    var score = 0;
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
        createjs.Ticker.setFPS(40);
        var vitessex = 3;
        var vitessey= 3;
        var clownASupprimer = "h";
        function supprimerUnClown(unClown){
            stage.removeChild(unClown.animation);
            if(unClown.couleur=="Malade"){
                score-=5;
            }
            else if(unClown.couleur=="normal"){
                score +=1;
            }
            clownASupprimer = lesClowns.indexOf(unClown);
            console.log("#########################"+score+"######################");

        }
        function perdre(){
            alert("Perdu !\n"+"Score : "+score);
        }
        function creerClown(){

            var position1 = 0;
            var position2 = 256 * stage.width /3/ 256;
            var position3 = 512 * stage.width /3/ 256;
            var random = Math.floor(Math.random()*10)+1;
            if(random == 6) {
                var clownSprite = new SpriteClown("noir",supprimerUnClown, perdre);
                var clown = clownSprite.animation;
                clown.scaleX = clown.scaleY = stage.width / 3 / 256;
            }

            //creation d'un clown normal
            else if(random == 7 || random == 8) {
                var clownSprite = new SpriteClown("Malade", supprimerUnClown, perdre);
                var clown = clownSprite.animation;
                clown.scaleX = clown.scaleY = stage.width /3 / 256;
            }
            else{
                var clownSprite = new SpriteClown("normal",supprimerUnClown, perdre);
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
            if(compteurFrames%1000==0){
                vitesse++;
            }
            if(compteurFrames%(Math.round((256*stage.width /3 / 256)/vitesse))==0){

                var clowntmp = creerClown();
                afficherClown(clowntmp.animation);
                lesClowns.push(clowntmp);

            }
            var index = "h";
            for(i in lesClowns){

                lesClowns[i].animation.y+=vitesse;
                if ((lesClowns[i].animation.y > stage.height)){
                    if(lesClowns[i].couleur=="normal"){
                        perdre();

                    }
                    lesClowns[i].detruire();
                    stage.removeChild(lesClowns[i]);
                    index = i;
                }
            }
            if(index!="h"){

                var tmp = lesClowns.splice(index,1);
                delete tmp;
                index = "h";
            }

            if(clownASupprimer!="h"){


                var tmp = lesClowns.splice(clownASupprimer,1);
                delete tmp;
                clownASupprimer="h";
               // alert("supprimé");
            }
            stage.update();
            // this will log a steadily increasing value:
        }


    }
};