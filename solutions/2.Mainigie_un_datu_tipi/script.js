// JavaScript vienas rindas komentāru atzīmē ar diviem slīpsvītrām:
// Piemēram:
// console.log("Šī rinda ir komentēta un netiks izpildīta");

// Var izveidot arī vairākrindu komentārus, tekstu ietverot starp /* un */:
/*
Šis ir vairākrindu komentārs.
Šeit var rakstīt vairākas rindas.
*/

// 2. tēma: sāc darbu šeit ⤵
console.log("2. tēma: sāc darbu šeit ⤵");

// --------------------------------------------
// 1. Kas ir mainīgie un kāpēc tos izmantojam?
// Mainīgie ir kā konteineri, kuros glabā informāciju (datus).
// Tos izmanto, lai saglabātu vērtības un vēlāk kodā tās izmantotu vai mainītu.

// Piemērs:
// let myName = "Jānis"; // Šeit 'myName' ir mainīgais, kas satur virkni "Jānis"
// console.log(myName); // Konsolē izdrukāts: Jānis

// --------------------------------------------
// 2. Mainīgo deklarēšana: let, const, var

// 'let' izmanto mainīgajiem, kuru vērtību vēlāk var mainīt.
// Piemērs:
// let age = 25;
// age = 58; // Tas ir atļauts, jo 'age' deklarēts ar let

// 'const' izmanto mainīgajiem, kuru vērtību pēc piešķiršanas nedrīkst mainīt.
// Piemērs:
// const birthYear = 1998;
// birthYear = 1999; // Tas izraisīs kļūdu, jo 'birthYear' ir konstants

// 'var' ir vecāks veids mainīgo deklarēšanai; tas uzvedas citādi, tāpēc mūsdienu kodā to parasti neizmanto.
// Piemērs:
// var city = "Rīga";
// city = "Daugavpils";

// --------------------------------------------
// 3. Datu tipi JavaScript

// Virkne (string): teksta dati pēdiņās
// let greeting = "Sveiki!";

// Skaitlis (number): skaitliskas vērtības (veseli vai decimāli)
// let score = 100;
// let temperature = 36.6;

// Loģiskā vērtība (boolean): true vai false
// let isStudent = true;

// null: apzīmē “nav vērtības” jeb “tukšs”
// let emptyValue = null;

// undefined: mainīgais deklarēts, bet vēl nav piešķirta vērtība
// let notDefined;
// console.log(notDefined); // Izdrukā: undefined

// mainīgo nosaukumu pieraksts - camelCase, snake_case, PascalCase

// Objekts: saistītu datu kopa (atslēga–vērtība pāri)
// let person = {
//   name: "Anna",
//   age: 30,
//   school: {
//     name: "TRVG",
//     averageGrade: 7,
//   },
// };

// console.log(person.school.name); // Izdrukā: Anna
// const schoolName = person.school.name;

// --------------------------------------------
// 4. Darbības

// Saskaitīšana (+)
// let sum = 5 + 3;

// Atņemšana (-)
// let difference = 10 - 4;

// Reizināšana (*)
// let product = difference * 7;

// Dalīšana (/)
// let quotient = 20 / 5;

// console.log("Rezultāti: ", sum, difference, product, quotient);

// Atlikums (%)
// let remainder = 20 % 7;
// console.log(remainder);
// Atlikumu pielieto, lai noteiktu skaitļu paritāti vai, piemēram,
// cikliska vērtību maiņu atkarībā no skaitļa pieaugšanas

// Math.round() - noapaļo līdz tuvākajam veselam skaitlim
// let rounded = Math.round(4.7); // 5
// let rounded2 = Math.round(4.3); // 4

// Math.floor() - noapaļo uz leju
// let floored = Math.floor(4.9); // 4
// let floored2 = Math.floor(-2.1); // -3

// Math.ceil() - apaļo uz augšu
// let ceiled = Math.ceil(4.1); // 5
// let ceiled2 = Math.ceil(-2.9); // -2

// Math.random() - atgriež skaitli starp 0 un 1
// ================================================
// let random = Math.random();
// console.log(random * 1000);
// ===============================================

// Virkņu savienošana (+)
// let firstName = "Jānis";
// let lastName = "Bērziņš";
// let fullName = firstName + " Pēteris " + lastName; // "Jānis Bērziņš"
// let fullName2 = `${firstName} ${lastName}`; // "Jānis Bērziņš"

// Virkņu metodes
// let text = "JavaScript ir Lielisks!";
// console.log("Oriģinālā virkne:", text);
// console.log("Lielajiem burtiem:", text.toUpperCase());
// console.log("Mazajiem burtiem:", text.toLowerCase());
// console.log("Virknes garums:", text.length);

