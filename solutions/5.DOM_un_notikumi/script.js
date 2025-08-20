// console.log("5. tēma: sāc darbu šeit ⤵");

// const btn = document.getElementById("demoBtn");
// btn.addEventListener("click", () => {
//   console.log(
//     "Klikšķis! Atrodi DOM elementus un maini to saturu/stilu saskaņā ar uzdevumu nosacījumiem."
//   );
// });

// ============================================
// TEORIJA: DOM UN NOTIKUMI
// ============================================
// DOM (Document Object Model) – HTML dokumenta koka struktūra, kas ļauj JS piekļūt un mainīt elementus.
// Elementu atlase:
//   - document.getElementById('id')
//   - document.getElementsByClassName()
//   - document.querySelector(' CSS selektors ')
//   - document.querySelectorAll(' CSS selektors ')

// Atlase un pamata lauki
// const ats = document.getElementById("atsauksme");
// console.log("atsauksme →", ats);
// Teksts un HTML
// - textContent: tikai teksts
// - innerText: vizuāli redzamais teksts (līdzīgi, bet atkarīgs no stiliem)
// - innerHTML: interpretē kā HTML (uzmanīgi ar drošību!)
// ats.textContent = "Sveiks, apmeklētāj!";
// ats.innerHTML = "<strong>Sveiks</strong>, apmeklētāj!";

// Vērtības ievadei / formām
// const ievade = document.getElementById("ievade");
// console.log("ievades sākuma vērtība:", ievade.value);

// Klases maiņa
// const ats = document.getElementById("atsauksme");
// ats.classList.add("highlight");
// ats.classList.remove("highlight");
// ats.classList.toggle("highlight");

// Jaunu elementu izveide / pievienošana / izņemšana
// const saraksts = document.getElementById("saraksts");
// const jauns = document.createElement("li");
// jauns.className = "item";
// jauns.textContent = "Jauns vienums";
// saraksts.appendChild(jauns);
// saraksts.removeChild(saraksts.firstElementChild);
// document.body.appendChild(jauns); // ielikt body beigās - lapas apakšā
// Noņemšana: saraksts.removeChild(saraksts.lastElementChild)

// Notikumi: JS ir notikumu balstīta valoda – reakcija uz "klikšķi", "ievadi", "peles kustību" u.c.
// addEventListener('event', handler)
// const ats = document.getElementById("atsauksme");
// document.getElementById("btnText").addEventListener("click", () => {
//   ats.textContent = "Teksts nomainīts!";
// });
// document.getElementById("btnToggle").addEventListener("click", () => {
//   ats.classList.toggle("highlight");
// });
// document.getElementById("btnAdd").addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.className = "item";
//   li.textContent = "Pievienots " + new Date().toLocaleTimeString();
//   saraksts.appendChild(li);
// });
// document.getElementById("btnRemove").addEventListener("click", () => {
//   if (saraksts.lastElementChild)
//     saraksts.removeChild(saraksts.lastElementChild);
// });

// Ievades notikumi
const ievade = document.getElementById("ievade");
ievade.addEventListener("input", () => {
  document.getElementById("output").textContent =
    "Sveiks, " + (ievade.value || "draugs") + "!";
});

// Klaviatūra: Enter nospiešana ievadē, lai palaistu darbību bez klikšķa
// (piem., imitēt "Pievienot vienumu" pogas klikšķi)
ievade.addEventListener("keydown", (notikums) => {
  if (notikums.key === "Enter") {
    console.log("Enter nospiests");
  }
});

// Hover / fokusēšanās
const hoverZona = document.getElementById("hoverZona");
hoverZona.addEventListener("mouseenter", () =>
  hoverZona.classList.add("highlight")
);
hoverZona.addEventListener("mouseleave", () =>
  hoverZona.classList.remove("highlight")
);

// Forma un submit
document.getElementById("forma").addEventListener("submit", (e) => {
  e.preventDefault(); // atceļ formas iesniegšanu/noklusēto darbību
  const v = document.getElementById("vards").value;
  const ep = document.getElementById("epasts").value;
  console.log("Forma iesniegta:", { v, ep });
});

// ============================================
// UZDEVUMI
// ============================================
// Darbojies gan konsolē, gan ar UI. Zem katra – TODO.

// 1) Atlase (8–10 min)
//   Atrodi #atsauksme ar getElementById un ar querySelector. Izdrukā abus.
// TODO: tavs kods šeit

// 2) Teksta maiņa (6–8 min)
//   Nomaini #atsauksme textContent uz savu vērtību.
// TODO: tavs kods šeit

// 3) innerHTML (8–10 min)
//   Iestati #output.innerHTML ar <strong> un <em> piemēriem (uzmanīgi!).
// TODO: tavs kods šeit

// 4) Klases pārslēgšana (8–10 min)
//   Pogai #btnToggle pievieno papildus loģiku: ja izcelts – pogas teksts ir "Izcelts!" citādi – "Nav izcelts" (#output).
// TODO: tavs kods šeit

// 5) Saraksta manipulācija (10–12 min)
//   Uzraksti funkciju pievienotVienumu(teksts) kas izveido <li class="item">teksts</li> un pievieno #saraksts.
// TODO: tavs kods šeit

// 6) Noņemšana (8–10 min)
//   Pievieno pogai #btnRemove loģiku: ja nav bērnu, izdrukā "Tukšs".
// TODO: tavs kods šeit

// 7) Ievade (8–10 min)
//   Rakstot #ievade, #output rāda "Sveiks, <vārds>!" vai "Sveiks, draugs!" ja tukšs.
// TODO: tavs kods šeit

// 8) Notikumi – klikšķi uz saraksta (10–12 min)
//   Uzliec klausītāju #saraksts: uzklikšķinot uz .item, pārslēdz .highlight tieši uz to.
// TODO: tavs kods šeit

// 9) Hover zona (8–10 min)
//   #hoverZona pie mouseenter piešķir .highlight, pie mouseleave noņem. Izdrukā konsolē notikumu tipu.
// TODO: tavs kods šeit

// 10) Kartiņu ģenerēšana (12–15 min)
//   Izveido funkciju, kas iztīra #kartinu-konteiners un pievieno N kartītes ar numuru.
// TODO: tavs kods šeit

// 11) Forma (12–15 min)
//   Validē, ka #vards nav tukšs un #epasts satur "@". Ja ok – izdrukā "Paldies, <vārds>" #output.
// TODO: tavs kods šeit
