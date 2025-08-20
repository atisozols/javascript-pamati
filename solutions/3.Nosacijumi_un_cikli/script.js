// 3. TĒMA — NOSACĪJUMI (if/else), LOĢIKA, CIKLI (for/while)
// Uzdevumi:
//
// 1) Uzraksti funkciju 'atbildeUzLaiku(stunda)', kas:
//    - ja stunda < 12 ⇒ atgriež "Labrīt"
//    - ja 12–17 ⇒ "Labdien"
//    - citādi ⇒ "Labvakar"
//    Pārbaudi ar dažādām vērtībām un izdrukā rezultātu.
//
// 2) Uzraksti for ciklu, kas izdrukā skaitļus 1..10 un norāda, vai tie ir pāra/nepāra (izmanto % 2).
//
// 3) Uzraksti while ciklu, kas skaita no 5 līdz 1 un beigās izdrukā "Starts!".
//
// 4) (Papildu) Uzraksti funkciju 'atzime(score)', kas atgriež "A/B/C/D/F" pēc vērtības intervāliem.

console.log("3. tēma: sāc darbu šeit ⤵");

// ============================================
// TEORIJA: NOSACĪJUMI UN CIKLI
// ============================================
// Bool tipa vērtības: true / false
// console.log(3 !== 3); // true
// console.log('2 == "2" ir', 2 == "2"); // true (NEstingri salīdzina)
// console.log('2 === "2" ir', 2 === "2"); // false (stingri salīdzina tips+vērtība) – ieteicams lietot ===

// Par nosacījumu var izmantot arī vienkārši vērtības. Paskatīsimies, kā tas strādā.
// Truthy / falsy vērtības (pārveidojot uz boolean ar Boolean(...) funckiju):
// falsy: false, 0, -0, 0n, "", null, undefined, NaN
// truthy: viss pārējais (piem., "0", {}, "hello")
// console.log("Boolean(false) →", Boolean(false));
// console.log("Boolean(0) →", Boolean(0));
// console.log('Boolean("") →', Boolean(""));
// console.log("Boolean(null) →", Boolean(null));
// console.log("Boolean(undefined) →", Boolean(undefined));
// console.log("Boolean(NaN) →", Boolean(NaN));
// console.log('Boolean("0") →', Boolean("0"));
// console.log('Boolean("hello") →', Boolean("hello"));
// console.log("Boolean({}) →", Boolean({}));

// Var izmantot arī && (un) un || (vai) operatorus, lai kombinētu vairāku nosacījumu iznākumu.
// console.log("3 > 2 && 2 < 1 ir", 3 > 2 && 2 < 1); // false
// console.log("3 > 2 || 2 < 1 ir", 3 > 2 || 2 < 1); // true

// const x = 4;
// console.log(x <= 4);

// if bez else
// const stunda = 11;
// if (stunda < 12) console.log("Labrīt");
// if (stunda < 12) {
//   console.log("Labrīt");
//   console.log(`Ir plkst. ${stunda}:00`);
// }

// vienkāršs if else
// if (stunda < 12) {
//   console.log("Labrīt");
// } else {
//   console.log("Labdien");
// }

// if / else if / else
// const stunda = 14;
// if (stunda < 12) {
//   console.log("Labrīt");
// } else if (stunda < 18) {
//   console.log("Labdien");
// } else if (stunda < 21) {
//   console.log("Labvakar");
// } else {
//   console.log("Arlabunakti");
// }

// Ternārais (ternary) operators (īsais if):
// const vecums = 19;
// const statuss = vecums >= 18 ? "pilngadīgs" : "nepilngadīgs";
// console.log("Statuss:", statuss);

// switch
// const diena = 1;
// switch (diena) {
//   case 0:
//     console.log("Svētdiena");
//     break;
//   case 1:
//     console.log("Pirmdiena");
//     break;
//   case 2:
//     console.log("Otrdiena");
//     break;
//   default:
//     console.log("Cita diena");
// }

// Cikli
// for – ar intervālu:
// for (let i = 0; i < 10; i++) {
//   console.log("i =", i);
// }

// for...of – iterācija pa virkni (tekstā pa burtiem):
// const burti = "ABC";
// for (const burts of burti) {
//   console.log("burts:", burts);
// }

// while
// let n = 3;
// while (n > 0) {
//   console.log("n =", n);
//   n--;
// }

// break / continue
// for (let i = 1; i <= 8; i++) {
//   if (i % 2 !== 0) continue; // izlaiž 3
//   if (i >= 5) break; // apstājas pie 5
//   console.log("cikls:", i);
// }

// ============================================
// UZDEVUMI
// ============================================
// Darbojies konsolē. Zem katra uzdevuma – TODO.

// 1) Loģika un salīdzinājumi (8–10 min)
//   Izdrukā salīdzinājumu rezultātus: >, >=, <, <=, ===, !== ar dažādiem tipiem.
//   Paskaidro atšķirību starp == un ===.
// 2) Papildus: salīdzini null un undefined ar == un ===.

