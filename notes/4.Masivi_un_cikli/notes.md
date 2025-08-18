# Piezīmes: 4.Masivi_un_cikli

Mērķis: izprast masīvus (sarakstus), tipiskās metodes un iterācijas veidus. Pāreja no vienkāršiem tipiem uz kolekcijām un datu apstrādes domāšanu.

Saistītais fails: `course/4.Saraksti_un_cikli/script.js` (teorija + uzdevumi 1–14).

## Konspekts (teorija; seko `course/4.Saraksti_un_cikli/script.js` secībai)

Šis ir koncentrēts konspekts bez laika plāniem, demo skriptiem vai didaktikas. Mērķis — ātra teorijas atsauce mācīšanas brīdī.

### 1) Kas ir saraksts (masīvs)
- Sakārtota vērtību kolekcija ar indeksiem, sākot no 0.
- Garums `arr.length`, pirmais `arr[0]`, pēdējais `arr[arr.length - 1]`.

Q&A — Masīvu pamati
- J: Kā iegūt pēdējo elementu? A: `arr[arr.length - 1]`.
- J: Vai indeksi sākas ar 1? A: Nē, ar 0.

### 2) Piekļuve un maiņa pēc indeksa
- `arr[i] = jaunaVērtība` — maina elementu dotajā pozīcijā.

### 3) Pievienošana/noņemšana galā un sākumā
- `push` (pievieno galā, atgriež jauno garumu), `pop` (noņem pēdējo, atgriež noņemto).
- `unshift` (pievieno sākumā, atgriež jauno garumu), `shift` (noņem pirmo, atgriež noņemto).
- Visas šīs metodes maina oriģinālo masīvu.

Q&A — Pievienošana/noņemšana
- J: Ko atgriež `pop()`? A: Noņemto elementu.
- J: Vai `unshift` maina masīvu? A: Jā, pievieno sākumā un maina garumu.

### 4) Meklēšana un kopēšana
- `includes` (bool), `indexOf` (indekss vai `-1`).
- `slice(sakums, beigas)` atgriež kopiju (nemaina oriģinālu).

Q&A — Meklēšana
- J: Kāpēc `includes(obj)` atgriež `false`? A: Salīdzina pēc references; objektu meklē pēc lauka ar ciklu.

### 5) `splice` — modificē oriģinālu
- `splice(no, cik, ...jaunie)` izņem/ievieto elementus masīvā (maina oriģinālu).

Q&A — slice vs splice
- J: Kura metode nemaina oriģinālu? A: `slice`.

### 6) Savienošana un dalīšana
- `join(", ")` veido virkni (piem., CSV); nemaina masīvu.
- `concat` atgriež jaunu masīvu ar apvienotām vērtībām.

Q&A — join/concat
- J: Vai `join` maina masīvu? A: Nē, tikai atgriež virkni.

### 7) Iterēšana
- `for` ar indeksu (pilna kontrole), `for...of` pa vērtībām (vienkāršāk).
- Neizmanto `for...in` masīviem (tas iterē pa atslēgām).

Q&A — Iterācija
- J: Kad `for`, kad `for...of`? A: Indeksēšanai — `for`; tikai vērtībām — `for...of`.

### 8) Saraksts ar objektiem
- Katrā elementā ir objekts (piem., `{ vards, vecums }`).
- Tipiski uzdevumi: atlasīt pēc nosacījuma (>=18), atrast pēc īpašības, saskaitīt kopsavilkumu.

Q&A — Objekti masīvā
- J: Ko atgriezt, ja nav atrasts? A: `null` vai citu skaidri definētu "nav" vērtību.

### Termini un definīcijas
- Mutējošas metodes (maina oriģinālu): `push`, `pop`, `shift`, `unshift`, `splice`.
- Nematējošas metodes: `slice`, `concat`, `join`.
- CSV — komatatdalīta virkne no masīva (`join`).
- Iterācija — secīga elementu apstrāde masīvā.

---
Ātrās atsauces:
- Teorija + uzdevumi: `course/4.Saraksti_un_cikli/script.js`.
