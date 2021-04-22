var semaine = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

function displayArray(){
  alert(['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']);
}

// Parcourir le tableau et afficher toutes les valeurs
for(var i = 0; i < semaine.length; i++){
    document.write(" " + semaine[i] + " ");
}
