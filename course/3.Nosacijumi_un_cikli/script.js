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
// Boole tipa vērtības: true / false
// console.log("3 > 2 ir", 3 > 2); // true
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
// console.log("3 > 2 && 2 < 1 ir", 3 > 2 && 2 < 1); // true
// console.log("3 > 2 || 2 < 1 ir", 3 > 2 || 2 < 1); // true

// if bez else
// if (stunda < 12) console.log("Labrīt");
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
// } else {
//   console.log("Labvakar");
// }

// Ternārais (ternary) operators (īsais if):
// const pilngadigs = 19;
// const statuss = pilngadigs >= 18 ? "pilngadīgs" : "nepilngadīgs";
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
// for (let i = 1; i <= 5; i++) {
//   console.log("i =", i);
// }

// for...of – iterācija pa virkni (tekstā pa burtiem):
// for (const burts of "ABC") {
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
//   if (i === 3) continue; // izlaiž 3
//   if (i === 5) break; // apstājas pie 5
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
// TODO: tavs kods šeit

// 2) Truthy / falsy (8–10 min)
//   Izdrukā Boolean(...) dažādām atsevišķām vērtībām: false, 0, "", null, undefined, NaN, "0", "hello".
//   Pievieno savus piemērus un īsu komentāru par rezultātu.
// TODO: tavs kods šeit

// 3) if/else pamati (8–10 min)
//   Funkcija kategorija(vecums): <13 "bērns", 13–17 "pusaudzis", >=18 "pieaugušais".
// TODO: tavs kods šeit

// 4) && un ||
// Izveido vairākas situācijas, kur nosacījumi tiek kombinēti ar && un ||.
// Secini, kādas ir šo operatoru atšķirības
// TODO: tavs kods šeit

// 5) else if ķēde (8–10 min)
//   Funkcija atzime(score): >=90 A, >=80 B, >=70 C, >=60 D, citādi F.
// TODO: tavs kods šeit

// 6) switch (8–10 min)
//   Funkcija dienasNosaukums(n): 0..6 → svētdiena..sestdiena; citādi "nezināms".
// TODO: tavs kods šeit

// 7) Ternārais (6–8 min)
//   Izmanto ternāro, lai noteiktu, vai skaitlis ir pāra vai nepāra.
// TODO: tavs kods šeit

// 8) for ar "range" (10–12 min)
//   Izdrukā skaitļus 1..20, bet "panna" ja dalās ar 3, "cotta" – ar 5, "panna cotta" – ar abiem.
// TODO: tavs kods šeit

// 9) for...of ar virkni (8–10 min)
//   Saskaiti, cik reizes tekstā parādās burts "a" (mazais).
// TODO: tavs kods šeit

// 10) while (8–10 min)
//   Ar while samazini skaitli līdz 0, izdrukājot katru soli.
// TODO: tavs kods šeit

// 11) break/continue (10–12 min)
//   Izdrukā 1..30, izlaižot 7 un apstājoties pie pirmā skaitļa, kas dalās ar 11.
// TODO: tavs kods šeit

// 12) Kombinācija (10–12 min)
//   Uzraksti funkciju irParoleStipra(pw): garums >=8, ir cipars, ir lielais burts.
//   Izmanto if/else un for...of.
// TODO: tavs kods šeit
