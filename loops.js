// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen... Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================

for (let i = 0; i < 5; i++) {
    const output = "*";
    console.log(output.repeat(i + 1));
}

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================

for (let i = 0; i < 5; i++) {
    if (i < 4) {
        console.log("loop...");
    } else {
        console.log("klaar!");
    }
}

// ==========================================
// Opdracht 3. Maak een for-loop die automatisch factuurnummers genereert in het formaat INV-0001, INV-0002, enzovoorts. Zorg ervoor dat je begint bij nummer 1 en dat de nummers oplopen.
// Er zijn in totaal 8 factuurnummers nodig.

// Verwachte uitkomst:
// 'INV-0001'
// 'INV-0002'
// 'INV-0003'
// 'INV-0004'
// 'INV-0005'
// 'INV-0006'
// 'INV-0007'
// 'INV-0008'

// ==========================================

for (let i = 0; i < 8; i++) {
    console.log(`INV-000${i + 1}`);
}

// ==========================================
// Opdracht 4. Schrijf een for-loop die van 9 tot en met 18 loopt en de uren logt.
// - Bij 10:00 en 14:00 moet de tekst "Koffiepauze!" toegevoegd worden
// - Bij 12:00 moet de tekst "Lunchpauze!" toegevoegd worden
// - Bij 17:00 moet de tekst "Bijna klaar..." toegevoegd worden

// Verwachte uitkomsten:
// 9:00
// 10:00
// 11:00
// 12:00 Lunchpauze!
// 13:00
// 14:00
// 15:00
// 16:00
// 17:00 Bijna klaar...
// 18:00
// ==========================================

for (let i = 9; i < 19; i++) {
    if (i === 10 || i === 14) {
        console.log(`${i}:00 Koffiepauze!`)
    } else if (i === 12) {
        console.log(`${i}:00 Lunchpauze!`)
    } else if (i === 17) {
        console.log(`${i}:00 Bijna klaar...`)
    } else {
        console.log(`${i}:00`)
    }
}

// ==========================================
// Opdracht 5. Maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================

for (let i = 0; i < 10; i++) {
    if (i < 3) {
        console.log(`${i}`)
    } else if (i < 6) {
        console.log(`> ${i}`)
    } else {
        console.log(`>> ${i}`)
    }
}

// ==========================================
// Opdracht 6 (BONUS). Schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz". Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz".

for (let i = 0; i < 100; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
        console.log(`FizzBuzz`)
    } else if ((i + 1) % 3 === 0) {
        console.log(`Fizz`)
    } else if ((i + 1) % 5 === 0) {
        console.log(`Buzz`)
    } else {
        console.log(`${i + 1}`)
    }
}

// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================



