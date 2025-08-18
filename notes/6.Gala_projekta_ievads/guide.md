# Gala projekta ievads – Skaitļa minēšanas spēle (walkthrough)

**Mērķis:** dators "izdomā" skaitli (piem., 1–100), spēlētājs min. Par katru minējumu dodam atgriezenisko saiti – "Par zemu", "Par augstu" vai "Pareizi!".

## Soli pa solim (sarunvalodā)
1. **Uzģenerē skaitli** 1 līdz 100 un **saglabā to mainīgajā**, piem., `slepenaisSkaitlis`.
2. **Sagatavo skaitītāju** minējumu skaitam, piem., `let meginajumi = 0;`.
3. **Ieliec lapā** ievades lauku (`<input type="number" id="minējums">`), pogu (`<button id="mine">Minēt</button>`) un vietu ziņojumam (`<p id="ziņa"></p>`).
4. **Pievieno klikšķa klausītāju** pogai. Katru reizi, kad nospiež:
   - paņem ievadīto skaitli (`value`), **pārvērš par number** (`parseInt(...)`),
   - **palielini skaitītāju** `meginajumi++`,
   - **salīdzini** ar `slepenaisSkaitlis` un **ieliec tekstu** `#ziņa`: 
     - ja par zemu → "Par zemu, pamēģini lielāku!"
     - ja par augstu → "Par augstu, pamēģini mazāku!"
     - ja precīzi → "Pareizi! 🎉 Tu minēji ar N mēģinājumiem."
5. Kad ir **pareizi**, atspējo ievadi un pogu (lai spēle beigtos).

## Mazie ieteikumi
- Pēc katra minējuma **attīri ievades lauku** un uzliec tam **focus()**, lai var minēt ātrāk.
- Lai neredzētu slepeno skaitli, **nerādi to UI**, bet testēšanas laikā vari `console.log(slepenaisSkaitlis)`.
- Ja gribas – pievieno **"Spēlēt vēlreiz"** pogu, kas no jauna uzģenerē skaitli un atiestata skaitītāju.

Veiksmi! Šis projekts apvieno **mainīgos, nosacījumus, DOM un notikumus**. 💪