// console.log("Anna" !== "Anna");
// console.log(3 <= 5);
// console.log(22 == "22");
// console.log(null == undefined);
// console.log(null === undefined);

// 2) Truthy / falsy (8–10 min)
//   Izdrukā Boolean(...) dažādām atsevišķām vērtībām: false, 0, "", null, undefined, NaN, "0", "hello".
//   Pievieno savus piemērus un īsu komentāru par rezultātu.

// console.log(Boolean("")); // tukša virkne būs false
// console.log(Boolean("1")); // jebkāda cita virkne - true

// let number;
// console.log(Boolean(number)); // nav definēta vērtība - false
// number = 3;
// console.log(Boolean(number)); // true

// 3) if/else pamati (8–10 min)
//   Funkcija kategorija(vecums): <13 "bērns", 13–17 "pusaudzis", >=18 "pieaugušais".

// function kategorija(vecums) {
//   if (vecums < 13) {
//     return "bērns";
//   } else if (vecums < 18) {
//     return "pusaudzis";
//   } else {
//     return "pieaugušais";
//   }
// }

// function kategorija(vecums) {
//   let result;

//   if (vecums < 13) {
//     result = "bērns";
//   } else if (vecums < 18) {
//     result = "pusaudzis";
//   } else {
//     result = "pieaugušais";
//   }

//   return result;
// }

// 4) && un ||
// Izveido vairākas situācijas, kur nosacījumi tiek kombinēti ar && un ||.
// Secini, kādas ir šo operatoru atšķirības

// const a = 3;
// const b = 3;
// const c = 2;

// console.log(a === b && b > c && c > a);
// console.log(a === b || b > c || c > a);
// console.log(a === b || (b > c && c > a));
// console.log((a === b && b > c) || c > a);

// 5) else if ķēde (8–10 min)
//   Funkcija atzime(score): >=90 A, >=80 B, >=70 C, >=60 D, citādi F.

// PAREIZI
// function atzime(score) {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else if (score >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
// NEPAREIZI
// function atzime(score) {
//   if (score >= 60) {
//     return "D";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else if (score >= 90) {
//     return "A";
//   } else {
//     return "F";
//   }
// }

// 6) switch (8–10 min)
//   Funkcija dienasNosaukums(n): 0..6 → svētdiena..sestdiena; citādi "nezināms".

// const diena = 1;
// switch (diena) {
//   case 0:
//     console.log("Svētdiena");
//     break;
//   case 1:
//     console.log("Pirmdiena");
//     break;
//   case 2:
//     console.log("Otrdiena");
//     break;
//   case 3:
//     console.log("Trešdiena");
//     break;
//   case 4:
//     console.log("Ceturtdiena");
//     break;
//   case 5:
//     console.log("Piektdiena");
//     break;
//   case 6:
//     console.log("Sestdiena");
//     break;
//   default:
//     console.log("Cita diena");
// }

// 7) Ternary (6–8 min)
//   Izmanto ternāro, lai noteiktu, vai skaitlis ir pāra vai nepāra.

// const skaitlis = 6;
// const statuss = skaitlis % 2 ? "pāra" : "nepāra";

// 8) for ar "range" (10–12 min)
//   Izdrukā skaitļus 1..20, bet "panna" ja dalās ar 3, "cotta" – ar 5, "panna cotta" – ar abiem.

// for (let i = 1; i < 21; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("panna cotta");
//   } else if (i % 3 === 0) {
//     console.log("panna");
//   } else if (i % 5 === 0) {
//     console.log("cotta");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) console.log("panna");
//   if (i % 5 === 0) console.log("cotta");
//   if (i % 5 !== 0 && i % 3 !== 0) console.log(i);
// }

// 9) for...of ar virkni (8–10 min)
//   Saskaiti, cik reizes tekstā parādās burts "a" (mazais).

// const teksts = "Tukuma Raiņa Valsts ģimnāzija";
// let skaits = 0;

// for (const burts of teksts) {
//   // console.log(burts, burts === "a");
//   if (burts === "a") {
//     skaits += 1;
//   }
// }

// console.log(`tekstā ir ${skaits} a burti`);

// 10) while (8–10 min)
//   Ar while samazini skaitli līdz 0, izdrukājot katru soli.

// let i = 12;
// while (i > 0) {
//   i--;
//   console.log(i);
// }

// 11) break/continue (10–12 min)
//   Izdrukā 1..30, izlaižot 7 un apstājoties pie pirmā skaitļa, kas dalās ar 11.

// for (let i = 1; i < 31; i++) {
//   if (i === 7) continue;
//   if (i % 11 === 0) break;
//   console.log(i);
// }

// 12) Kombinācija (10–12 min)
//   Uzraksti funkciju irParoleStipra(pw): garums >=8, ir cipars, ir lielais burts.
//   Izmanto if/else un for...of.
// TODO: tavs kods šeit
