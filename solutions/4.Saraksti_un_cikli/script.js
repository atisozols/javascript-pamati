console.log("4. tēma: sāc darbu šeit ⤵");

// ============================================
// TEORIJA: SARAKSTI UN CIKLI
// ============================================
// Saraksts: sakārtota vērtību kolekcija ar indeksiem, sākot no 0.
// const sajaukts = [42, "teksts", true, null];
// console.log("Saraksts:", sajaukts);
// console.log("Garums:", sajaukts.length);
// console.log("Pirmais elements:", sajaukts[3]);
// console.log("Pēdējais elements:", sajaukts[sajaukts.length - 1]);

// Elementa maiņa pēc indeksa
// sajaukts[1] = "jauns teksts";
// console.log("Pēc maiņas:", sajaukts);

// Pievienošana / noņemšana galā un sākumā
const krāsas = ["sarkans", "zaļš", "zils"];
// console.log(krāsas);
// const tagadMasivaIr = krāsas.push("dzeltens"); // pievieno galā, atgriež jauno garumu
// console.log(krāsas);
// krāsas.pop(); // noņem pēdējo, atgriež noņemto
// console.log(krāsas);
// krāsas.unshift("melns"); // pievieno sākumā
// console.log(krāsas);
// krāsas.shift(); // noņem pirmo

// Meklēšana un izgriešana
// console.log('Vai satur "zaļš"?', krāsas.includes("zaļš"));
// console.log('Indekss "zils":', krāsas.indexOf("oranžs"));
// const kopija = krāsas.slice(0, 2); // nekaitīgi izgriež 2 pirmos
// console.log("slice kopija:", kopija, "oriģināls:", krāsas);

// splice – maina oriģinālu: no indeksa 1 izņem 1 elementu un ieliek "balts"
// const dz = ["a", "b", "c", "d"];
// dz.splice(1, 2);
// console.log("splice rezultāts:", dz);

// Savienošana un dalīšana
// const vardi = ["Jānis", "Anna", "Ieva"];
// console.log(vardi.join("-")); // "Jānis, Anna, Ieva"
// const apvienots = [1, 2].concat([3, 4]);
// console.log("concat:", apvienots);

// Iterēšana
// const skaitļi = [5, 2, 7, 9, 5];

// for (let i = 0; i < skaitļi.length; i++) {
//   console.log("for indekss", i, "→", skaitļi[i]);
// }

// for (const x of skaitļi) {
//   console.log("for...of vērtība", x);
// }

// Saraksts ar objektiem
// const studenti = [
//   { vards: "Anna", vecums: 20 },
//   { vards: "Jānis", vecums: 17 },
//   { vards: "Ieva", vecums: 22 },
// ];
// console.log("Studenti:", studenti);
// // Piemērs: izdrukā tos, kuri >= 18
// for (const s of studenti) {
//   if (s.vecums >= 18) console.log(s.vards, "ir pilngadīga");
// }

// ============================================
// UZDEVUMI
// ============================================

// 1) Pamati (8–10 min)
//   Izveido sarakstu ar 4 elementiem (dažādi tipi). Izdrukā garumu, pirmo un pēdējo.

// const saraksts = [1, { name: "Atis" }, "JavaScript", null];
// console.log(`pirmais elements: ${saraksts[0]}`);
// console.log(`pēdējais elements: ${saraksts[saraksts.length - 1]}`);
// console.log(`garums: ${saraksts.length}`);

// 2) push/pop/unshift/shift (8–10 min)
//   Izveido sarakstu, veic vairākas pievienošanas/noņemšanas operācijas un izdrukā katru soli.

// const s = [1, 4, 7, 2];
// console.log(`sākotnējais saraksts: ${s}`);
// s.push(6);
// console.log(`pievieno galā: ${s}`);
// s.unshift(4);
// console.log(`pievieno sākumā: ${s}`);
// s.pop();
// console.log(`noņem no beigām: ${s}`);
// s.shift();
// console.log(`noņem no sākuma: ${s}`);

// 3) includes/indexOf (6–8 min)
//   Pārbaudi, vai sarakstā ir konkrēta vērtība. Ja ir, izdrukā tās indeksu.

// const s = [1, 4, 7, 2];
// const num = 8;
// const index = s.indexOf(num);
// if (index !== -1) {
//   console.log(`${num} atrodas ${index}. pozīcijā`);
// } else {
//   console.log(console.log(`${num} nav sarakstā`));
// }

