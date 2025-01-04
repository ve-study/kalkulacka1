// Funkce pro provedení výpočtu
function vypocet(operace) {
    // Načtení hodnot z inputů
    const vstup1 = document.getElementById("vstup1").value;
    const vstup2 = document.getElementById("vstup2").value;
    const vysledekDiv = document.getElementById("vysledek");

    // Převod vstupů na čísla
    const cislo1 = parseFloat(vstup1);
    const cislo2 = parseFloat(vstup2);

    // Kontrola, zda jsou vstupy platná čísla
    if (isNaN(cislo1) || isNaN(cislo2)) {
        vysledekDiv.textContent = "Prosím zadejte platná čísla!";
        return; // Ukončí funkci, pokud nejsou čísla platná
    }

    // Výpočet podle zvolené operace
    let vysledek;
    switch (operace) {
        case "+":
            vysledek = cislo1 + cislo2;
            break;
        case "-":
            vysledek = cislo1 - cislo2;
            break;
        case "*":
            vysledek = cislo1 * cislo2;
            break;
        case "/":
            if (cislo2 === 0) { // Ošetření dělení nulou
                vysledekDiv.textContent = "Nelze dělit nulou!";
                return;
            }
            vysledek = cislo1 / cislo2;
            break;
        default:
            vysledekDiv.textContent = "Neplatná operace!";
            return;
    }

    // Zobrazení výsledku
    vysledekDiv.textContent = "Výsledek: " + vysledek;
}

// Přidání posluchačů událostí na tlačítka
document.getElementById("tlPlus").addEventListener("click", function () {
    vypocet("+");
});
document.getElementById("tlMinus").addEventListener("click", function () {
    vypocet("-");
});
document.getElementById("tlKrat").addEventListener("click", function () {
    vypocet("*");
});
document.getElementById("tlDeleno").addEventListener("click", function () {
    vypocet("/");
});