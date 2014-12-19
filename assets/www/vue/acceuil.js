
var scorehtml = $("#page-scores").html();
var jeuhtml = $("#page-jeu").html();
var tutorielhtml = $("#page-tutoriel").html();
var accueilhtml = $("#page-accueil").html();
var jeuPerduhtml = $("#page-game-over").html();
var jeuPerduhtml2 = $("#page-game-over2").html();
var jeu=new ClickClown();
$("body").html($("#page-accueil").html());



var Acceuil = {



	lancer:function()
	{			

		$(window).on('hashchange', $.proxy(this.naviguer, this));
		
		this.naviguer();
	},
	
	// Se base sur window.location.hash
	naviguer:function()
	{
		//alert('nouveau jeu');
		//alert("naviguer selon " + window.location.hash);
		var ancre = window.location.hash;
		
		if(!ancre || ancre.match(/^#acceuil/)) //
		{	
			$("body").html(accueilhtml);
		}
		else if(ancre.match(/^#nouveau-jeu/))
		{	
			//alert('nouveau jeu')
            delete jeu;
			$("body").html(jeuhtml);
			jeu = new ClickClown();
			jeu.jouer();
		}
		else if (ancre.match(/^#scores/))
		{
			$("body").html(scorehtml);
		}
		else if (ancre.match(/^#tutoriel/))
		{
			$("body").html(tutorielhtml);
		}
        else{
            $("body").html(jeuPerduhtml);
            var trouvailles = ancre.match(/^#defaite\/(-*[0-9]+)/);
            var score = trouvailles[1];
            $("#affichage-score").html("Votre score : "+score);
            $("#soummettre").click(function(){
                if($("#nom").val()!='') {
                    var nom = $("#nom").val();
                    var pointage = new Score(nom, score);
                    var dao = new ScoreDAO();
                    dao.ajouterScore(pointage);
                    $("body").html(jeuPerduhtml2);
                }
                else{
                    alert("veuillez entrer un nom !");
                }
            });

        }
	}
};

Acceuil.lancer();

