## Anothed recruitment task made for Skygate.

Technologies: ReactJS, Redux, MaterialUI, Localstorage.

APIs: https://docs.openaq.org/, https://www.mediawiki.org/wiki/

### Installation

1. Go to a directory you want to clone this project in your terminal,
2. Type: git clone https://github.com/Ogar616/SkygateZadanieRekrutacyjne2.git
3. Type: cd SkygateZadanieRekrutacyjne2/client
4. Type: npm i
5. Type: npm start, and project will run in your browser
6. Disable CORS in your browser. In chrome you can install extension "Allow CORS: Access-Control-Allow-Origin"

### Task requirements

In order to get the highest possible score, all of the following requirements should be completed. Candidates are allowed to use any technology which they consider most suitable. Try to use the best UX/UI practices, feel free in design conception. Good luck!

1. Add an input field for a country name, which should work only for Poland, Germany, Spain and France. It should have an autocomplete.
2. Fetch (and render) names of 10 most polluted cities in those countries (based on input value) from https://docs.openaq.org/.
3. Show cities descriptions as an accordion based on the data from Wikipedia API: https://www.mediawiki.org/wiki/API:Query.
4. Make the input field value persistent between page reloads.