// Skaitļu pārvēršana virknē
// let number = 42;
// console.log("Skaitlis:", number);
// console.log("Skaitlis kā virkne:", number.toString());
// console.log("Skaitļa tips:", typeof number);
// console.log("Virknes tips:", typeof number.toString());

// Tā paša mainīgā izmaiņu operatori (programmēšanas valodu specifika)
// let x = 5;
// x = x + 1;
// x++; // tas ir tas pats kā x = x + 1;
// x--; // tas ir tas pats kā x = x - 1;
// x += 3; // tas ir tas pats kā x = x + 3;
// x -= 2; // tas ir tas pats kā x = x - 2;
// x *= 4; // tas ir tas pats kā x = x * 4;
// x /= 2; // tas ir tas pats kā x = x / 2;
// x %= 3; // tas ir tas pats kā x = x % 3;
// Tas pats strādā arī, piemēram, ar simbolu virknēm
// let str = "Hello";
// str += " World"; // tas ir tas pats kā str = str + " World";
// console.log(str); // "Hello World"

// --------------------------------------------
// 5. Funkcijas: kā tās definēt un lietot

// Funkcijas ir koda bloki, kas veic konkrētu uzdevumu.
// Funkciju definē vienreiz, bet izsaukt var neskaitāmi daudz reižu.

// Funkcijas definīcija:
// function greet() {
//   // Funkcijas iekšienē vari rakstīt vairākas koda rindas
//   console.log("Sveiki!");
//   console.log("Laipni lūdzam JavaScript pasaulē!");
// }

// Lai izpildītu funkciju, to izsauc ar tās nosaukumu un iekavām:
// greet();

// --------------------------------------------
// Funkcijas ar parametriem un atgrieztajām vērtībām
// --------------------------------------------
// Piemērs: funkcija ar diviem parametriem, kas atgriež summu
// function add(a, b) {
//   const product = a * b;
//   return a + product;
// }

// const x = 6;
// const y = 5;
// console.log(add(y, x)); // 5

// Noklusējuma parametri
// function sveiciens(name = "draugs") {
//   return `Sveiks, ${name}!`;
// }
// console.log(sveiciens("Jānis")); // Sveiks, Jānis!
// console.log(sveiciens()); // Sveiks, draugs!

// Funkciju deklarācija vs izteiksme
// Deklarācija:
// function product(x, y) {
//   return x * y;
// }
// Izteiksme (piekārto mainīgajam):
// const division = function (x, y) {
//   return x / y;
// };

// --------------------------------------------
// Arrow funkcijas (=>) - cita veida sintakse funkciju pierakstam
// --------------------------------------------
// Īsā sintakse: ja ir tikai atgriežama vērtība, var izlaist 'return' un figūriekavas
// const addArrow = (a, b) => {
//   a + b;
// };
// console.log(typeof addArrow);
// const kvadrats = (n) => n * n; // ar vienu parametru iekavas var izlaist

// Piemērs ar atlikuma parametriem:

// Ieteikums: īsām, vienkāršām atgriežamām operācijām – arrow funkcijas;
// sarežģītākām vai tur, kur svarīgs 'this' – parastās funkcijas.

// ============================================
// UZDEVUMI
// ============================================
// Norāde: strādā tīmekļa pārlūka izstrādātāju rīku konsolē (Console). Raksti savu risinājumu zem katras sadaļas.

// --------------------------------------------------
// Uzdevums 1: Iesildīšanās ar konsoli (10 min)
// --------------------------------------------------
// 1) Izveido mainīgos: vards (string), vecums (number), irStudents (boolean) un piešķir tiem vērtības.
// 2) Izmanto console.log(...) un typeof, lai parādītu vērtības un to tipus.
// 3) Pārveido vecums uz string un izdrukā atkal.
// Hint: String( ... ) vai .toString()
// const vards = "Atis";
// const vecums = 25;
// const irStudents = false;

// console.log(typeof vards, vards);
// console.log(typeof vecums, vecums);
// console.log(typeof irStudents, irStudents);
// console.log(typeof vecums.toString(), vecums.toString());

// --------------------------------------------------
// Uzdevums 2: let vs const (12 min)
// --------------------------------------------------
// 1) Izveido mainīgo ar let un pārraksti tā vērtību (OK).
// 2) Izveido mainīgo ar const un mēģini pārrakstīt (sagaidi kļūdu),
//    pēc tam labo risinājumu, lai kļūdas nebūtu.
// let vecums = 25; // iepriekš bija const vecums
// vecums = 26;

// --------------------------------------------------
// Uzdevums 3: Datu tipi un typeof (12 min)
// --------------------------------------------------
// 1) Izveido pa piemēram katram tipam: string, number, boolean, null, undefined, object.
// 2) Izdrukā typeof katram un paskaidro (komentārā), ko redzi.
// TODO: tavs kods šeit

