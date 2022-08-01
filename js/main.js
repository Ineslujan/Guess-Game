// // Le nombre max
// // var max = 20;

// // Le nombre cherché
// // var searchedNumber = Math.round(Math.random() * max);

// Dans un premier temps, regroupement de searchedNumber et de attemps dans l'objet "game"
// Puis j'ai ajouté les min et max dans l'objet mais j'ai du ajouter le searchedNumber plus bas sinon il était undefined (voir "1S")
var game = {
    attemps: 1,
    min: 10,
    max: 20
};

// je crée un tableau pour y insérer chaque partie et le nombre d'essais de chacun
var log = [];
console.log(log)


// Création de la fonction pour pouvoir relancer le jeu
var play = function () {

    // je crée la fonction pour pouvoir définir un nombre aléatoire entre un min et max
    var random = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    // "1S"
    game.searchedNumber = random(game.min, game.max);

    console.log(game)

    // Le nombre saisi
    var enteredNumber = parseInt(prompt('Quel est le nombre à trouver ? (entre 10 et 20)'));

    // // Le nombre d'essais
    // // var attemps = 1;




    // Tant que le nombre saisi n'est pas bon on redemande un nombre
    while (enteredNumber !== game.searchedNumber) {
        // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
        if (enteredNumber < game.searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        }
        else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        // on incrémente le nombre d'essais
        game.attemps += 1;
    }

    // on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
    // on affiche un message de victoire
    // je rajoute le nombre d'essais au tableau "log"
    log.push(game.attemps)
    console.log(log)
    alert('Bravo ! C\'était bien ' + game.searchedNumber + ' - Nombre d\'essais : ' + game.attemps);
    if (confirm("Voulez-vous rejouer ?")) {
        game.attemps = 1
        play();
    }
    else {
        console.log(log)
        for (var i = 0; i < log.length; i++) {
            var alerte = `Partie ${i + 1} : ${log[i]} essais`
            console.log(alerte)
            alert(alerte)
        }
        return
    }


}

play();

