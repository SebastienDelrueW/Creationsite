let aujourdhui = new Date();
let annee = aujourdhui.getFullYear(); // retourne le millésime
let mois = aujourdhui.getMonth() + 1; // date.getMonth retourne un entier entre 0 et 11 donc il faut ajouter 1
let jour = aujourdhui.getDate(); // retourne le jour (1 à 31)
let joursemaine = aujourdhui.getDay(); // retourne un entier compris entre 0 et 6 (0 pour dimanche)
let tab_jour = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
document.write('Nous sommes le : ' + tab_jour[joursemaine] + ' ' + jour + '/' + mois + '/' + annee);


window.addEventListener('load', horloge);

function horloge() {
    let d = new Date();
    document.getElementById('heure').innerHTML = d.toLocaleTimeString();
    setTimeout(horloge, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    let cache = document.getElementById('bouton');
    cache.addEventListener('click', cacheHorloge);
    document.getElementById('tog').style.display = 'block';

    function cacheHorloge() {
        let para = document.getElementById('tog');
        if (para.style.display == 'block') {
            para.style.display = 'none';
        } else {
            para.style.display = 'block';
        }
    }
});