// const stringMainigais = "teksts";
// console.log(typeof stringMainigais);

// const numberMainigais = 23;
// console.log(typeof numberMainigais);

// const boolMainigais = true;
// console.log(typeof boolMainigais);

// const nullMainigais = null;
// console.log(typeof nullMainigais);

// let undefinedMainigais;
// console.log(typeof undefinedMainigais);

// const objectMainigais = {
//   name: "Atis",
//   surname: "Ozols",
// };
// console.log(typeof objectMainigais);

// --------------------------------------------------
// Uzdevums 4: Skaitļu darbības (12 min)
// --------------------------------------------------
// 1) Saskaiti, atņem, reizinies un dali ar dažām vērtībām.
// 2) Izmanto % (modulo) un Math.floor / Math.round ar dalīšanu.
// 3) Pārbaudi, kas notiek, ja dala ar 0.

// console.log(13 % 2);
// console.log(Math.ceil(2.6));
// console.log(Math.floor(2.6));
// console.log(Math.round(2.6));
// console.log(5 / 0);

// --------------------------------------------------
// Uzdevums 5: Virknes (10 min)
// --------------------------------------------------
// 1) Izveido vārds un uzvārds, apvieno ar + un ar ``.
// 2) Izmēģini .length un metodes: toUpperCase(), toLowerCase().
// 3) Papildus: atrod atstarpi ar indexOf(" ") un sadali vārdā/uzvārdā.

// const vards = "Atis";
// const uzvards = "Ozols";

// const pilnsVards = vards + " " + uzvards;
// const pilnsVards2 = `Mans vārds ir ${vards} ${uzvards}`;

// console.log(pilnsVards.length);

// --------------------------------------------------
// Uzdevums 6: Objekts (12 min)
// --------------------------------------------------
// 1) Izveido objektu persona ar atslēgām: name, age, city.
// 2) Izdrukā persona.name, nomaini city, pievieno jaunu lauku isStudent.
// 3) Izdrukā visu objektu.

// const persona = {
//   name: "Atis",
//   age: 25,
//   city: "Tukums",
//   school: {
//     name: "TRVG",
//     year: 2025,
//   },
// };

// console.log(persona);

// // neveicot piešķiršanu visam objektam,
// // ir iespējams mainīt atribūtu vērtības
// persona.name = "Jānis";

// console.log(persona);

// --------------------------------------------------
// Uzdevums 7: Funkcijas (12–15 min)
// --------------------------------------------------
// 1) Uzraksti funkciju sveiciens(name), kas atgriež "Sveiks, <name>!".
// 2) Uzraksti funkciju kvadrats(n), kas atgriež n*n.
// 3) Izsauc abas funkcijas ar vairākām vērtībām un izdrukā rezultātus.

// function sveiciens(name) {
//   //   return `Sveiks, ${name}`;
//   return "Sveiks, " + name + "!";
// }

// const result = sveiciens("Atis");
// console.log(result);
// console.log(sveiciens("Jānis"));

// function kvadrats(n) {
//   return n * n;
// }

// const result2 = kvadrats(6);
// console.log(result2);
// console.log(kvadrats(8));

// --------------------------------------------------
// Uzdevums 8: Mini kalkulators (4., 6. un 7.) (12–15 min)
// --------------------------------------------------
// 1) Uzraksti funkciju aprekins(a, b), kas atgriež objektu ar laukiem:
//    summa, starpiba, reizinajums, dala.
// 2) Izsauc ar vairākiem skaitļu pāriem un izdrukā rezultātu objektu.

// function aprekins(a, b) {
//   return {
//     summa: a + b,
//     starpiba: a - b,
//     reizinajums: a * b,
//     dala: a / b,
//   };
// }

// function aprekins(a, b) {
//   const summa = a + b;
//   const starpiba = a - b;
//   const reizinajums = a * b;
//   const dala = a / b;

//   const result = {
//     summa,
//     starpiba,
//     reizinajums,
//     dala,
//   };

//   return result;
// }

// console.log(aprekins(2, 6));

// --------------------------------------------------
// Uzdevums 9: const un objekti (8–10 min)
// --------------------------------------------------
// 1) Izveido const persona2 = { name: "Anna", age: 30 }.
// 2) Maini persona2.age (OK) un mēģini pārrakstīt visu persona2 = ... (kļūda).
// 3) Komentārā paskaidro atšķirību: īpašības drīkst mainīt, bet mainīgo ar const – nē.

// const persona2 = {
//   name: "Atis",
//   age: 25,
//   city: "Tukums",
//   school: {
//     name: "TRVG",
//     year: 2025,
//   },
// };

// console.log(persona2);

// // neveicot piešķiršanu visam objektam,
// // ir iespējams mainīt atribūtu vērtības
// persona2.age = 26;

// console.log(persona2);
