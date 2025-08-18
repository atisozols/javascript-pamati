console.log("4. tēma: sāc darbu šeit ⤵");

// ============================================
// TEORIJA: SARAKSTI UN CIKLI
// ============================================
// Saraksts: sakārtota vērtību kolekcija ar indeksiem, sākot no 0.
// const sajaukts = [42, "teksts", true, null];
// console.log("Saraksts:", sajaukts);
// console.log("Garums:", sajaukts.length);
// console.log("Pirmais elements:", sajaukts[0]);
// console.log("Pēdējais elements:", sajaukts[sajaukts.length - 1]);

// Elementa maiņa pēc indeksa
// sajaukts[1] = "jauns teksts";
// console.log("Pēc maiņas:", sajaukts);

// Pievienošana / noņemšana galā un sākumā
// const krāsas = ["sarkans", "zaļš", "zils"];
// krāsas.push("dzeltens"); // pievieno galā, atgriež jauno garumu
// krāsas.pop(); // noņem pēdējo, atgriež noņemto
// krāsas.unshift("melns"); // pievieno sākumā
// krāsas.shift(); // noņem pirmo
// console.log("krāsas:", krāsas);

// Meklēšana un izgriešana
// console.log('Vai satur "zaļš"?', krāsas.includes("zaļš"));
// console.log('Indekss "zils":', krāsas.indexOf("zils"));
// const kopija = krāsas.slice(0, 2); // nekaitīgi izgriež 2 pirmos
// console.log("slice kopija:", kopija, "oriģināls:", krāsas);

// splice – maina oriģinālu: no indeksa 1 izņem 1 elementu un ieliek "balts"
// const dz = ["a", "b", "c", "d"];
// dz.splice(1, 1, "balts");
// console.log("splice rezultāts:", dz);

// Savienošana un dalīšana
// const vardi = ["Jānis", "Anna", "Ieva"];
// console.log(vardi.join(", ")); // "Jānis, Anna, Ieva"
// const apvienots = [1, 2].concat([3, 4]);
// console.log("concat:", apvienots);

// Iterēšana
// const skaitļi = [1, 2, 3, 4, 5];
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
// Piemērs: izdrukā tos, kuri >= 18
// for (const s of studenti) {
//   if (s.vecums >= 18) console.log(s.vards, "ir pilngadīgs");
// }

// ============================================
// UZDEVUMI
// ============================================

// 1) Pamati (8–10 min)
//   Izveido sarakstu ar 4 elementiem (dažādi tipi). Izdrukā garumu, pirmo un pēdējo.
// TODO: tavs kods šeit

// 2) push/pop/unshift/shift (8–10 min)
//   Izveido sarakstu, veic vairākas pievienošanas/noņemšanas operācijas un izdrukā katru soli.
// TODO: tavs kods šeit

// 3) includes/indexOf (6–8 min)
//   Pārbaudi, vai sarakstā ir konkrēta vērtība. Ja ir, izdrukā tās indeksu.
// TODO: tavs kods šeit

// 4) slice (6–8 min)
//   Izveido saraksta daļas kopijas ar slice un paskaidro atšķirību no oriģināla.
// TODO: tavs kods šeit

// 5) splice (10–12 min)
//   Ievieto vidū jaunu elementu, izņemot vienu veco. Parādi pirms un pēc.
// TODO: tavs kods šeit

// 6) join (6–8 min)
//   Izveido CSV virkni no saraksta (piemēram, "Jānis,Anna,Ieva").
// TODO: tavs kods šeit

// 7) for iterācija (8–10 min)
//   Izdrukā katru saraksta elementu ar tā indeksu: "[i] = vērtība".
// TODO: tavs kods šeit

// 8) for...of (8–10 min)
//   Saskaiti, cik reizes sarakstā parādās konkrēta vērtība (piem., skaitlis 3).
// TODO: tavs kods šeit

// 9) Nosacījumi + masīvi (10–12 min)
//   No skaitļu saraksta izdrukā tikai pāra elementus.
// TODO: tavs kods šeit

// 10) Saraksts ar objektiem (12–15 min)
//   Dots studentu saraksts {vards, vecums}. Izdrukā tikai pilngadīgos (>=18).
// TODO: tavs kods šeit

// 11) Meklēšana objektu sarakstā (10–12 min)
//   Uzraksti funkciju atrast(stud, v), kas atgriež objektu ar vārdu v vai null.
// TODO: tavs kods šeit

// 12) Kopsavilkums (12–15 min)
//   Aprēķini vidējo vecumu studentu sarakstā (noapaļo līdz 1 zīmei).
// TODO: tavs kods šeit

// 13) Dziļāka manipulācija (papildu, 12–15 min)
//   Dots skaitļu saraksts. Izveido jaunu sarakstu tikai ar pozitīvajiem skaitļiem.
//   (Vari izmantot ciklus un if; vēl neizmanto map/filter.)
// TODO: tavs kods šeit

// 14) Mini-projekts (papildu, 15–18 min)
//   Dots skaitļu saraksts ar priekšmetiem { nosaukums, cena }. Izdrukā pārskatu
//   formātā "Nosaukums – cena€" un aprēķini kopējo cenu.
// TODO: tavs kods šeit
