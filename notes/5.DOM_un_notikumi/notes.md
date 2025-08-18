# Piezīmes: 5.DOM_un_notikumi

Mērķis: saprast DOM (Document Object Model) koku, prast atlasīt un mainīt elementus, strādāt ar klasēm, dinamiski veidot elementus, kā arī saistīt lietotāja notikumus (klikšķi, ievade, klaviatūra, hover, formas). Sagatavot pamatu interaktīvai UI uzbūvei bez bibliotēkām.

Saistītais fails: `course/5.DOM_un_notikumi/script.js` (teorija + uzdevumi 1–11). Skatīt arī `index.html` un `style.css` šajā tēmā.

## Teorijas konspekts (saskaņā ar `course/5.DOM_un_notikumi/script.js`)

- DOM: HTML dokumenta koka struktūra, kas ļauj JS piekļūt, lasīt un mainīt elementus, atribūtus un saturu.

- Elementu atlase:
  - `document.getElementById('id')` — atgriež vienu elementu.
  - `document.querySelector('selektors')` — pirmā atbilstība pēc CSS selektora.
  - `document.querySelectorAll('selektors')` — `NodeList`; iziet cauri ar `for...of`.

- Teksts/HTML saturs:
  - `textContent` — ievieto/ nolasa tikai tekstu (drošais noklusējums).
  - `innerText` — vizuāli redzamais teksts (atkarīgs no stiliem). 
  - `innerHTML` — interpretē kā HTML; nelietot ar neuzticamu ievadi (XSS risks).

- Formu un ievades vērtības: elementiem kā `input`/`textarea` izmanto `.value`.

- Klases un stili: `element.classList.add/remove/toggle('klase')` UI stāvokļu pārslēgšanai.

- Elementu ģenerēšana/noņemšana:
  - `document.createElement('li')`, iestati `className`/`textContent`.
  - `vecaks.appendChild(jauns)`; noņemšanai `vecaks.removeChild(bērns)` (pārbaudīt, vai eksistē).

- Notikumi (Events):
  - `element.addEventListener('click' | 'input' | 'keydown' | 'mouseenter' | 'mouseleave', handler)`.
  - Hendlers saņem notikuma objektu `e` (`e.target`, `e.type`, `e.key` u.c.).

- Ievade un atgriezeniskā saite: `input` notikumā uzreiz atjauno `#output` atkarībā no ievades.

- Klaviatūra (Enter): `keydown` → ja `e.key === 'Enter'`, var izsaukt pogas `.click()`; lieto `e.preventDefault()` formās.

- Hover zona: `mouseenter` → pievieno klasi; `mouseleave` → noņem klasi (piem., `.highlight`).

- Forma un validācija: `submit` → `e.preventDefault()`; nolasi laukus (`.value`), pārbaudi: vārds nav tukšs, e-pasts satur `@`; izvada ziņu `#output`.

- Notikumu delegācija: klausītāju liek uz vecāka (`#saraksts`) un pārbauda `e.target` (piem., vai klikšķis uz `.item`) — strādā arī dinamiski pievienotiem bērniem.

## Q&A (konteksts)

- Kāpēc `querySelectorAll` nav masīvs? — Tas atgriež `NodeList`. Izmanto `for...of` vai pārveido uz masīvu, ja vajag metodes kā `map`.
- Kad lietot `textContent` vs `innerHTML`? — `textContent` noklusēti (droši). `innerHTML` tikai, ja tiešām jāievieto HTML un ievade ir droša.
- Kā droši ielikt lietotāja ievadi? — Izmanto `textContent`; nebaro lietotāja ierakstīto vērtību `innerHTML`.
- Kāpēc mana atlase atgriež `null`? — Selektorā trūkst `#`/`.` vai elements vēl nav DOMā (skripts jāizpilda pēc HTML vai ar `defer`).
- Kā apstrādāt elementus, kas tiek pievienoti vēlāk? — Lieto notikumu delegāciju uz vecākelementa un pārbaudi `e.target`.
- Kā apturēt formas noklusēto iesniegšanu? — `e.preventDefault()` `submit` notikumā.
- Kā palaist darbību ar Enter no ievades? — Klausies `keydown`, ja `e.key === 'Enter'`, izsauc saistīto funkciju vai `.click()`.
- Kā noņemt pēdējo saraksta elementu droši? — Pārbaudi `if (saraksts.lastElementChild) { ... }`, citādi izdrukā, ka saraksts ir tukšs.
- Ko lietot „hover” efektiem? — `mouseenter` un `mouseleave` (nevis tikai CSS: te vajag JS loģiku).
- Vai `innerText` ir tas pats, kas `textContent`? — Nē; `innerText` ir atkarīgs no stiliem/layouta, `textContent` ir ātrāks un stilneatkarīgs.

---
Ātrās atsauces:
- Teorija + uzdevumi: `course/5.DOM_un_notikumi/script.js` (tev jau sagatavotas TODO vietas 1–11).
