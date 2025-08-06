# Moment 4- MyAngularII
## Skapa en kurslista

- Startade upp ett nytt Angular-projekt (MyAngularII) och sparade projektet till Github. 
- Tog bort en del demo-kod, strukturerade upp filer och såg över vad för filer/mappar som behövdes för denna uppgift. 
- Skapade en ny komponent, courses, där jag tänkte arbeta med min kurslista.
- Via kommando skapade jag också en service-fil (som ligger i mappen Service), där inhämtningen av datan via hhtpClient sker. 
- I en mapp, Model gjorde jag ett interface som används tillsammans med min kod i courses.component.ts-filen. 
- I courses.component.html-filen gjorde jag element för en tabell, med inputfält för sökfunktion och columner för: Kurskoder, Kursnamn och progression. 
- I course.component.ts-filen har importeringar gjorts från bla courses.service.ts och interfacet (courseInfo.ts). Variabler har gjorts för kurslistan, sortering och filter som jag använder i funktionerna, som också synkar till sidan med ngModel. 
- En orginallista på kurserna och en filtrerad lista gjorde jag för att det fungerade bättre när jag skulle göra filtreringen och därefter ville ångra inmatningen. Istället för att inte ha möjlighet att backa i sökfunktionen så gjordes det möjligt att på detta sätt få upp kurserna som matchade inmatningen.
- Med ngOnInit inhämtas kursernas data när komponenten körs. 
- Därefter har jag gjort funktioner för sortering och hur man kan växla och för filtrering när man skriver in i sökfältet.
- 

### Källor:
#### Skriven av : thne1900, VT 2025. 