// 4) slice (6–8 min)
//   Izveido saraksta daļas kopijas ar slice un paskaidro atšķirību no oriģināla.

// const s = [1, 4, 7, 2];
// console.log(s.slice(1, 3)); // slice neizmaina esošo sarakstu, tikai paņem fragmentu no tā

// 5) splice (10–12 min)
//   Ievieto vidū jaunu elementu, izņemot vienu veco. Parādi pirms un pēc.

// const s = [1, 4, 7, 2];
// s.splice(2, 0, 5); // splice IZMAINA oriģinālo mainīgo
// console.log(s);

// 6) join (6–8 min)
//   Izveido CSV(comma separated values) virkni no saraksta (piemēram, "Jānis,Anna,Ieva").

// const s = [1, 4, 7, 2];
// console.log(s.join(","));

// 7) for iterācija (8–10 min)
//   Izdrukā katru saraksta elementu ar tā indeksu: "[i] = vērtība".

// const s = [1, 4, 7, 2];
// for (let i = 0; i < s.length; i++) {
//   console.log(`indekss: ${i} un elements: ${s[i]}`);
// }

// 8) for...of (8–10 min)
//   Saskaiti, cik reizes sarakstā parādās konkrēta vērtība (piem., skaitlis 3).

// const s = [1, 4, 5, 3, 2, 3, 3];
// const meklejamaVertiba = 3;
// let skaits = 0;
// for (const element of s) {
//   if (element === meklejamaVertiba) skaits++;
// }
// console.log(skaits);

// 9) Nosacījumi + masīvi (10–12 min)
//   No skaitļu saraksta izdrukā tikai pāra elementus.

// const s1 = [1, 4, 5, 3, 2, 3, 8, 3];
// let paraElemSkaits = 0;
// for (const element of s1) {
//   if (element % 2 === 0) {
//     console.log(element);
//     paraElemSkaits++;
//   }
// }
// console.log("pāra elementu skaits:", paraElemSkaits);

// 10) Saraksts ar objektiem (12–15 min)
//   Dots studentu saraksts {vards, vecums}. Izdrukā tikai pilngadīgos (>=18).

// Saraksts ar objektiem
// const studenti = [
//   { vards: "Žanna", vecums: 20 },
//   { vards: "Jānis", vecums: 17 },
//   { vards: "Līga", vecums: 22 },
// ];
// console.log("Studenti:", studenti);
// // Piemērs: izdrukā tos, kuri >= 18
// for (const s of studenti) {
//   if (s.vecums >= 18) console.log(s.vards, "ir pilngadīga");
// }

// 11) Meklēšana objektu sarakstā (10–12 min)
//   Uzraksti funkciju atrast(stud, v), kas atgriež objektu ar vārdu v vai null.

// const studenti = [
//   { vards: "Žanna", vecums: 20 },
//   { vards: "Jānis", vecums: 17 },
//   { vards: "Līga", vecums: 22 },
// ];

// function atrast(studentuSaraksts, v) {
//   for (const students of studentuSaraksts) {
//     if (students.vards === v) return students;
//   }
//   return null;
// }

// console.log(atrast(studenti, "Jānis"));
// console.log(atrast(studenti, "Juris"));

// 12) Kopsavilkums (12–15 min)
//   Aprēķini vidējo vecumu studentu sarakstā (noapaļo līdz 1 zīmei).

const studenti = [
  { vards: "Žanna", vecums: 20 },
  { vards: "Jānis", vecums: 17 },
  { vards: "Līga", vecums: 22 },
];

let vecumaSumma = 0;
for (const students of studenti) {
  vecumaSumma += students.vecums;
}
console.log(Math.round((vecumaSumma / studenti.length) * 10) / 10);

// 13) Dziļāka manipulācija (papildu, 12–15 min)
//   Dots skaitļu saraksts. Izveido jaunu sarakstu tikai ar pozitīvajiem skaitļiem.
//   (Vari izmantot ciklus un if; vēl neizmanto map/filter.)
// TODO: tavs kods šeit

// 14) Mini-projekts (papildu, 15–18 min)
//   Dots skaitļu saraksts ar priekšmetiem { nosaukums, cena }. Izdrukā pārskatu
//   formātā "Nosaukums – cena€" un aprēķini kopējo cenu.
// TODO: tavs kods šeit
