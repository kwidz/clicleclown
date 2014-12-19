
var ScoreDAO = function()
{
    this.liste_score = [];

    this.initialiser = function()
    {
        var SQL_CREATION = "CREATE TABLE IF NOT EXISTS score(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50), score INTEGER)";
        this.baseDeDonnees = window.openDatabase("ListeScore", "1.0", "Liste d scores", 200000);

        this.baseDeDonnees.transaction(
            function(operation)
            {

                var SQL_CREATION = "CREATE TABLE IF NOT EXISTS score(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50), score INTEGER)";
                operation.executeSql(SQL_CREATION);
            },
            this.reagirErreur,
            this.reagirSucces
        );
    }

    this.reagirErreur = function(erreur)
    {

        console.log("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
        //alert("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
    }

    this.reagirSucces = function()
    {

        console.log("SUCCES:SQL:");
        //alert("SUCCES:SQL:");
    }


    this.ajouterScore = function(score)
    {
        this.baseDeDonnees.transaction(
            function(operation)
            {
                var SQL_AJOUT = "INSERT INTO score(nom, score) VALUES(?,?)";
                var parametres = [score.nom, score.pointage];
                operation.executeSql(SQL_AJOUT, parametres);
            },
            this.reagirErreur,
            this.reagirSucces
        );
    }

    this.listerScore = function(finalisation)
    {
        var self = this;

        self.baseDeDonnees.transaction(

            // operation
            function(operation)
            {
                var SQL_SELECTION = "SELECT * FROM score order by score";
                operation.executeSql(SQL_SELECTION, [], function(operation, resultat)
                {
                    self.liste_score = [];
                    for(var position=0; position<resultat.rows.length; position++)
                    {
                        var pointage = resultat.rows.item(position);
                        self.liste_score[self.liste_score.length] = {"nom":score.nom,"score":pointage.score};
                    }
                });
            },

            // erreur
            this.reagirErreur,

            // succes
            function(){
                finalisation(self.liste_score);
            }
        );

    }

    self = this;

    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
        self.initialiser();
    } else {
        this.initialiser();
    }
}


ScoreDAO.instance = new ScoreDAO();

