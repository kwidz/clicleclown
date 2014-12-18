/*$("body").html($("#page-jeu").html());
var jeu = new ClickClown();
jeu.jouer();
$("body").html($("#page-accueil").html());
$('a').click( function() { 
//LANCER JEU
return false; } );
$("body").html($("#page-accueil").html());
*/

var scorehtml = $("#page-scores").html();
var jeuhtml = $("#page-jeu").html();
var tutorielhtml = $("#page-tutoriel").html();
var accueilhtml = $("#page-accueil").html();

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
		
		if(!ancre) // 
		{	
			//$("body").html(accueilhtml);
		}
		else if(ancre.match(/^#nouveau-jeu/))
		{	
			//alert('nouveau jeu')
			$("body").html(jeuhtml);
			var jeu = new ClickClown();
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
	}
};

Acceuil.lancer();

