

var age = prompt('Quel âge avez-vous ? (en années)');
if(!age)
   alert('Vous devez entrez votre âge');
else
{
   if(age >= 18)
      alert('Vous êtes majeur');
   else
      alert('T\'es mineur');
}

var plat = prompt("Quel est votre plat préféré ?");
switch(plat)    // debut du switch
{
        case "frites":  // si c'est les frites ...
                alert("C'est classique...");    // ... on affiche ce message...
                break;  // ... et on sort du switch.
                
        case "hamburger":
                alert("Yeah, do you come from the USA ?!");
                break;
                
        // on ne met pas de "break" entre les deux, pour afficher le meme message
        case "lasagnes":
        case "pizza":
                alert("Monsieur est italien ?");
                break;
                
        default:        // si c'est un autre plat
                alert("Je ne connais pas ce plat...");
                break;
}
