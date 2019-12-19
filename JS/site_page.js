/*******************
  Syntaxe de base
 * **************/
//  1.Je vérifie toujours que ma page js et mon fichier hyml sont connectés :
// alert('Okay JS');

// deux slashes pour un commentaire sur la ligne (ctrl + /)
/*
(shift + alt+a)
ici un commentaire sur plusieurs lignes

*/

/*
2 manières d'afficher une boite de dialogue :

 => alert('Super, tu es arrivée sur mon site !')
 => prompt('Question : on est quel jour ?'); avec la fonction prompt je dialogue directement avec l'utilisateur */


// alert('quel est ton nom ?JS');
 
var prenom = prompt('quel est ton Prénom ?');
var nom = prompt('quel est ton Nom ?');

alert('Bonjour' + "" + prenom + "" + nom);

