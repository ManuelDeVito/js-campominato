// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer deve generare 16 numeri casuali.
var mine = [];
var numero_mine = 16;
var numero_minimo = 1;
var numero_massimo = 100;
var tentativi_massimi = numero_massimo - numero_mine;

// Creo un ciclo while che se finchè i numeri dentro il mio array non sono 16 deve andare avanti.
while (mine.length < numero_mine){
// Genero dei numeri casuali tra 1 e 100.
    var numero_random = getRndInteger(numero_minimo, numero_massimo);
// Controllo se i numeri random non sono già presenti dentro il mio array.
    var numeri_estratti = mine.includes(numero_random);
// Se i numeri random non sono già contenuti dentro il mio array li stampo all'interno di esso.
    if (numeri_estratti == false) {
        mine.push(numero_random);
    }

}

// Stampo il contenuto del mio array e controllo che ci siano 16 numeri tutti diversi.
console.log(mine);

var numeri_utente = [];
var giocate = 0;
var is_mina = false

do {

// Chiedo all'utente di inserire un numero compreso tra 1 e 100.
    var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
    console.log(numero_utente);
// Verifico che il numero sia un numero e che sia maggiore o uguale a 1 e minore o uguale a 100.
    if (isNaN(numero_utente) == false && numero_utente >= numero_minimo && numero_utente <= numero_massimo) {

// Verifico se i numeri digitati dall'utente sono già inclusi nell'array.
        var numeri_utente_estratti = numeri_utente.includes(numero_utente);

// Se i numeri estratti non sono stati digitati dall'utente allora li inserisco nell'array.
        if (numeri_utente_estratti == false) {
// false equivale a 'NON è PRESENTE' tra i numeri dell'array lo stampo dentro esse.
            numeri_utente.push(numero_utente);
// Incremento la giocata.
            giocate++;
// Se il numero utente non si trova nelle mine schiva la mina altrimenti la prende.
            is_mina = mine.includes(numero_utente);
            if (is_mina == false) {
                console.log('Non hai preso una mina');
            }else {
                console.log('Hai preso una mina');
            }
        }else {
            alert('Hai gia inserito questo numero');
        }
    } else {
        alert('Non hai inserito un numero valido');
    }
//


// Finchè il numero utente non corrisponde a una mina e il massimo dei tentativi non è concluso.
} while (is_mina == false && giocate < tentativi_massimi);

console.log('Il numero delle giocate effettuate è = ' + giocate);
console.log(numeri_utente);

// Se il numero di tentativi massimi è concluso e non hai preso una mina.
if (is_mina == false) {
    console.log('Complimenti! Hai vinto! :)');
} else {
    console.log('Hai preso una mina. Game Over! :(');
}

// Funzione generica per generare numeri random.
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;

}
