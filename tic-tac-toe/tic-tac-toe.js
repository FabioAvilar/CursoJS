const SPIELFED_KLASSE = "spielfeld";
const SPIELANZEIGE_KLASSE = "spielanzeige";
const FELD_KLASSE = "feld";
const SPIELER_KLASSE = "spieler";
const GEGNER_KLASSE = "gegner";

const spielfeld = document.querySelector("."+ SPIELFED_KLASSE);
const spielanzeige = document.querySelector("."+ SPIELANZEIGE_KLASSE);

const felder = document.querySelectorAll("."+ FELD_KLASSE);

let aktuelleKlasse;

function klickVerarbeiten(ereignis) {
    // Ermitteln, welches Feld angeklickt wurde
    const feld = ereignis.target;

    // Spielstein auf dieses Feld setzen
    SpielsteinSetzen(feld);
}

function SpielsteinSetzen(feld){
    // Prufen, ob das Feld schon besetzt ist
    if(
        feld.classList.contains(SPIELER_KLASSE) ||
        feld.classList.contains(GEGNER_KLASSE)
    ) {
        // Verhindern, dass ein Spielstein gesetzt wird
        return false;
    }

    // Dem Feld die Klasse des Spielers anhangen, der gerade an der Reihe ist
    feld.classList.add(aktuelleKlasse);
    
    // Das Feld deaktivieren, um weitere Klicks zu verhindern
    feld.disabled = true;
    
    // Signalisieren, dass der spielstein erfolgreich gesetzt wurde
    return true;
}

function spielStarten() {
    // Die Liste der Felder durchgehen
    for (const feld of felder) {
        // Jedem Feld sagen, was beim Klick darauf passieren soll
        feld.addEventListener();
    }

}
