# Piezīmes: 3.Nosacijumi_un_cikli

Mērķis: apgūt loģiskos salīdzinājumus un nosacījumus (`if/else`, `else if`, ternārais, `switch`) un izmantot ciklus (`for`, `while`) ar `break/continue`. Gatavot pamatu problēmu risināšanai ar kontroles plūsmu.

Saistītais fails: `course/3.Nosacijumi_un_cikli/script.js` (teorija + uzdevumi 1–12).

## Konspekts (teorija; seko `course/3.Nosacijumi_un_cikli/script.js` secībai)

Šis ir koncentrēts konspekts bez laika plāniem, demo skriptiem vai didaktikas. Mērķis — ātra teorijas atsauce mācīšanas brīdī.

### 1) Salīdzinājumi un loģiskie operatori
- Salīdzinājumi: `>`, `>=`, `<`, `<=`, `===`, `!==`. Dod priekšroku `===` (tips + vērtība) nevis `==`.
- Loģika: `&&` (un), `||` (vai), `!` (negācija).

Q&A — Salīdzinājumi
- J: Kāpēc `2 == "2"` ir `true`, bet `2 === "2"` ir `false`? A: `==` pārveido tipus, `===` salīdzina tipu un vērtību.
- J: Kā atšķiras `null` un `undefined` salīdzināšana? A: Ar `==` tie ir vienādi, ar `===` — atšķirīgi.
- J: Kāpēc `"10" > 2` var būt `true`? A: Notiek tipa pārvēršana uz skaitli.

### 2) Truthy / falsy
- falsy: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
- truthy: viss pārējais (piem., `"0"`, `{}`, `[]`, `"hello"`).

Q&A — Truthy/falsy
- J: Vai `"0"` ir falsy? A: Nē, tā ir truthy virkne.
- J: Kāpēc `Boolean({})` ir `true`? A: Tukšs objekts joprojām ir objekts (truthy).

### 3) if/else un else if ķēde
- `if` pamati, `else` alternatīva, `else if` vairākiem intervāliem.
- Secība no specifiskā uz vispārīgo; intervāli nedrīkst pārklāties.

Q&A — if/else
- J: Kur likt robežas `>=`/`>`? A: Definē viennozīmīgi (piem., `>= 18` pieaugušais).

### 4) Ternārais operators
- Īss `if/else` pieraksts: `nosac ? jaTrue : jaFalse`.
- Noder vienkāršiem lēmumiem (piem., pāra/nepāra).

Q&A — Ternārais
- J: Kad nelietot ternāro? A: Ja loģika nav vienrindes — labāk `if/else`.

### 5) switch
- Diskrētas vērtības; neaizmirst `break`; `default` gadījums.

Q&A — switch
- J: Kad izvēlēties `switch`? A: Kad salīdzinām vienu mainīgo ar daudzām fiksētām vērtībām.

### 6) Cikli: for, for...of, while
- `for` ar skaitītāju (kontrole pār indeksu).
- `for...of` pa vērtībām (var iterēt pa virkni/burtiem).
- `while` kamēr nosacījums ir patiess; neaizmirst mainīt stāvokli.
- Uzmanies ar off-by-one (`i < n` vs `i <= n`).

Q&A — Cikli
- J: Kad `for`, kad `while`? A: `for` zināmam soļu skaitam; `while` — kamēr apstākļi.
- J: Ko iterē `for...of` pār virkni? A: Atsevišķus burtus.

### 7) break un continue
- `continue` izlaiž šo iterāciju; `break` pārtrauc cilpu.

Q&A — break/continue
- J: Kad lietot `break`? A: Kad esi atradis vajadzīgo un nav jēgas turpināt.

### Termini un definīcijas
- Kontroles plūsma — kā programma pieņem lēmumus un atkārto darbības.
- Truthy/falsy — vērtību patiesuma interpretācija.
- Ternārais operators — īss nosacījuma izteiciens.
- `break`/`continue` — cilpu vadības instrukcijas.

---
Ātrās atsauces:
- Teorija + uzdevumi: `course/3.Nosacijumi_un_cikli/script.js`.
