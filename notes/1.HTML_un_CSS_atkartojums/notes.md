# Piezīmes: 1.HTML_un_CSS_atkartojums

Mērķis: atsvaidzināt būtiskāko no HTML un CSS, akcentēt semantiku, piekļūstamību un tipiskus UI blokus. Nodrošināt pamatu nākamajām JS nodarbībām.

## Konspekts (teorija; seko `course/1.HTML_un_CSS_atkartojums/index.html` struktūrai)

Šis ir koncentrēts konspekts bez laika plāniem, demo skriptiem vai didaktikas. Mērķis — ātra teorijas atsauce mācīšanas brīdī.

### 1) Populārāko tagu galerija
- Teksts: `strong` (semantisks uzsvars/svarīgums), `em` (uzsvērta intonācija), `u` (piesardzīgi lietot), `mark` (izcelts fragments), `small` (sekundāra informācija), `code` (koda fragments), `kbd` (lietotāja taustiņi).
- Citāti un priekšformatēts: `blockquote` (ārējs citāts), `pre` + `code` (saglabā atstarpes/rindas).
- Saraksti: `ul` (nesarindots), `ol` (sarindots), `dl` (termins–definīcija pāri).
- Attēli: `img` ar korektu `alt`. Grupēšanai — `figure` + `figcaption`.
- Tabulas: `caption`, `thead`/`tbody`, kolonnas virsraksti `th` — svarīgi piekļūstamībai.
- Formas: `label for` + `id`, ievades tipi (`text`, `email`, `radio`, `select`, `textarea`), `required` pamatvalidācija.
- Multivide un atklāšanas bloki: `video`, `audio` (ar tekstu, ja nav atbalsta), `details` + `summary` (satura atvēršana/aizvēršana bez JS).

Q&A — Tagu galerija
- J: Kad lietot `em`, kad `strong`? A: `em` maina teikuma nozīmes uzsvaru; `strong` — semantisks svarīgums.
- J: Kad `alt=""` ir pareizs? A: Kad attēls ir pilnīgi dekoratīvs (informāciju sniedz apkārtējais teksts).
- J: Kāpēc `label for` ir būtisks? A: Nodrošina sasaisti ar ievadi, labāku piekļūstamību un klikšķināmību.

### 2) HTML+CSS piemēri (no vienkārša uz sarežģītāku)
- Paziņojumu josla: informatīvs stāvoklis (piem., `role="status"`).
- Breadcrumbs: navigācijas konteksts mazām ceļa drupačām (`nav` ar atbilstošu `aria-label`).
- CTA karte: saturs + poga — skaidrs aicinājums uz darbību.
- Avatāru saraksts: `ul` ar avatāriem; papildus „+N” indikators.
- Statusa čipi: atšķir stāvokļus ar krāsām/tekstu (jābūt saprotamiem arī bez krāsas).
- Cenu tabula: vairākas „kartes”, viena „featured” — vizuāli izcelta izvēle.
- Notifikācija: viegli pamanāms ziņojums; stili var izmantot pseudo-elementus.
- Progresjosla (tikai CSS): vizuāls progress; pievieno tekstu/`aria-label` ekrānlasītājiem.
- Tooltip (CSS `:hover`): īsa palīdzība; uzmanies par piekļūstamību uz tastatūras.
- Media object: attēls + saturs blakus (klasisks izkārtojums).
- FAQ ar `details`: saturs, ko var atvērt/aizvērt bez JS.

Q&A — UI piemēri
- J: Kāpēc progresjoslai vajag tekstu/`aria-label`? A: Lai ekrānlasītāji paziņotu progresu.
- J: Kādēļ `ul` ir piemērots avatāru joslai? A: Tā ir saraksta semantika — vienādas vienības.
- J: Ko dara „featured” cena? A: Semantiski — nekas; vizuāli izceļ ieteikto plānu.

### 3) Sarežģītāks izkārtojums (blogs)
- Lapas skelets: `header` (virsraksts, galvenā `nav`), `aside` (papildu saturs), `main` (galvenais saturs), `footer`.
- Sānu josla: meklēšanas forma ar `role="search"`; navigācijas saraksts; iespējami `data-*` atribūti (piem., skaits).
- Saturs: `article` ar `header`, `time` (publicēšanas laiks), tēmu etiķetes.
- CSS selektori (atgādinājums): pēctecis `.klase .bērns`, tiešais bērns `>`, blakus brālis `+`, atribūtu selektori `[type="email"]`, stāvokļi `:hover/:focus/:disabled`, strukturālie `:nth-child`, `:first-child`.

Q&A — Izkārtojums
- J: Kad lietot `aside`, nevis `section`? A: Ja saturs ir papildinošs galvenajam (nevis pamatsaturam).
- J: Kāpēc `time` ir noderīgs? A: Mašīnlasāma publikācijas informācija (`datetime`), SEO, piekļūstamība.
- J: Kad izmantot `switch` vietā `nav` sarakstā? A: Šeit nē — `nav` + saraksti ir semantiski pareizi (selektori CSS sadaļā palīdz stilēt).

### 4) Uzdevums: pieslēdz JavaScript
- Pievieno lapai `script.js` tā, lai skripts ielādējas pēc satura (parasti pirms `</body>`).
- Pārbaude: ielādējot lapu, jāparādās paziņojumam no `script.js` (skat. `alert`).

Q&A — JS pieslēgšana
- J: Kur ielikt skriptu un kāpēc? A: Pirms `</body>`, lai HTML saturs jau būtu ielādēts.
- J: Vai vajag `defer`? A: Šajā tēmā pietiek ar skripta ievietošanu lapas beigās; `defer` apskatīsim vēlāk.

### Termini un definīcijas
- Semantiskie tagi — nozīmē lomu struktūrā (`header`, `nav`, `main`, `article`, `aside`, `footer`).
- Piekļūstamība — saturs lietojams ar klaviatūru/ekrānlasītāju; `alt`, `label`, `aria-*`.
- Progresjosla — vizuāls progress; jābūt tekstuālai alternatīvai.
- Media object — attēls pa kreisi, teksts pa labi (klasisks raksta izkārtojums).

Saistītie faili
- `course/1.HTML_un_CSS_atkartojums/index.html` — demonstrācijas saturs.
- `course/1.HTML_un_CSS_atkartojums/script.js` — pirmais JS pieslēgšanas tests (alert).

---
Ātrās atsauces:
- Uzdevums failā: `index.html` sadaļā „Uzdevums: Pievieno JavaScript”.
- Demonstrācijas stili: `course/1.HTML_un_CSS_atkartojums/style.css`.

