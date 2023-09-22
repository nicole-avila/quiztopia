# Quiztopia

Quiztopia är en webbapp som förvandlar stadsutforskning till en interaktiv och kunskapsrik upplevelse. Appen låter användare skapa och spela geografiskt baserade quizar medan de utforskar olika platser i städer. Här är en kort förklaring av vad appen gör:

### Funktionalitet

- Det går att skapa konto och logga in samt logga ut.
- Det går att skapa ett quiz.
- Det går att lägga till frågor på ett skapat quiz och placera ut frågorna på en karta (Mapbox).
  - En fråga innehåller: Frågan, svaret samt koordinater på kartan (longitud och latitud).
- Det går att se alla quiz, vad quiz:et heter samt vem som skapat det.
- Det går att välja ett quiz och se alla frågor på kartan.
- Det ska enbart behövas loggas in för skapa quiz och lägga till frågor.

### API-dokumentation

Swagger: http://quiztopia-api-documentation.s3-website.eu-north-1.amazonaws.com/#/

### Har använt mig av:

- **Geolocation API**.
- JSON Web Token (JWT).
- Mapbox JS - karta.
- Lagt till att kunna ta bort ett quiz som man själv skapat.

#### Appen är gjort i React + TypeScript

![Alt text]('./public/assets/quiztopia.png')
