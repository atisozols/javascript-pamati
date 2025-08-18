# Gala projekta ievads – Skaitļa minēšanas spēle

**Mērķis:** izveidot minēšanas spēli, ko pakāpeniski sarežģī no ļoti vienkārša prototipa līdz pilnīgākai versijai ar rezultātu tabulu un "hint" iespēju.

## Projekta evolūcija pa soļiem

### 1) Mini versija: diapazons 1–5, tikai "Uzminēji / Neuzminēji"

- **Saskarnes elementi**: skaitļa ievades lauks, poga "Minēt", poga "Sākt no jauna", vieta ziņojumam.
- **Darbības loģika**:
  - Uzsākot spēli tiek izvēlēts slepens skaitlis intervālā 1–5.
  - Minējuma iesniegšanas brīdī ievadīto vērtību salīdzina ar slepeno skaitli un parāda attiecīgu ziņu: "Uzminēji!" vai "Neuzminēji".
  - Sākot jaunu spēli, tiek izvēlēts jauns slepenais skaitlis un notīrīts interfeiss (ziņa, ievade, fokuss atgriežas uz ievadi).
- **Akcepta kritēriji**: darbojas ar 1–5, pareizi paziņo uzvaru/neveiksmi, var sākt no jauna.

### 2) Diapazons 1–100 + atgriezeniskā saite "Zemāk/Augstāk"

- **Saskarnes elementi**: saglabā to pašu, papildini tikai ziņojumus.
- **Darbības loģika**:
  - Slepenais skaitlis tiek izvēlēts intervālā 1–100.
  - Katram minējumam sniedz atgriezenisko saiti:
    - ja minējums ir mazāks par slepeno → "Par zemu, pamēģini lielāku!"
    - ja minējums ir lielāks par slepeno → "Par augstu, pamēģini mazāku!"
    - ja sakrīt → "Pareizi!" un piedāvā jaunu spēli (ievades lauku un minēšanas pogu līdz jaunam raundam var atspējot).
- **Akcepta kritēriji**: korekta atgriezeniskā saite katram minējumam.

### 3) Skaitīt mēģinājumus

- **Saskarnes elementi**: redzams skaitītājs, kurā atspoguļojas teksts "Mēģinājumi: N".
- **Darbības loģika**: pie katra derīga minējuma palielina skaitu par 1 un atjauno rādījumu; sākot jaunu spēli, skaits atgriežas uz 0.
- **Akcepta kritēriji**: skaits palielinās tikai pie minējumiem (ne pie padoma izmantošanas vai restartēšanas).

### 4) Rezultātu tabula (bez saglabāšanas pēc pārlādes)

- **Saskarnes elementi**: redzama rezultātu tabula ar kolonnām, piemēram, Vieta, Datums/Laiks, Diapazons, Mēģinājumi.
- **Dati**: rezultāti tiek glabāti tikai šīs lapas darbības laikā (nav prasības saglabāt pēc pārlādes; netiek izmantota pārlūka glabātuve).
- **Darbības loģika**:
  - Kad spēle beigusies ar "Pareizi!": pievieno ierakstu sarakstam, _sakārto augošā secībā_ pēc mēģinājumu skaita un atjauno tabulas attēlojumu. (Var ierobežot līdz top 10.)
  - Iekļauj darbību "Notīrīt rezultātus" — tā iztīra pašreizējo sarakstu un tabulas attēlojumu.
- **Akcepta kritēriji**: tabula vienmēr ir sakārtota tā, lai labākais (mazākais mēģinājumu skaits) ir augšā, un tā atjaunojas pēc uzvaras. (Nav prasības par saglabāšanu pēc pārlādes.)

### 5) "Hint" vienu reizi katrā spēlē (nepieskaita mēģinājumam)

- **Saskarnes elementi**: poga "Hint" (pieejama tikai jauna raunda sākumā; pēc izmantošanas to atspējo līdz nākamajai spēlei).
- **Darbības loģika (viens no variantiem)**:
  - **Paritāte**: parādi "Slepenais skaitlis ir pāra/nepāra".
  - **Salīdzinājums ar vidu**: parādi "Slepenais skaitlis ir lielāks par 50" (vai "mazāks par 50", ja diapazons 1–100).
  - **Diapazona sašaurināšana**: parādi, ka skaitlis atrodas intervālā, piemēram, 1–50 vai 51–100.
  - Izmantojot padomu, mēģinājumu skaits nemainās. Pēc vienas reizes padoma poga ir atspējota līdz jaunai spēlei.
- **Akcepta kritēriji**: hintu var izmantot tieši 1x katrā spēlē; tas nepalielina mēģinājumu skaitu.

---

## Mazie ieteikumi

- **Attīrīšana un fokuss**: pēc katra minējuma ir ērti notīrīt ievadi un atgriezt kursora fokusu uz to, lai spēlētājs var ātri turpināt.
- **Enter taustiņš**: apsver iespēju atļaut minējumu iesniegt ar Enter, ja ievade ir fokusā.
- **Robežgadījumi**: apstrādā tukšu ievadi, ārpus diapazona esošas vērtības un neskaidru ievadi (nav skaitlis); sniedz skaidras, īsas ziņas.

Šis projekts apvieno kursā apgūtās prasmes: **mainīgos, nosacījumus, darbu ar tīmekļa lapas elementiem un notikumiem**.
