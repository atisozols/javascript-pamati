# Piezīmes: 2.Mainigie_un_datu_tipi

Mērķis: apgūt mainīgos (`let`, `const`, `var`), primāros datu tipus, pamatdarbības ar skaitļiem un virkņu metodēm, kā arī funkciju pamatus (deklarācija, parametri, atgriešana, arrow funkcijas).

## Konspekts (teorija; seko `course/2.Mainigie_un_datu_tipi/script.js` secībai)

Šis ir koncentrēts konspekts bez laika plāniem, demo skriptiem vai didaktikas. Mērķis — ātra teorijas atsauce mācīšanas brīdī.

### 1) Kas ir mainīgie un kāpēc tos izmanto
- „Konteineri” vērtībām, kuras varam saglabāt un izmantot vēlāk programmā.
- Vērtības var mainīt (ar `let`) vai padarīt nemainīgas atsaucei (ar `const`).

Q&A — Mainīgo jēga
- J: Kāpēc vajag mainīgos? A: Lai dotu vārdus vērtībām un ar tām strādātu atkārtoti.

### 2) Deklarēšana: `let`, `const`, `var`
- `let` — vērtību drīkst pārrakstīt.
- `const` — vērtību pārrakstīt nedrīkst (objektu/masīvu īpašības var mainīt, bet ne pašu atsauci).
- `var` — vēsturisks; šeit neizmantojam.

Q&A — Deklarēšana
- J: Vai drīkst mainīt `const` objekta lauku? A: Jā, bet ne pašu atsauci uz objektu.
- J: Kuru lietot pēc noklusējuma? A: `const`, ja vien nav plānots pārrakstīt vērtību.

### 3) Datu tipi
- `string`, `number`, `boolean`, `null`, `undefined`, `object`.
- `typeof null` → "object" (vēsturisks īpatnības gadījums).

Q&A — Tipa pamati
- J: Kāpēc `"2" + 2` kļūst par `"22"`? A: Notiek tipa pārvēršana uz virkni.

### 4) Darbības ar skaitļiem
- `+`, `-`, `*`, `/`, `%` (atlikums).
- `Math.round`, `Math.floor`, `Math.ceil` — noapaļošana.
- `Math.random()` ∈ [0, 1). Decimāldaļām lieto punktu.

Q&A — Skaitļi
- J: Kad lietot `%`? A: Paritātei (pāra/nepāra), cikliskai loģikai u.c.

### 5) Virknes un tipa pārvēršana
- Savienošana ar `+` un ar template literal ``.
- `.length`, `toUpperCase()`, `toLowerCase()`.
- `toString()` vs `String(...)`: otrais der arī `null/undefined` (pārvērš par "null"/"undefined").

Q&A — Virknes
- J: Kāpēc `toString()` met kļūdu uz `null`? A: Tāpēc ka `null` nav objekts ar metodi; `String(null)` strādā.

### 6) Izmaiņu operatori
- `x++`, `x--`, `x += n`, `x -= n`, `x *= n`, `x /= n`, `x %= n`.

### 7) Funkcijas
- Definē vienu reizi, izsauc vairākas. Parametri un `return` rezultāts.
- Noklusējuma parametri: piemēram, `name = "draugs"`.
- Deklarācija vs izteiksme; funkciju piešķiršana mainīgajiem.

Q&A — Funkcijas
- J: Kāpēc „nāk ārā” `undefined`? A: Trūkst `return` vai rezultātu neizdrukā.

### 8) Arrow funkcijas un atlikuma parametri
- Īsā sintakse: `(a, b) => a + b`.
- Ar vienu parametru iekavas var izlaist: `n => n * n`.
- `...rest` parametri apkopo mainīgu skaitu argumentu.

Q&A — Arrow
- J: Kad izvēlēties arrow? A: Īsiem aprēķiniem/atgriešanai; par `this` runāsim vēlāk.

### Termini un definīcijas
- Mainīgais — nosaukta atsauce uz vērtību (vai uz objektu/masīvu).
- Primārie tipi — `string`, `number`, `boolean`, `null`, `undefined`.
- Objekts — atslēga–vērtība pāri; masīvs — sakārtota kolekcija ar indeksiem.
- Funkcija — atkārtoti izmantojams koda bloks ar iespējamu atgriežamo vērtību.

Saistītie faili
- `course/2.Mainigie_un_datu_tipi/script.js` — teorija un uzdevumi.

---
Ātrās atsauces
- Uzdevumi sekcijā „UZDEVUMI” faila beigās: `course/2.Mainigie_un_datu_tipi/script.js`.

