// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

let totalCumLaude = 0

for (let i = 0; i < grades.length; i++) {


    if (grades[i] >= 8) {
        totalCumLaude = totalCumLaude + 1

    }
}
console.log("Het uitkomst van vraag 1a is: " + totalCumLaude);

// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
const grades2 = [6, 4, 5];
const grades3 = [8, 9, 4, 6, 10];


function cumlaude (grade) {
    let totalCumLaude = 0

    for (let i = 0; i < grade.length; i++) {


        if (grade[i] >= 8) {
            totalCumLaude = totalCumLaude + 1

        }
    }
    console.log("het aantal cumlaudes in cijferlijst van ("+ grade + ") geeft " + totalCumLaude);
}

cumlaude(grades);
cumlaude([6, 4, 5]);
cumlaude([8, 9, 4, 6, 10]);


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?

// const sum = grades delen door grades.lenght+1

// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?

// total sum of array    and     length of array +1

// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143
let totalSum = 0

function averageGrade () {

    for (let i = 0; i < grades.length; i++) {

       totalSum = totalSum + grades[i]

    }
    return totalSum/grades.length
}
console.log("Het uitkomst van 2a is: " + averageGrade());


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.



function averageGrade2 (grade) {

    let totalSum2 = 0

    for (let i = 0; i < grade.length; i++) {

        totalSum2 = totalSum2 + grade[i]

    }
    return totalSum2/grade.length;
}
console.log("Het gemiddelde van AvarageGrade(" + grades + ") geeft " + averageGrade2(grades));
console.log("Het gemiddelde van AverageGrade(" + [6, 4, 5] + ") geeft " + averageGrade2([6, 4, 5]));
console.log("Het gemiddelde van AveragGrade(" + [8,9,4,6,10] + ") geeft " + averageGrade2([8, 9, 4, 6, 10]));



// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

// const roundedGrades = Math.round(averageGrade2(grades)*100)/100;
//
console.log("Gemiddelde eindcijfer afgerond op 2 decimalen van " + grades + " is: " + Math.round(averageGrade2(grades)*100)/100);
console.log("Gemiddelde eindcijfer afgerond op 2 decimalen van " + [6, 4, 5] + " is: " + Math.round(averageGrade2([6, 4, 5])*100)/100);
console.log("Gemiddelde eindcijfer afgerond op 2 decimalen van " + [8,9,4,6,10] + " is: " + Math.round( averageGrade2([8,9,4,6,10])*100)/100);


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

function highestGrade () {
    let highestGrade = 0;

    for (let i = 0; i < grades.length; i++) {


        if (grades[i] > highestGrade) {
        highestGrade = grades[i]
        }

    }
    return highestGrade
}

console.log("Het hoogste cijfer voor " + grades + " in opgave 3a is: " + highestGrade());


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGrade2 (grade) {

    let highestGrade = 0;

    for (let i = 0; i < grade.length; i++) {


        if (grade[i] > highestGrade) {
            highestGrade = grade[i]

        }

    }
    return highestGrade
}

console.log("Het hoogste cijfer voor " + grades + " in opgave 3b is: " + highestGrade2(grades));
console.log("Het hoogste cijfer voor " + [6, 4, 5] + " in opgave 3b is: " + highestGrade2([6, 4, 5]));
console.log("Het hoogste cijfer voor " + [8, 9, 4, 6, 10] + " in opgave 3b is: " + highestGrade2([8, 9, 4, 6, 10]));


// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
