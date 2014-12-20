var ListeScoreVue = function(liste_score)
{
    this.afficher = function()
    {
        //$("body").html(ListeScoreVue.html);

        var html_liste_score = $("#page-scores");

        var htmlenConstruction = "<ul>";

        //affichage seulement des 5 meilleurs scores

        for(var i in liste_score)
        {
            if(i>=5){
                break;
            }
            var score = liste_score[i];
            htmlenConstruction += "<li>"+liste_score[i].nom+" : "+liste_score[i].score+"</li>"

        }
        htmlenConstruction += "</ul><a href='' id='retour'>retour</a>";

        $("body").html(htmlenConstruction);
    }

    this.afficher();
}
